import { useRoute, Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft } from "lucide-react";
import { getBlogPost } from "@/lib/blog";
import NotFound from "./not-found";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const post = params?.slug ? getBlogPost(params.slug) : undefined;

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-20 bg-background">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog">
            <Button
              variant="ghost"
              className="mb-8 hover-elevate active-elevate-2"
              data-testid="button-back-to-blog"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to blog
            </Button>
          </Link>

          <div className="mb-8">
            <div className="aspect-video overflow-hidden rounded-md mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
                data-testid="img-blog-header"
              />
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <time
                  className="text-sm text-muted-foreground"
                  dateTime={post.date}
                  data-testid="text-blog-date"
                >
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <h1
              className="font-heading text-4xl sm:text-5xl font-bold mb-4"
              data-testid="heading-blog-title"
            >
              {post.title}
            </h1>
            <p
              className="text-xl text-muted-foreground"
              data-testid="text-blog-excerpt"
            >
              {post.excerpt}
            </p>
          </div>

          <div
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }}
            data-testid="content-blog-post"
          />

          <div className="mt-12 pt-8 border-t border-card-border">
            <Link href="/blog">
              <Button
                variant="outline"
                className="hover-elevate active-elevate-2"
                data-testid="button-more-posts"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                More posts
              </Button>
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
