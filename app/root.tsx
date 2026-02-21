import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node"
import clsx from "clsx"
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react"
import { PreventFlashOnWrongTheme, ThemeProvider, useTheme } from "remix-themes"
import { themeSessionResolver } from "./sessions.server"

import stylesheet from "~/tailwind.css?url"
import { Toaster } from "./components/ui/toaster"
import BioHeader from "./components/BioHeader/BioHeader"
import { ModeToggleSwitch } from "./components/mode-toggle-switch"
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap",
  },
]

export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request)
  return {
    theme: getTheme(),
  }
}

export default function AppWithProviders() {
  const data = useLoaderData<typeof loader>()
  return (
    <ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">
      <App />
    </ThemeProvider>
  )
}

export function App() {
  const data = useLoaderData<typeof loader>()
  const [theme] = useTheme()
  return (
    <html lang="en" className={clsx(theme, "h-screen w-full")}>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        <Links />
      </head>
      <body className="bg-lightgray text-darkgray dark:bg-darkgray dark:text-lightgray">
        <div className="flex flex-col items-center py-5">
          <div className="absolute right-5 top-5">
            <ModeToggleSwitch />
          </div>
          <BioHeader />
        </div>
        <Outlet />
        <ScrollRestoration />
        <Toaster />
        <Scripts />
      </body>
    </html>
  )
}
