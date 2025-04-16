"use client"

import type React from "react"

import { LayoutDashboard, FileText, MessageSquare, Settings, Headphones } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItemProps {
  icon: React.ElementType
  label: string
  active?: boolean
  href?: string
}

function NavItem({ icon: Icon, label, active, href = "#" }: NavItemProps) {
  return (
    <a
      href={href}
      className={cn(
        "flex flex-1 flex-col items-center justify-center gap-1 p-2 text-muted-foreground transition-colors hover:text-foreground",
        active && "text-primary",
      )}
    >
      <Icon className="h-5 w-5" />
      <span className="text-xs">{label}</span>
    </a>
  )
}

export function MobileNav() {
  return (
    <div className="fixed bottom-0 left-0 z-30 flex h-16 w-full border-t bg-background lg:hidden">
      <NavItem icon={LayoutDashboard} label="Dashboard" active />
      <NavItem icon={FileText} label="Notes" />
      <NavItem icon={MessageSquare} label="Chat" />
      <NavItem icon={Headphones} label="Coach" />
      <NavItem icon={Settings} label="Settings" />
    </div>
  )
}
