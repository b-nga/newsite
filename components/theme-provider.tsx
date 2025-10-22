"use client"

import type React from "react"

import { useEffect } from "react"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  return <>{children}</>
}
