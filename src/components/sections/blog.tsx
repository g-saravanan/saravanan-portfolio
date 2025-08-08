import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Rss } from 'lucide-react';
import { Input } from '../ui/input';

const blogPosts = [
  {
    title: 'Mastering CI/CD with GitHub Actions',
    description: 'A deep dive into creating robust, scalable, and efficient CI/CD pipelines.',
    tags: ['#DevOps', '#CI/CD', '#GitHub'],
    link: '#',
  },
  {
    title: 'The Business Case for Platform Engineering',
    description: 'How an Internal Developer Platform (IDP) can boost productivity and innovation.',
    tags: ['#PlatformEngineering', '#Cloud', '#SRE'],
    link: '#',
  },
  {
    title: 'Terraform Best Practices for Production',
    description: 'From structuring your code to managing state, here’s how to use Terraform effectively.',
    tags: ['#Terraform', '#IaC', '#Cloud'],
    link: '#',
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">From the Blog</h2>
          <p className="mt-4 text-lg text-muted-foreground">Insights on DevOps, Cloud, and AI-driven productivity.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <a href={post.link} key={post.title} target="_blank" rel="noopener noreferrer" className="group block">
              <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-accent/50">
                <CardContent className="flex-grow p-6">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium text-accent">{tag}</span>
                    ))}
                  </div>
                  <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <span className="text-sm font-semibold text-accent group-hover:underline">
                    Read More <ArrowRight className="inline-block h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </CardFooter>
              </Card>
            </a>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Card className="max-w-xl mx-auto p-6">
             <CardHeader className="p-2">
                <Rss className="h-8 w-8 text-accent mx-auto"/>
                <CardTitle>Subscribe for Updates</CardTitle>
                <CardDescription>Get the latest articles on DevOps, Cloud, and AI delivered to your inbox.</CardDescription>
            </CardHeader>
            <CardContent className="p-2">
                <form className="flex gap-2">
                    <Input type="email" placeholder="your.email@example.com" className="flex-grow"/>
                    <Button type="submit" variant="default" className="bg-primary hover:bg-primary/90">Subscribe</Button>
                </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
