"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Home, Search, Library, ListMusic, Settings, Compass, PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { playlists } from "@/lib/data"

interface SidebarItemProps {
  icon: React.ElementType
  label: string
  href: string
  active?: boolean
}

function SidebarItem({ icon: Icon, label, href, active }: SidebarItemProps) {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={href}
            className={cn(
              "group flex h-12 w-full items-center px-3 py-2 text-sm font-medium transition-colors hover:bg-primary/10 rounded-md",
              active ? "bg-primary/10 text-primary" : "text-muted-foreground",
            )}
          >
            <Icon className="mr-3 h-5 w-5" />
            <span className="hidden md:inline-block">{label}</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right" className="md:hidden">
          {label}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <div
      className={cn("flex h-full flex-col border-r bg-card transition-all duration-300", isExpanded ? "w-64" : "w-16")}
    >
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
            <span className="text-lg font-bold text-primary-foreground">M</span>
          </div>
          {isExpanded && (
            <span className="text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Moodify
            </span>
          )}
        </Link>
        <Button variant="ghost" size="icon" className="ml-auto" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          )}
        </Button>
      </div>

      <div className="flex flex-col gap-1 p-2">
        <SidebarItem icon={Home} label="Home" href="/" active />
        <SidebarItem icon={Compass} label="Browse" href="/browse" />
        <SidebarItem icon={Library} label="My Library" href="/library" />
        <SidebarItem icon={ListMusic} label="Playlists" href="/playlists" />
        <SidebarItem icon={Search} label="Search" href="/search" />
        <SidebarItem icon={Settings} label="Settings" href="/settings" />
      </div>

      {isExpanded && (
        <>
          <div className="mt-4 px-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-muted-foreground">Your Playlists</h3>
              <Button variant="ghost" size="icon" className="h-7 w-7">
                <PlusCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <ScrollArea className="flex-1 px-2">
            <div className="space-y-1 p-2">
              {playlists.map((playlist) => (
                <Link
                  key={playlist.id}
                  href={`/playlist/${playlist.id}`}
                  className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <div
                    className="h-8 w-8 rounded-sm bg-cover bg-center"
                    style={{ backgroundImage: `url(${playlist.cover})` }}
                  />
                  <span className="truncate">{playlist.title}</span>
                </Link>
              ))}
            </div>
          </ScrollArea>
        </>
      )}
    </div>
  )
}
