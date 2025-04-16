import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white">
                S
              </div>
              <span className="text-xl font-bold">SkillSwap</span>
            </Link>
            <p className="mt-4 text-gray-600">Exchange knowledge and skills directly with others. No money involved.</p>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-purple-100 hover:text-purple-600"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-purple-100 hover:text-purple-600"
              >
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-purple-100 hover:text-purple-600"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-purple-100 hover:text-purple-600"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/browse" className="text-gray-600 hover:text-purple-600">
                  Browse Skills
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-purple-600">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/about#faq" className="text-gray-600 hover:text-purple-600">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-purple-600">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-purple-600">
                  Community Guidelines
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-purple-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-purple-600">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-purple-600">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-purple-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-purple-600">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-purple-600">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-purple-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-purple-600">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-purple-600">
                  Safety Tips
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-purple-600">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <p className="text-center text-gray-500">&copy; {new Date().getFullYear()} SkillSwap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
