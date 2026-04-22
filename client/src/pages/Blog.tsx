import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { getAllBlogPosts } from "@/lib/blog";

export default function Blog() {
  const posts = getAllBlogPosts();

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1
              className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              data-testid="heading-blog"
            >
              Security Insights
            </h1>
            <p
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
              data-testid="text-blog-intro"
            >
              Practical perspectives on cybersecurity, risk management, and
              translating technical security into business value.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card
                  className="overflow-hidden hover-elevate cursor-pointer h-full flex flex-col"
                  data-testid={`card-blog-${post.slug}`}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <time
                        className="text-sm text-muted-foreground"
                        dateTime={post.date}
                      >
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </div>

                    <h2 className="font-heading text-xl font-semibold mb-3">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
