import { GameCard } from "@/components/game-card"

export default function Projects() {
  const games = [
    {
      id: 1,
      title: "Space Odyssey",
      description:
        "An immersive space exploration game where you navigate through galaxies, discover new planets, and engage in epic space battles.",
      image: "/space-game-with-planets-and-stars.jpg",
      universeId: "6498622585",
      link: "#",
    },
  ]

  return (
    <main className="min-h-screen bg-background/90 glass">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-primary">Games</h1>
            <p className="text-muted-foreground">A collection of my games</p>
          </div>

          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
              <GameCard
                key={game.id}
                id={game.id}
                title={game.title}
                description={game.description}
                image={game.image}
                universeId={game.universeId}
                link={game.link}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
