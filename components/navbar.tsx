"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border/50">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-foreground hover:text-primary transition-colors">
          dayfarer
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm transition-colors ${isActive("/") ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"}`}
          >
            Home
          </Link>
          <Link
            href="/essays"
            className={`text-sm transition-colors ${isActive("/essays") ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"}`}
          >
            Essays
          </Link>
          <Link
            href="/projects"
            className={`text-sm transition-colors ${isActive("/projects") ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"}`}
          >
            Games
          </Link>
        </div>
      </div>
    </nav>
  )
}
