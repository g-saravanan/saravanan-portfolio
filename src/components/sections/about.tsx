import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skills = [
  "AWS", "GCP", "Azure",
  "Kubernetes", "Docker", "Helm",
  "Terraform", "Ansible", "Pulumi",
  "Jenkins", "GitLab CI", "ArgoCD",
  "Python", "Go", "Bash",
  "AI/ML Ops", "Kubeflow", "MLflow"
];

const certifications = [
  "Certified Kubernetes Administrator (CKA)",
  "AWS Certified DevOps Engineer – Professional",
  "Google Cloud Certified Professional Cloud Architect"
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">About Me</h2>
            <p className="text-muted-foreground">
              I am a results-driven DevOps and Cloud engineer with over a decade of experience in automating and optimizing mission-critical deployments for scalability and high availability.
            </p>
            <p className="text-muted-foreground">
              My mission is to empower development teams by building robust Internal Developer Platforms (IDPs) and integrating intelligent AI/ML solutions to streamline the entire software development lifecycle. I thrive on solving complex problems and creating systems that are not only powerful but also elegant and easy to maintain.
            </p>
          </div>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Key Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {certifications.map(cert => (
                    <li key={cert} className="flex items-center gap-2 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-accent"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
