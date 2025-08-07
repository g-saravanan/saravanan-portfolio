'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { enhanceImageAction } from '@/app/actions';
import { Loader, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type BlogPost = {
  id: number;
  title: string;
  description: string;
  content: string;
  imageUrl: string | null;
};

const initialBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Rise of Platform Engineering',
    description: 'Exploring the shift from traditional DevOps to a product-centric platform approach.',
    content: 'Platform engineering is an emerging trend that treats infrastructure as a product. By providing developers with self-service tools and capabilities, organizations can accelerate development cycles and improve reliability. This article delves into the core principles of platform engineering and how to build an effective internal developer platform.',
    imageUrl: 'https://placehold.co/600x400.png',
  },
  {
    id: 2,
    title: 'Mastering Kubernetes Cost Management',
    description: 'Strategies and tools for optimizing your Kubernetes cluster costs without sacrificing performance.',
    content: 'Kubernetes can be a cost-effective platform, but without proper management, expenses can spiral out of control. This post covers best practices for monitoring, resource allocation, and autoscaling to keep your cloud bill in check. We also review popular open-source tools like Kubecost and OpenCost.',
    imageUrl: null,
  },
  {
    id: 3,
    title: 'AI in CI/CD: The Next Frontier of DevOps',
    description: 'How artificial intelligence is revolutionizing continuous integration and delivery pipelines.',
    content: 'AI and machine learning are no longer just for applications; they are transforming DevOps itself. From intelligent test selection to predictive failure analysis and automated pipeline optimization, AI is making CI/CD faster, smarter, and more resilient. Learn how you can start incorporating AI into your DevOps workflow.',
    imageUrl: 'https://placehold.co/600x400.png',
  },
];

const BlogSection = () => {
  const [posts, setPosts] = useState<BlogPost[]>(initialBlogPosts);
  const [loadingPostId, setLoadingPostId] = useState<number | null>(null);
  const { toast } = useToast();

  const handleEnhanceImage = async (post: BlogPost) => {
    setLoadingPostId(post.id);
    const result = await enhanceImageAction({ title: post.title, content: post.content });
    setLoadingPostId(null);

    if (result.imageUrl) {
      setPosts(posts.map(p => p.id === post.id ? { ...p, imageUrl: result.imageUrl } : p));
      toast({ title: 'Success', description: 'Image enhanced successfully!' });
    } else {
      toast({ variant: 'destructive', title: 'Error', description: result.error || 'Could not generate image.' });
    }
  };

  return (
    <section id="blog" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">From the Blog</h2>
          <p className="mt-4 text-lg text-muted-foreground">My thoughts on DevOps, Cloud, and AI.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.id} className="flex flex-col">
              <CardHeader>
                {post.imageUrl ? (
                  <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                    <Image src={post.imageUrl} alt={post.title} fill className="object-cover" data-ai-hint="devops cloud ai" />
                  </div>
                ) : (
                  <div className="flex aspect-video w-full items-center justify-center rounded-t-lg bg-muted">
                    <Sparkles className="h-10 w-10 text-muted-foreground" />
                  </div>
                )}
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow" />
              <CardFooter>
                {!post.imageUrl ? (
                  <Button onClick={() => handleEnhanceImage(post)} disabled={loadingPostId === post.id} className="w-full">
                    {loadingPostId === post.id ? (
                      <Loader className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Sparkles className="mr-2 h-4 w-4" />
                    )}
                    Enhance with AI
                  </Button>
                ) : (
                  <Button variant="outline" className="w-full" asChild>
                    <a href="#" onClick={(e) => e.preventDefault()}>Read More</a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
