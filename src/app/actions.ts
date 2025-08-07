'use server';

import { enhanceBlogPostsWithImages } from '@/ai/flows/enhance-blog-images';
import { generateTailoredResume } from '@/ai/flows/generate-resume';
import { z } from 'zod';

const enhanceImageSchema = z.object({
  title: z.string(),
  content: z.string(),
});

export async function enhanceImageAction(input: { title: string; content: string }) {
  const validatedInput = enhanceImageSchema.safeParse(input);
  if (!validatedInput.success) {
    return { error: 'Invalid input' };
  }

  try {
    const result = await enhanceBlogPostsWithImages({
      blogPostTitle: validatedInput.data.title,
      blogPostContent: validatedInput.data.content,
    });
    return { imageUrl: result.imageUrl };
  } catch (e) {
    return { error: 'Failed to generate image.' };
  }
}

const generateResumeSchema = z.object({
  interests: z.string(),
});

const originalResume = `
G. SARAVANAN
DevOps & Cloud Expert | AI Enthusiast

CONTACT
- Email: saravanan@example.com
- LinkedIn: linkedin.com/in/gsaravanan
- GitHub: github.com/gsaravanan
- Portfolio: gsaravanan.dev

SUMMARY
A results-driven DevOps and Cloud engineer with over a decade of experience in automating and optimizing mission-critical deployments for scalability and high availability. Passionate about building Internal Developer Platforms (IDPs) and leveraging AI/ML to streamline development lifecycles.

EXPERIENCE

Lead DevOps Engineer | Tech-Solutions Inc. | 2018 - Present
- Architected and implemented a scalable CI/CD pipeline using Kubernetes, Jenkins, and ArgoCD, reducing deployment times by 70%.
- Led the migration of monolithic applications to a microservices architecture on AWS, improving system resilience and developer velocity.
- Developed an Internal Developer Platform (IDP) that standardized development environments and automated infrastructure provisioning, increasing developer productivity by 40%.

Senior Cloud Engineer | Cloudify Corp. | 2014 - 2018
- Managed large-scale cloud infrastructure on GCP and Azure, focusing on cost optimization and security hardening.
- Automated infrastructure as code (IaC) using Terraform and Ansible, ensuring consistent and repeatable environments.
- Implemented robust monitoring and alerting systems using Prometheus and Grafana.

SKILLS
- Cloud Platforms: AWS, Google Cloud Platform (GCP), Microsoft Azure
- Containerization: Docker, Kubernetes, Helm
- CI/CD: Jenkins, GitLab CI, ArgoCD, CircleCI
- IaC: Terraform, Ansible, Pulumi
- Programming: Python, Go, Bash
- AI/ML Ops: Kubeflow, MLflow, Seldon Core

CERTIFICATIONS
- Certified Kubernetes Administrator (CKA)
- AWS Certified DevOps Engineer – Professional
- Google Cloud Certified Professional Cloud Architect
`;

export async function generateResumeAction(input: { interests: string }) {
  const validatedInput = generateResumeSchema.safeParse(input);
  if (!validatedInput.success) {
    return { error: 'Invalid input' };
  }

  try {
    const result = await generateTailoredResume({
      interests: validatedInput.data.interests,
      originalResume,
    });
    return { tailoredResume: result.tailoredResume };
  } catch (e) {
    return { error: 'Failed to generate resume.' };
  }
}
