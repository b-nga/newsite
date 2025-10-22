import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-background/40">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-primary text-balance">--Hello</h1>
            <p className="text-xl text-muted-foreground text-balance">
              I am dayfarer. My goal is to build my own freedom by following my philosphy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-8">
            <Link
              href="/essays"
              className="group rounded-2xl glass p-6 hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                Read My Essays
              </h2>
              <p className="text-muted-foreground">Explore my thoughts on life.</p>
            </Link>

            <Link
              href="/projects"
              className="group rounded-2xl glass p-6 hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                View My Games
              </h2>
              <p className="text-muted-foreground">Check out the games I've built and the work I'm proud of.</p>
            </Link>
          </div>

          <div className="pt-12 space-y-4 glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-foreground">About Me</h2>
            <p className="text-muted-foreground leading-relaxed">
              I'm a full-stack scripter with a genuine passion for developing games on Roblox. I take immense pride in my work. I prioritize writing efficient and performant code that enables people across the world to seamlessly play together across all platforms. If I'm not coding you can find me either studying womens literature or drinking a matcha latte.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
