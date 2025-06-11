import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "B++ {IaC}  ",
  author: "Bruna Gonçalves | Dev ",
  description:
    "Developer Experience, Platform Governance, Opensource, Backstage",
  lang: "en",
  siteLogo: "/b2plus-small.png",
  navLinks: [
    { text: "About", href: "#about" },
    // { text: "Projects", href: "#projects" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/company/b2plusiac/" },
    { text: "Github", href: "https://github.com/wwwbrunagon" },
    // { text: "Twitter", href: "" },
    // { text: "Youtube", href: "" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://b2plusiac.tech/",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "B++ {IaC} ",
    specialty: "Platform Governance",
    summary:
      "Designs open-source internal developer portals powered by Spotify's Backstage™, merging platform engineering, governance, and green-cloud optimization, enabling product teams to innovate effortlessly.",
    email: "contact@b2plusiac.tech",
  },
  about: {
    description: `
        B++ {IaC} is a boutique platform-engineering studio committed to the power of open-source technologies and green-cloud solutions. Leveraging Spotify’s Backstage™, the team turns sprawling toolchains into a single internal developer portal (IDP) that accelerates delivery while reducing environmental impact.

        <br><br>

        <h3 class="mt-2 text-xl font-semibold text-human--touch">Mission</h3>
        <p class="mt-3">
          To help engineering organisations ship boldly and govern wisely by unifying service catalogues, CI/CD golden paths, and observability dashboards under one Backstage roof—always with open-source best practices and eco-efficient cloud workloads at the core.
        </p>

        <h3 class="mt-9 text-xl font-semibold text-human--touch">Why enterprises choose B++ {IaC}</h3>       
        <ul class="ml-2 mt-3 list-disc list-inside">
          <li class="mt-4">Open-source DNA – Custom Backstage plugins, Kubernetes operators, and IaC modules released to the community.</li>
          <li class="mt-4">Green-cloud mindset – Rightsizing workloads, visualising CO₂ impact, and optimising for sustainable compute.</li>
          <li class="mt-4">Proven platform-engineering expertise – 8+ years designing cloud-native architectures for fintech, e-commerce, and SaaS scale-ups.</li>
          <li class="mt-4">Governance built-in – Automated policy gates, dependency insights, and compliance checks woven directly into pipelines.</li>
          <li class="mt-4">Fast, measurable results – Clients typically slash onboarding time by 85% and double release cadence within the first quarter.</li>
        </ul>

        <h3 class="mt-9 text-xl font-semibold text-human--touch">How B++ {IaC} works</h3>
        
        <ol class="ml-1 mt-3 list-decimal list-inside">
          <li class="mt-2"><strong>Discover: </strong>Assess current toolchains, DevOps workflows, and cloud carbon footprint.</li>
          <li class="mt-2"><strong>Design: </strong>Map a Backstage architecture, golden paths, and sustainability strategy tailored to the organisation.</li>
          <li class="mt-2"><strong>Deliver: </strong>Implement, migrate services, and train teams—while tracking ROI and green-cloud metrics.</li>
          <li class="mt-2"><strong>Evolve: </strong>Continuous optimisation sprints keep the portal, policies, and plugins ahead of growth and climate goals.</li>
        </ol>

        <p class="mt-8 font-medium">
          Ready to transform developer experience sustainably?
        </p>
        <a href="https://brunagon.vercel.app/book-meeting"
           target="_blank" rel="noopener noreferrer"
           class="inline-block ml-0 mt-4 border border-current text-seed--oflife text-xl font-semibold py-1 px-3 rounded hover:opacity-60">Book a discovery call →</a>

      `,
    image: "",
  },
  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "",
      image: "/clone-ig.png",
    },
  ],
};
