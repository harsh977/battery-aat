"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Battery, Map, BookOpen, Award, Home, Menu, X, User, FileText, Trophy } from "lucide-react"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Battery Types", href: "/battery-types", icon: Battery },
  { name: "Recycling Guide", href: "/guide", icon: BookOpen },
  { name: "Find Centers", href: "/centers", icon: Map },
  { name: "Quiz", href: "/quiz", icon: Award },
  { name: "Make a Pledge", href: "/pledge", icon: FileText },
  { name: "Leaderboard", href: "/leaderboard", icon: Trophy },
  { name: "Dashboard", href: "/dashboard", icon: User },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-green-900/20 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center space-x-2">
          <Battery className="h-8 w-8 text-green-400" />
          <span className="text-xl font-bold text-white">
            Battery<span className="text-green-400">Recycle</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "group flex items-center space-x-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-green-900/20 text-green-400"
                    : "text-gray-300 hover:bg-green-900/10 hover:text-green-400",
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-2 rounded-md px-3 py-2 text-base font-medium",
                    pathname === item.href
                      ? "bg-green-900/20 text-green-400"
                      : "text-gray-300 hover:bg-green-900/10 hover:text-green-400",
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}
