"use client"

import type React from "react"

import { useSidebar } from "@/components/sidebar-provider"
import { cn } from "@/lib/utils"
import { LayoutDashboard, FileText, MessageSquare, Settings, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Logo } from "@/components/logo"

interface NavItemProps {
  icon: React.ElementType
  label: string
  active?: boolean
  href?: string
}

function NavItem({ icon: Icon, label, active, href = "#" }: NavItemProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={active ? "secondary" : "ghost"}
            className={cn("w-full justify-start gap-3", active && "bg-primary/10 text-primary")}
            asChild
          >
            <a href={href}>
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right" className="lg:hidden">
          {label}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export function Sidebar() {
  const { isOpen } = useSidebar()

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-20 flex w-64 flex-col border-r bg-background transition-transform duration-300 ease-in-out lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full",
      )}
    >
      <div className="flex h-16 items-center border-b px-4">
        <Logo />
      </div>
      <ScrollArea className="flex-1 px-3 py-4">
        <div className="space-y-1">
          <NavItem icon={LayoutDashboard} label="Dashboard" active />
          <NavItem icon={FileText} label="Notes" />
          <NavItem icon={MessageSquare} label="Chat" />
          <NavItem icon={Headphones} label="Coach" />
          <NavItem icon={Settings} label="Settings" />
        </div>
      </ScrollArea>
    </aside>
  )
}
