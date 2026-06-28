export const personalInfo = {
  name: "Aung Htet Lwin",
  role: "DevOps & Cloud Engineer",
  tagline: "Infrastructure automation · Kubernetes · Cloud-native systems",
  email: "aunghtetlwin.atl@gmail.com",
  phone: "+66828386852",
  location: "Bangkok, Thailand",
  linkedin: "https://www.linkedin.com/in/aung-htet-lwin-671172236/",
  gitlab: "https://gitlab.com/aunghtetlwin.atl",
  github: "https://github.com/aunghtetlwin-gh",
  bio: [
    "DevOps & Cloud Engineer and CNCF Kubestronaut with 4+ years of combined IT experience across software development, cloud support, and hands-on cloud-native infrastructure work. Experienced in designing and automating scalable, secure, and reliable AWS infrastructure using Kubernetes, Terraform, Docker, CI/CD, and GitOps practices.",
    "Hands-on experience with Amazon EKS, Terraform modules, GitHub Actions, GitLab CI/CD, Argo CD, Kustomize, ALB Ingress, Route 53, ACM, HashiCorp Vault, AWS KMS, Kubernetes RBAC, Istio, Prometheus, Grafana, CloudWatch, Bash, and Python. Passionate about building reliable cloud infrastructure for modern distributed systems.",
  ],
  highlights: [
    "CNCF Kubestronaut",
    "AIT Master's",
    "4+ years IT experience",
    "English & Japanese (N3)",
  ],
};

export type SkillGroup = {
  group: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    group: "Cloud",
    items: ["AWS", "Azure"],
  },
  {
    group: "Container & Orchestration",
    items: ["Kubernetes", "Docker", "Amazon EKS", "Kubernetes RBAC", "Helm", "ALB Ingress", "Istio"],
  },
  {
    group: "Infrastructure as Code",
    items: ["Terraform", "Terraform Modules", "AWS CloudFormation", "HCP Packer"],
  },
  {
    group: "CI/CD",
    items: ["GitLab CI/CD", "GitHub Actions", "Argo CD", "Kustomize"],
  },
  {
    group: "Observability & Security",
    items: ["CloudWatch", "Prometheus", "Grafana", "HashiCorp Vault", "AWS KMS"],
  },
  {
    group: "Languages & OS",
    items: ["Python", "Bash", "Java", "Linux"],
  },
];

export type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  isSelfDirected?: boolean;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    title: "DevOps & Cloud Engineer",
    company: "HelloCloud.io",
    location: "Singapore",
    period: "Dec 2023 – Present",
    current: true,
    bullets: [
      "Designed and provisioned AWS infrastructure using Terraform, including VPC, subnets, IAM, EC2, ECS, load balancers, CloudWatch, SSM, and S3 to support repeatable cloud environments.",
      "Built and managed Amazon EKS environments for containerized microservices using Kubernetes Deployments, Services, Helm, HPA, ALB Ingress, and Kubernetes RBAC.",
      "Implemented reusable Infrastructure as Code using Terraform modules, workspaces, and remote state management to improve consistency and automation of infrastructure provisioning.",
      "Implemented CI/CD and GitOps workflows using GitLab CI/CD, GitHub Actions, Argo CD, and Kustomize to improve deployment automation and environment consistency.",
      "Improved secure operations using HashiCorp Vault, IAM policies, AWS KMS, Kubernetes RBAC, and Istio service mesh with sidecar proxies for traffic management and service observability.",
      "Implemented monitoring and observability using CloudWatch, Prometheus, and Grafana to enhance system visibility and support incident response workflows.",
      "Automated operational tasks using Bash and Python for Linux administration, bastion host setup, secure networking support, and repeatable infrastructure operations.",
    ],
  },
  {
    title: "Cloud Support Engineer",
    company: "KBTC Group of Companies",
    location: "Yangon",
    period: "Feb 2022 – Nov 2022",
    current: false,
    bullets: [
      "Provisioned and configured Microsoft Azure cloud accounts including user setup, access management, and permission configuration.",
      "Administered Azure Active Directory to manage identity and access control across organizational resources.",
      "Managed Microsoft SharePoint administration and configuration, providing technical support to users.",
      "Delivered Azure cloud fundamentals training and created technical documentation to support knowledge transfer and AZ-900 preparation.",
    ],
  },
  {
    title: "Software Developer",
    company: "GIC Myanmar",
    location: "Yangon",
    period: "Jan 2021 – Feb 2022",
    current: false,
    bullets: [
      "Participated in software development projects as a junior developer, applying SDLC best practices to improve code quality and maintainability.",
      "Developed backend components using Java and PostgreSQL in collaborative environments with code reviews and version control.",
      "Collaborated with cross-functional team members to troubleshoot technical issues and document solutions for knowledge sharing.",
      "Gained exposure to modern web frameworks including Ruby on Rails and Angular through internal training and project work.",
    ],
  },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  tech: string[];
  gitlab: string;
  sourceLabel?: string;
  gradient: string;
  accentColor: string;
};

