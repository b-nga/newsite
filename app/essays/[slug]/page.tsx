import Link from "next/link"

const essayPosts: Record<string, any> = {
  "getting-started-nextjs-15": {
    title: "Getting Started with Next.js 15",
    date: "Oct 15, 2025",
    readTime: "5 min read",
    content: `
      Next.js 15 brings powerful new features and improvements to the React framework. In this guide, we'll explore the fundamentals and get you started building modern web applications.

      ## Why Next.js 15?

      Next.js 15 introduces several game-changing features that make building web applications faster and more efficient. The new App Router provides a more intuitive way to structure your application, while Server Components allow you to render components on the server for better performance.

      ## Getting Started

      To create a new Next.js 15 project, use the following command:

      \`\`\`bash
      npx create-next-app@latest my-app
      \`\`\`

      This will scaffold a new project with all the necessary dependencies and configuration.

      ## Key Features

      - **App Router**: A new routing system that's more intuitive and powerful
      - **Server Components**: Render components on the server for better performance
      - **Streaming**: Progressive rendering for faster perceived performance
      - **API Routes**: Built-in API endpoints without additional setup

      ## Conclusion

      Next.js 15 is a powerful framework that makes building modern web applications easier than ever. Start exploring today and build amazing things!
    `,
  },
}

export default function EssayPost({ params }: { params: { slug: string } }) {
  const post = essayPosts[params.slug]

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Post Not Found</h1>
            <p className="text-muted-foreground">The essay you're looking for doesn't exist.</p>
            <Link href="/essays" className="text-primary hover:underline">
              Back to Essays
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/essays" className="text-primary hover:underline mb-8 inline-block">
          ← Back to Essays
        </Link>

        <article className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-foreground">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="prose prose-invert max-w-none space-y-6 text-foreground">
            {post.content.split("\n\n").map((paragraph: string, index: number) => {
              if (paragraph.trim().startsWith("##")) {
                return (
                  <h2 key={index} className="text-2xl font-semibold text-foreground pt-4">
                    {paragraph.replace("##", "").trim()}
                  </h2>
                )
              }
              if (paragraph.trim().startsWith("```")) {
                return (
                  <pre key={index} className="bg-card p-4 rounded-lg overflow-x-auto border border-border">
                    <code className="text-sm text-foreground font-mono">{paragraph.replace(/```/g, "").trim()}</code>
                  </pre>
                )
              }
              if (paragraph.trim().startsWith("-")) {
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 text-foreground">
                    {paragraph.split("\n").map((item: string, i: number) => (
                      <li key={i} className="text-foreground">
                        {item.replace("-", "").trim()}
                      </li>
                    ))}
                  </ul>
                )
              }
              if (paragraph.trim().startsWith("1.")) {
                return (
                  <ol key={index} className="list-decimal list-inside space-y-2 text-foreground">
                    {paragraph.split("\n").map((item: string, i: number) => (
                      <li key={i} className="text-foreground">
                        {item.replace(/^\d+\.\s/, "").trim()}
                      </li>
                    ))}
                  </ol>
                )
              }
              return (
                <p key={index} className="text-foreground leading-relaxed">
                  {paragraph.trim()}
                </p>
              )
            })}
          </div>
        </article>
      </div>
    </main>
  )
}
