"use client"

import { useEffect, useState } from "react"

interface GameCardProps {
  id: number
  title: string
  description: string
  image: string
  universeId: string
  link: string
}

export function GameCard({ id, title, description, image, universeId, link }: GameCardProps) {
  const [ccu, setCcu] = useState<string>("Loading...")

  useEffect(() => {
    const fetchCCU = async () => {
      try {
        const response = await fetch(`https://games.roproxy.com/v1/games?universeIds=` + universeId)
        const data = await response.json()

        if (data.data && data.data.length > 0) {
          const playerCount = data.data[0].playing || 'N/A'
          // Format the number with K suffix if over 1000
          const formatted = playerCount >= 1000 ? `${(playerCount / 1000).toFixed(1)}K` : playerCount.toString()
          setCcu(formatted)
        }
      } catch (error) {
        console.error("Error fetching CCU:", error)
        setCcu("N/A")
      }
    }

    fetchCCU()
  }, [universeId])

  return (
    <div className="group rounded-2xl relative overflow-hidden bg-card border border-border hover:border-primary transition-all">
      {/* Game Image Container */}
      <div className="relative h-64 overflow-hidden bg-secondary">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="bg-primary text-primary-foreground p-4 hover:bg-primary/90 transition-colors">
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </a>
        </div>
      </div>

      {/* Game Info */}
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-foreground">{title}</h2>
          <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">{'CCU: '+ccu}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
      </div>
    </div>
  )
}