export const projects: Project[] = [
  {
    title: "Solar System CI/CD on AWS EKS",
    category: "Kubernetes GitOps Platform",
    description:
      "Built an end-to-end DevOps platform for a Node.js and MongoDB Solar System app on Amazon EKS. Provisioned AWS infrastructure with Terraform modules, including VPC, EKS, IAM/OIDC, Route 53, and ACM. Implemented GitHub Actions CI/CD to test, build, smoke-test, and push Docker images to Docker Hub. Used Argo CD for GitOps with automatic dev deployment and manual production promotion. Exposed the app through ALB Ingress with Cloudflare DNS delegation and added observability using Prometheus and Grafana.",
    tech: ["AWS EKS", "Terraform", "Kubernetes", "Docker", "GitHub Actions", "Argo CD", "Route 53", "ACM", "Prometheus", "Grafana"],
    gitlab: "https://github.com/aunghtetlwin-gh/Solar-system-cicd-eks",
    sourceLabel: "GitHub",
    gradient: "from-emerald-950/60 to-teal-950/40",
    accentColor: "text-emerald-400",
  },
  {
    title: "HCP Packer AMI Distribution & Cross-Account S3 Logging",
    category: "Infrastructure Automation",
    description:
      "Solved the challenge of maintaining consistent, auditable machine images across multiple AWS regions by automating AMI builds and distribution with HCP Packer Registry across production and staging channels (Tokyo, Seoul). Designed hub-and-spoke architecture with HCP HVN, VPC peering, S3, KMS, CloudWatch, and SSM for secure cross-account logging.",
    tech: ["HCP Packer", "AWS", "S3", "KMS", "CloudWatch", "SSM", "Terraform"],
    gitlab: "https://gitlab.com/aunghtetlwin.atl/hcp-packer-ami-multi-build",
    gradient: "from-orange-950/60 to-amber-950/40",
    accentColor: "text-orange-400",
  },
  {
    title: "Multi-Domain API Gateway Architecture on Kubernetes",
    category: "Service Mesh & API Gateway",
    description:
      "Evaluated centralized vs. distributed API gateway architectures to determine the most scalable traffic routing model for a multi-domain microservices environment. Implemented and compared both patterns using Consul API Gateway and Kong Gateway on Kubernetes across three isolated business domains.",
    tech: ["Kubernetes", "Kong Gateway", "Consul", "Terraform", "Helm"],
    gitlab: "https://gitlab.com/aunghtetlwin.atl/kong-distributed-api-gateway",
    gradient: "from-blue-950/60 to-indigo-950/40",
    accentColor: "text-blue-400",
  },
  {
    title: "EKS Cluster with Bookinfo Microservice Deployment",
    category: "Kubernetes Infrastructure",
    description:
      "Provisioned a production-grade Amazon EKS cluster from scratch using Terraform, covering custom VPC design, managed node groups, IAM roles, and automated kubeconfig. Applied Kubernetes RBAC for least-privilege access control and validated the environment with a full Bookinfo microservices deployment exposed via external LoadBalancer.",
    tech: ["Amazon EKS", "Terraform", "Kubernetes", "RBAC", "Helm", "IAM"],
    gitlab: "https://gitlab.com/aunghtetlwin.atl/eks-cluster-with-terraform",
    gradient: "from-purple-950/60 to-violet-950/40",
    accentColor: "text-purple-400",
  },
];

export type Certification = {
  name: string;
  shortName: string;
  issuer: string;
  date: string;
  featured?: boolean;
  color: string;
  logo?: string;
};

