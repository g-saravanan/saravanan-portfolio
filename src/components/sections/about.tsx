import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const keyHighlights = [
    "Cloud Automation", "Leadership", "Technical Writing", "CI/CD", 
    "Infrastructure as Code (IaC)", "Team Management", "Platform Engineering"
];

const timeline = [
    { 
        role: "Founder", 
        company: "CloudEngine Labs®", 
        period: "2023 – Present",
        description: "Leading a technology startup providing DevOps cloud consulting for product startups, focusing on accelerating delivery and reliability through automation and platform engineering."
    },
    { 
        role: "Self-Employed Consultant", 
        company: "Freelance", 
        period: "2023 – Present",
        description: "Offering expertise in cloud technology, DevOps, infrastructure automation, and technical writing to a variety of clients."
    },
    {
        role: "Freelance Technical Content Writer",
        company: "Self-Employed",
        period: "2019 – Present",
        description: "Creating SEO-optimized technical blogs and articles for product companies on topics like Cloud, DevOps, and SRE."
    },
    {
        role: "DevOps Architect",
        company: "Various (InfraCloud, Microsoft Fabric, Wipro)",
        period: "2020 – 2023",
        description: "Architected and implemented DevOps strategies, specializing in IaC, CI/CD, and multi-cloud environments for large-scale enterprises."
    },
];

const AboutSection = () => {
    return (
        <section id="about" className="py-16 md:py-24 bg-card">
            <div className="container mx-auto max-w-7xl px-4 md:px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
                </div>
                <div className="grid gap-12 md:grid-cols-2">
                    <div className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                            I am the founder of CloudEngine Labs, a technology startup that provides DevOps cloud consulting for product startups. With 18+ years in software development, DevOps, and cloud, I help companies accelerate delivery and reliability using automation, IaC, and platform engineering.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            My background spans Wipro, Accenture, Capgemini, HCLTech, and InfraCloud. I'm also a technology blogger, AWS Community Builder, HashiCorp Ambassador, speaker, and mentor, passionate about sharing knowledge and building robust technology solutions.
                        </p>
                        <Card>
                            <CardHeader>
                                <CardTitle>Key Highlights</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {keyHighlights.map(skill => (
                                        <Badge key={skill} variant="secondary">{skill}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold">Career Timeline</h3>
                        {timeline.map((item, index) => (
                             <div key={index} className="flex gap-4">
                                 <div className="flex flex-col items-center">
                                     <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20">
                                         <Briefcase className="h-4 w-4 text-accent" />
                                     </div>
                                     {index < timeline.length - 1 && <div className="w-px flex-grow bg-border" />}
                                 </div>
                                 <div className="pb-8">
                                     <p className="font-semibold">{item.role} @ {item.company}</p>
                                     <p className="text-sm text-muted-foreground">{item.period}</p>
                                     <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                                 </div>
                             </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
