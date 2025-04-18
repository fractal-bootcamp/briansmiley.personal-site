import { Moon, Sun } from "lucide-react"
import { Theme, useTheme } from "remix-themes"
import { Switch } from "./ui/themeSwitch"

export function ModeToggleSwitch() {
  const [theme, setTheme] = useTheme()

  return (
    <div className="flex items-center">
      <div className="relative">
        <Switch
          checked={theme === Theme.DARK}
          onCheckedChange={(checked) =>
            setTheme(checked ? Theme.DARK : Theme.LIGHT)
          }
        />
        <Sun className="pointer-events-none absolute left-[6px] top-[8px] h-4 w-4 text-foreground opacity-100 transition-opacity duration-300 dark:opacity-40" />
        <Moon className="pointer-events-none absolute right-[6px] top-[8px] h-4 w-4 text-foreground opacity-40 transition-opacity duration-300 dark:opacity-100" />
      </div>
    </div>
  )
}
