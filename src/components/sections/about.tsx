import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const keyHighlights = [
    "Cloud Automation", "Leadership", "Technical Writing", "CI/CD",
    "Infrastructure as Code (IaC)", "Team Management", "Platform Engineering", "DevOps"
];

const timeline = [
    {
        role: "Founder",
        company: "CloudEngine Labs®",
        period: "2023 – Present",
        description: "Leading a technology startup providing DevOps cloud consulting for product startups, focusing on accelerating delivery and reliability through automation and platform engineering."
    },
    {
        role: "Self-Employed Consultant & Writer",
        company: "Freelance",
        period: "2019 – Present",
        description: "Offering expertise in cloud technology, DevOps, infrastructure automation, and creating organic SEO-optimized technical content for product companies."
    },
    {
        role: "DevOps Architect & Engineer",
        company: "Various (Microsoft, InfraCloud, Wipro)",
        period: "2020 – 2023",
        description: "Architected and implemented DevOps strategies, specializing in IaC, CI/CD, and multi-cloud environments for large-scale enterprises."
    },
    {
        role: "Previous Roles",
        company: "Accenture, HCL, Capgemini, Wipro",
        period: "2005 – 2019",
        description: "Progressed through various technical roles, from C++ developer to cloud automation architect, building a strong foundation in enterprise software development and infrastructure management."
    }
];

const AboutSection = () => {
    return (
        <section id="about" className="py-16 md:py-24 bg-card">
            <div className="container mx-auto max-w-7xl px-4 md:px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">About Me</h2>
                </div>
                <div className="grid gap-12 md:grid-cols-2">
                    <div className="space-y-6">
                        <p className="text-muted-foreground leading-relaxed">
                            I am the founder of CloudEngine Labs, a technology startup & private limited company that provides DevOps Cloud consulting services to Software development startup companies. With over 18 years of experience in various phases of IT software development that includes design, code development and DevOps & Cloud design and implementation. I help product startups accelerate the delivery of their products and features and more reliably, using cloud automation, infrastructure as code, and platform engineering.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                           My success story includes reducing the overall product release automation time from 2 days to 2 hours for a retail product development startup company. Before founding CloudEngine Labs, I worked with various companies, including Wipro, Accenture, Capgemini, HCL Technologies, and Infracloud Technologies, on projects ranging from small startups to large enterprise clients. I am also a technology blogger, speaker, career mentor, AWS Community Builder, and Hashicorp Ambassador. My passion is to share my knowledge and expertise in DevOps cloud technologies and help others succeed in their careers.
                        </p>
                        <Card className="bg-background">
                            <CardHeader>
                                <CardTitle className="text-foreground">Top Skills</CardTitle>
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
                        <h3 className="text-2xl font-bold text-foreground">Career Journey</h3>
                        {timeline.map((item, index) => (
                             <div key={index} className="flex gap-4">
                                 <div className="flex flex-col items-center">
                                     <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20">
                                         <Briefcase className="h-4 w-4 text-accent" />
                                     </div>
                                     {index < timeline.length - 1 && <div className="w-px flex-grow bg-border" />}
                                 </div>
                                 <div className="pb-8">
                                     <p className="font-semibold text-foreground">{item.role} @ {item.company}</p>
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
