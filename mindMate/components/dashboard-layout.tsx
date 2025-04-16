"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Sidebar } from "@/components/sidebar"
import { TopNavbar } from "@/components/top-navbar"
import { MobileNav } from "@/components/mobile-nav"
import { useSidebar } from "@/components/sidebar-provider"
import { cn } from "@/lib/utils"

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { isOpen } = useSidebar()
  const [isMounted, setIsMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="flex h-screen w-full flex-col bg-background">
      <TopNavbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main
          className={cn("flex-1 overflow-y-auto transition-all duration-300 ease-in-out", isOpen ? "lg:ml-64" : "ml-0")}
        >
          <div className="container mx-auto p-4 md:p-6">{children}</div>
        </main>
      </div>
      <MobileNav />
    </div>
  )
}
