'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Linkedin, Mail, Calendar } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

const ContactSection = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', message: '' },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you shortly.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground">Have a project, a question, or just want to connect? Let's talk.</p>
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="How can I help you?" rows={5} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={form.formState.isSubmitting} className="bg-primary hover:bg-primary/90">
                    {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-2xl font-semibold">Or Reach Out Directly</h3>
             <a href="https://calendly.com/your-link" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <Calendar className="h-8 w-8 text-muted-foreground group-hover:text-accent transition-colors" />
                <div>
                    <span className="text-lg font-semibold group-hover:text-accent transition-colors">Book a Call</span>
                    <p className="text-sm text-muted-foreground">Schedule a 30-minute chat on Calendly.</p>
                </div>
            </a>
            <a href="mailto:saravanan@cloudenginelabs.io" className="flex items-center gap-4 group">
                <Mail className="h-8 w-8 text-muted-foreground group-hover:text-accent transition-colors" />
                <div>
                    <span className="text-lg font-semibold group-hover:text-accent transition-colors">Email</span>
                    <p className="text-sm text-muted-foreground">saravanan@cloudenginelabs.io</p>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/saravanan-gnanaguru/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <Linkedin className="h-8 w-8 text-muted-foreground group-hover:text-accent transition-colors" />
                 <div>
                    <span className="text-lg font-semibold group-hover:text-accent transition-colors">LinkedIn</span>
                    <p className="text-sm text-muted-foreground">Connect with me professionally.</p>
                </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
