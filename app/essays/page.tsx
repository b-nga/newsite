import Link from "next/link"

export default function Essays() {
  const essayPosts = [
    {
      id: 1,
      slug: "getting-started-nextjs-15",
      title: "Getting Started with Next.js 15",
      excerpt: "Learn the fundamentals of Next.js 15 and how to build modern web applications.",
      date: "Oct 15, 2025",
      readTime: "5 min read",
    },
  ]

  return (
    <main className="min-h-screen glass bg-background/90">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-primary">Essays</h1>
            <p className="text-muted-foreground">Thoughts on life.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {essayPosts.map((post) => (
              <Link key={post.id} href={`/essays/${post.slug}`}>
                <article className="group rounded-2xl h-full p-6 border border-border hover:border-primary bg-card hover:bg-card/80 transition-all cursor-pointer">
                  <div className="space-y-3 h-full flex flex-col">
                    <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground flex-grow line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2 border-t border-border">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