export const certifications: Certification[] = [
  {
    name: "CNCF Kubestronaut",
    shortName: "K8s★",
    issuer: "Linux Foundation",
    date: "Feb 2026",
    featured: true,
    color: "blue",
    logo: "/logos/kubestronaut.png",
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    shortName: "CKA",
    issuer: "Linux Foundation",
    date: "Sept 2025",
    color: "blue",
    logo: "/logos/CKA.png",
  },
  {
    name: "Certified Kubernetes Application Developer (CKAD)",
    shortName: "CKAD",
    issuer: "Linux Foundation",
    date: "Feb 2026",
    color: "blue",
    logo: "/logos/CKAD.png",
  },
  {
    name: "Certified Kubernetes and Cloud Native Associate (KCNA)",
    shortName: "KCNA",
    issuer: "Linux Foundation",
    date: "Feb 2026",
    color: "blue",
    logo: "/logos/KCNA.png",
  },
  {
    name: "Certified Kubernetes Security Specialist (CKS)",
    shortName: "CKS",
    issuer: "Linux Foundation",
    date: "Jan 2026",
    color: "blue",
    logo: "/logos/CKS.png",
  },
  {
    name: "Certified Kubernetes Security Associate (KCSA)",
    shortName: "KCSA",
    issuer: "Linux Foundation",
    date: "Jan 2026",
    color: "blue",
    logo: "/logos/KCSA.png",
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    shortName: "AWS SAA",
    issuer: "Amazon Web Services",
    date: "Dec 2024",
    color: "orange",
    logo: "/logos/AWSSAA.png",
  },
  {
    name: "HashiCorp Certified: Terraform Associate",
    shortName: "TF Assoc",
    issuer: "HashiCorp",
    date: "Dec 2025",
    color: "purple",
    logo: "/logos/terraform.jpeg",
  },
  {
    name: "Microsoft Azure Fundamentals (AZ-900)",
    shortName: "AZ-900",
    issuer: "Microsoft",
    date: "Apr 2022",
    color: "sky",
    logo: "/logos/azure.png",
  },
  {
    name: "Japanese Language Proficiency Test (JLPT N3)",
    shortName: "JLPT N3",
    issuer: "Japan Educational Exchanges and Services",
    date: "Jan 2022",
    color: "red",
    logo: "/logos/jlptn3.png",
  },
  {
    name: "IT Passport (IP) Exam — ITPEC",
    shortName: "IP",
    issuer: "ITPEC, Japan",
    date: "Jan 2019",
    color: "gray",
  },
  {
    name: "Fundamental Engineering (FE) Exam — ITPEC",
    shortName: "FE",
    issuer: "ITPEC, Japan",
    date: "Jan 2019",
    color: "gray",
  },
];

export type RoadmapMilestone = {
  year: string;
  title: string;
  subtitle: string;
  status: "done" | "current" | "future";
  highlight?: boolean;
};

export const roadmap: RoadmapMilestone[] = [
  {
    year: "2021",
    title: "B.C.Sc Graduate",
    subtitle: "University of Information Technology — High Performance Computing",
    status: "done",
  },
  {
    year: "Jan 2021 – Feb 2022",
    title: "Software Developer",
    subtitle: "GIC Myanmar, Yangon — Java · PostgreSQL · Ruby on Rails",
    status: "done",
  },
  {
    year: "Feb 2022 – Nov 2022",
    title: "Cloud Support Engineer",
    subtitle: "KBTC Group of Companies — Azure administration & team training",
    status: "done",
  },
  {
    year: "Dec 2023",
    title: "DevOps & Cloud Engineer",
    subtitle: "HelloCloud.io, Singapore — AWS · Kubernetes · Terraform · CI/CD",
    status: "done",
  },
  {
    year: "Dec 2024",
    title: "AWS Solutions Architect – Associate",
    subtitle: "Certified by Amazon Web Services",
    status: "done",
  },
  {
    year: "Jan 2025",
    title: "AIT Master's Program",
    subtitle: "Master of Computer Science — Asian Institute of Technology, Bangkok",
    status: "current",
  },
  {
    year: "Feb 2026",
    title: "CNCF Kubestronaut",
    subtitle: "All 5 Kubernetes certifications — fewer than 1,000 holders globally",
    status: "current",
    highlight: true,
  },
  {
    year: "2026",
    title: "DevOps / Cloud / Platform Engineer",
    subtitle: "Target: full-time DevOps, Cloud, SRE, or Platform Engineering role",
    status: "future",
  },
  {
    year: "2027+",
    title: "Cloud Architect",
    subtitle: "Multi-cloud architecture design and infrastructure leadership",
    status: "future",
  },
];

export type Education = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  current: boolean;
};

export const education: Education[] = [
  {
    degree: "Master of Computer Science",
    institution: "Asian Institute of Technology (AIT)",
    location: "Thailand",
    period: "Jan 2025 – Present",
    current: true,
  },
  {
    degree: "B.C.Sc (High Performance Computing)",
    institution: "University of Information Technology (UIT)",
    location: "Yangon, Myanmar",
    period: "Dec 2016 – Feb 2021",
    current: false,
  },
];
