import { Brain } from "lucide-react"

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Brain className="h-6 w-6 text-primary" />
      <span className="hidden text-xl font-bold text-primary md:inline-block">MindMate</span>
    </div>
  )
}
