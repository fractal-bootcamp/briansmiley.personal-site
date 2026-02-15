import { Link } from "@remix-run/react"
import { LuCopy, LuMail } from "react-icons/lu"

export default function Info() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Link to="/resume.pdf" target="_blank" rel="noopener noreferrer">
        Resumé
      </Link>
      <LuMail className="h-4 w-4" /> briansmiley@proton.me{" "}
      <button
        onClick={() => navigator.clipboard.writeText("briansmiley@proton.me")}
      >
        <LuCopy className="h-4 w-4" />
      </button>
    </div>
  )
}
