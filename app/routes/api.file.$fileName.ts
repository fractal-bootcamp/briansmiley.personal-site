import { LoaderFunctionArgs } from "@remix-run/node"
import { z } from "zod"

const B2_APPLICATION_KEY_ID = process.env.B2_APPLICATION_KEY_ID
const B2_APPLICATION_KEY = process.env.B2_APPLICATION_KEY
const B2_BUCKET_NAME = process.env.B2_BUCKET_NAME
const B2_BUCKET_ID = process.env.B2_BUCKET_ID

const B2ApiResponseSchema = z.object({
  authorizationToken: z.string(),
  apiInfo: z.object({
    storageApi: z.object({
      downloadUrl: z.string().url(),
      apiUrl: z.string().url(),
    }),
  }),
})
const B2SignedUrlResponseSchema = z.object({
  bucketId: z.string(),
  fileNamePrefix: z.string(),
  authorizationToken: z.string(),
})

async function getB2Credentials() {
  const authString = Buffer.from(
    `${B2_APPLICATION_KEY_ID}:${B2_APPLICATION_KEY}`
  ).toString("base64")

  const response = await fetch(
    "https://api.backblazeb2.com/b2api/v3/b2_authorize_account",
    {
      headers: {
        Authorization: `Basic ${authString}`,
      },
    }
  )

  if (!response.ok) {
    console.error("B2 auth failed:", response.status, response.statusText)
    throw new Error("Failed to authenticate with B2")
  }

  const data = await response.json()
  return B2ApiResponseSchema.parse(data)
}

async function getSignedUrl(fileName: string, expiresInSeconds: number, wantsDownload: boolean) {
  const credentials = await getB2Credentials()
  const fetchUrl = `${credentials.apiInfo.storageApi.apiUrl}/b2api/v4/b2_get_download_authorization`
  const response = await fetch(
    fetchUrl,
    {
      method: "POST",
      headers: {
        Authorization: credentials.authorizationToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bucketId: B2_BUCKET_ID,
        fileNamePrefix: fileName,
        validDurationInSeconds: expiresInSeconds,
        ...(wantsDownload && {
          b2ContentDisposition: `attachment; filename="${fileName}"`,
        }),
      }),
    }
  )
  if (!response.ok) {
    console.error("Failed to get signed URL:", response.status, response.statusText)
    throw new Error("Failed to get signed URL")
  }
  const body = await response.json()
  return { signedUrl: B2SignedUrlResponseSchema.parse(body), credentials }
}

const LoaderParams = z.object({
  fileName: z.string().min(1, "File name is required"),
})

export async function loader({ request, params }: LoaderFunctionArgs) {
  try {
    const { fileName } = LoaderParams.parse(params)
    const url = new URL(request.url)
    const wantsDownload = url.searchParams.get("download") === "true"

    const { signedUrl, credentials } = await getSignedUrl(fileName, 60 * 5, wantsDownload)

    let fileUrl = `${credentials.apiInfo.storageApi.downloadUrl}/file/${B2_BUCKET_NAME}/${fileName}?Authorization=${signedUrl.authorizationToken}`
    if (wantsDownload) {
      const disposition = encodeURIComponent(`attachment; filename="${fileName}"`)
      fileUrl += `&b2ContentDisposition=${disposition}`
    }
    return new Response(null, {
      status: 302,
      headers: {
        Location: fileUrl,
      },
    })
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to redirect to a B2 signed URL"
    console.error(errorMessage)
    return new Response(errorMessage, { status: 500 })
  }
}
