"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Browse", href: "/browse" },
    { name: "How It Works", href: "/about" },
    { name: "FAQ", href: "/about#faq" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white">
                S
              </div>
              <span className="text-xl font-bold">SkillSwap</span>
            </Link>
            <nav className="ml-10 hidden md:block">
              <ul className="flex space-x-8">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`text-sm font-medium transition-colors hover:text-purple-600 ${
                        pathname === item.href ? "text-purple-600" : "text-gray-600"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-4">
              <Button variant="outline" className="rounded-full">
                Log In
              </Button>
              <Button className="rounded-full bg-purple-600 hover:bg-purple-700">Sign Up</Button>
            </div>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container mx-auto px-4 pb-4">
            <nav>
              <ul className="space-y-4">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`block py-2 text-base font-medium transition-colors hover:text-purple-600 ${
                        pathname === item.href ? "text-purple-600" : "text-gray-600"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-6 flex flex-col gap-3">
              <Button variant="outline" className="w-full rounded-full">
                Log In
              </Button>
              <Button className="w-full rounded-full bg-purple-600 hover:bg-purple-700">Sign Up</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
