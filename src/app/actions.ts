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
SARAVANAN GNANAGURU
Founder, CloudEngine Labs | DevOps, Cloud & SRE Practitioner

CONTACT
- Email: saravanan@cloudenginelabs.io
- LinkedIn: linkedin.com/in/saravanan-gnanaguru
- GitHub: github.com/chefgs
- Portfolio: yourdomain.com

SUMMARY
A visionary founder and technology leader with 18+ years of experience driving innovation in software development, DevOps, and cloud infrastructure. Expert in building high-performing teams and scalable systems. Passionate about platform engineering, AI-driven productivity, and empowering the next generation of engineers through mentorship and community building.

ENTREPRENEURIAL EXPERIENCE

Founder | CloudEngine Labs® | 2023 - Present
- Launched a technology startup providing specialized DevOps and cloud consulting for product-focused startups.
- Developed and executed go-to-market strategies, secured initial clients, and established a brand recognized for technical excellence.
- Architected "AccelSDLC," a proprietary framework for accelerating software delivery and enhancing system reliability.

PROFESSIONAL EXPERIENCE

Freelance DevOps Architect & Consultant | 2019 - Present
- Provided expert consulting for clients like Microsoft Fabric, focusing on DevOps architecture and implementation.
- Authored SEO-optimized technical content for major cloud vendors, significantly boosting organic traffic and developer engagement.

Principal Engineer & Architect | InfraCloud | 2021 - 2023
- Led critical DevOps initiatives using Terraform, Ansible, and Kubernetes in multi-cloud environments (AWS, Azure, GCP).
- Designed and built a scalable Internal Developer Platform (IDP) for a major fintech client, increasing developer productivity by 40%.

DevOps Architect | Wipro Digital | 2020 - 2021
- Acted as a DevOps evangelist, contributing to the Centre of Excellence and driving the adoption of Infrastructure as Code (IaC) best practices.

Early Career | Accenture, HCL, Capgemini | 2005 - 2019
- Progressed through various technical roles, from C++ developer to cloud automation architect, building a strong foundation in enterprise software development and infrastructure management.

SKILLS
- Cloud Platforms: AWS, Azure, GCP
- DevOps & CI/CD: Terraform, Kubernetes, Docker, Ansible, Jenkins, GitHub Actions
- Platform Engineering: Backstage, Internal Developer Platforms (IDPs)
- Programming: Go, Python, Shell Scripting
- Leadership: Team Building, Mentorship, Technology Evangelism, Public Speaking
- Content: Technical Writing, SEO, Content Strategy

COMMUNITY & RECOGNITION
- AWS Community Builder
- HashiCorp Ambassador
- Regular Speaker at tech conferences and meetups
- Prolific technical blogger on Dev.to and LinkedIn
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
