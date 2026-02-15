import { Link } from "@remix-run/react"
import { LuCopy, LuMail } from "react-icons/lu"
import FrameworkIcon from "../FrameworkIcon/FrameworkIcon"
import { useToast } from "~/hooks/use-toast"
import { Button } from "../ui/button"

export default function Info() {
  const { toast } = useToast()
  return (
    <div className="flex w-full flex-col items-start justify-center">
      <Link
        className="flex h-8 items-center justify-start hover:underline"
        to="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resumé <FrameworkIcon icon="pdf" />
      </Link>
      <div className="flex h-8 w-full items-center justify-start gap-2">
        <a
          href="mailto:briantsmiley42@gmail.com"
          className="flex items-center gap-1 hover:underline"
        >
          <LuMail className="size-4" /> briantsmiley42@gmail.com
        </a>
        <Button
          className="flex items-center justify-center"
          title="Copy"
          onClick={() => {
            navigator.clipboard.writeText("briantsmiley42@gmail.com")
            toast({
              title: "Copied email",
            })
          }}
          variant="ghost"
          size="icon"
        >
          <LuCopy className="" />
        </Button>
      </div>
    </div>
  )
}
