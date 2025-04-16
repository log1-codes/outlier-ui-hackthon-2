"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"

type SidebarContextType = {
  isOpen: boolean
  toggle: () => void
  close: () => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 1024px)")

  // Set default state based on screen size
  useEffect(() => {
    setIsOpen(isDesktop)
  }, [isDesktop])

  const toggle = () => setIsOpen(!isOpen)
  const close = () => setIsOpen(false)

  return <SidebarContext.Provider value={{ isOpen, toggle, close }}>{children}</SidebarContext.Provider>
}

export const useSidebar = () => {
  const context = useContext(SidebarContext)
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}
