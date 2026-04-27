import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Download } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { ImagePlaceholder } from "@/components/image-placeholder"

const projectsData: Record<string, any> = {
  "ra-labs": {
    title: "Ra Labs AI Data-Cleaning Platform",
    description: "Confidential Internship Project",
    client: "Ra Labs (Confidential)",
    duration: "Summer 2025",
    role: "UI/UX Design Intern",
    team: "15-person cross-functional startup team",
    tools: "Figma, Google Workspace, Slack",
    tags: ["UI Design", "Prototyping", "Figma", "Cross-functional Collaboration"],
    heroImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ra%20Labs%20logo%20design%20with%20robot%20and%20elephant-WIsEjgK16vtg5cMXipCFioJX2MMqDS.png",
    heroImageBg: "bg-white",
    overview:
      "During my internship at Ra Labs, I designed an AI data-cleaning platform prototype from scratch to high fidelity. Working with a 15-person cross-functional startup team, I created 20+ screens, iterated through regular feedback, and helped improve the design workflow by reducing revision rounds by about 30%. Because this work is covered by confidentiality and intellectual property restrictions, this case study focuses on my role, process, and outcomes rather than full internal product details.",
    myRole:
      "I designed the prototype from scratch to high fidelity in Figma. My work included building the interface structure, creating wireframes, and developing polished screens for the product experience. I also presented design updates in regular meetings, gathered feedback from teammates, and revised the work over time. This gave me hands-on experience working across design, product, and engineering in a real startup setting.",
    challenge:
      "This product was built for technical users, so the interface needed to support complex tasks without feeling overwhelming. Because I was designing the prototype from the ground up, I had to think carefully about layout, navigation, and information hierarchy from the start. I also had to keep improving the design in a fast-moving environment where feedback and revision were a regular part of the process.",
    process: [
      {
        title: "Understanding the Product",
        description:
          "I joined a remote team that relied on regular check-ins and product meetings to stay aligned. These meetings helped me understand the product direction, the team's priorities, and how design decisions were discussed across roles. Because the company was a small startup, I also had more ownership over my work and more visibility into the product process than I might have had in a larger organization.",
      },
      {
        title: "Designing from Scratch",
        description: "I started by shaping the overall interface structure and translating product needs into screen concepts. From there, I created wireframes and developed them into high-fidelity prototypes in Figma. Since the platform supported technical workflows, I focused on making the experience feel visually organized, clear, and manageable. This required thoughtful decisions about page layout, flow, and how users would move through the product.",
      },
      {
        title: "Iterating Through Feedback",
        description:
          "Feedback played a major role in the design process. I regularly shared updates, received critique, and used that input to improve both the interface and the workflow. Over time, I became more confident explaining my design decisions and treating feedback as an important part of the process rather than as criticism. This helped me grow as both a designer and a collaborator.",
      },
      {
        title: "Communicating with the Team",
        description: "This internship also taught me the importance of communication and prioritization. In one situation, an unexpected personal emergency affected my schedule before an important meeting. I communicated early with my supervisor, explained what was finished, what I could prioritize, and what might be delayed. That experience reinforced how important clear communication and realistic planning are in collaborative product work.",
      },
    ],
    keyContributions: [
      "Designed the product prototype from scratch to high fidelity",
      "Created more than 20 screens for the end-to-end experience",
      "Collaborated with a 15-person cross-functional startup team",
      "Helped reduce revision rounds by about 30%",
      "Produced designs that later supported engineering discussions as development moved forward",
    ],
    impact:
      "This project gave me real experience designing within a product team and strengthened both my design process and my professional confidence. My work helped support a faster design workflow, and the designs I completed were later used in engineering discussions as development continued. Even though I did not see the final implementation before the internship ended, knowing that my work contributed to the real product was very meaningful.",
    whatILearned:
      "This internship taught me that strong UX work is not only about polished screens. It is also about communication, collaboration, and being open to feedback. At the start of the internship, I was more hesitant to speak up in meetings. Over time, I became more confident in sharing ideas, explaining my decisions, and contributing more actively to team discussions. I also learned how to balance speed and quality in a startup environment instead of trying to perfect everything too early.",
    reflection:
      "This experience confirmed my interest in becoming a UX designer. It gave me a clearer understanding of what it means to contribute to a real product team and showed me how much I value ownership, iteration, and cross-functional collaboration. Most importantly, it helped me grow from a student learning design in class into a designer contributing to a real product in practice.",
  },
  "umsi-case-study": {
    title: "Turning a Fragmented Ecosystem into a Connected System",
    description: "Designing a centralized platform to support entrepreneurship in Michigan",
    client: "UMSI Case Study Competition",
    duration: "10 days",
    role: "Team Lead",
    team: "Student team",
    tools: "Research, IA Design, Wireframing",
    tags: ["Information Architecture", "User Research", "Wireframing", "System Design"],
    heroImage: "/Case Study Competition cover.png",
    heroImageBg: "",
    overview:
      "In a 10-day case study competition at the University of Michigan School of Information, my team developed a product concept to address a real-world challenge: why Michigan struggles to retain entrepreneurial talent.\n\nOur solution—a centralized mobile app for entrepreneurs—earned 3rd place and an honorable mention among competing teams.\n\nBut the real value of this project was not just the final product. It was how we translated a complex, invisible system problem into a clear, structured solution.",
    myRoleList: [
      "Team Lead — guided direction, facilitated decision-making, and kept the team aligned under tight timelines",
      "Designed the information architecture (IA) and low-fidelity wireframes",
      "Co-defined user flows and overall product structure",
      "Helped translate research insights into a cohesive system-level solution",
    ],
    challenge:
      "Michigan faces ongoing talent loss, especially among entrepreneurs and young professionals. Many leave for states with stronger startup ecosystems, better resources, and more opportunities.\n\nAt first glance, this looks like a resource problem.\n\nBut through research, we discovered something deeper.",
    invisibleProblem:
      "Michigan does not lack resources.\n\nIt lacks connection.\n\nEntrepreneurs face:",
    invisibleProblemList: [
      "Fragmented information across different platforms",
      "Low awareness of available funding, mentorship, and support",
      "Disconnected networks between universities, investors, and organizations",
    ],
    invisibleProblemConclusion: "The ecosystem exists—but it is difficult to navigate and access.",
    researchInsights:
      "We used a mix of qualitative and quantitative methods:",
    researchInsightsList: [
      "Survey (25 responses) to understand what influences people to stay or leave Michigan",
      "Expert interview with Lou Glazer (President of Michigan Future, Inc.)",
      "Secondary research on entrepreneurial ecosystems and policy",
    ],
    researchKeyInsight: "Key Insight\n\nAccess is not the problem — navigation and connection are.\n\nEntrepreneurs are not failing because resources don't exist. They struggle because those resources are scattered, hidden, and uncoordinated.",
    designPrinciple:
      "Turn a fragmented ecosystem into a connected system\n\nInstead of adding more resources, we focused on:",
    designPrincipleList: [
      "Making existing resources visible",
      "Connecting key stakeholders",
      "Reducing friction in discovery and access",
    ],
    systemReframe:
      "We reframed the problem as a system:",
    systemReframeActors: "Key actors:",
    systemReframeActorsList: [
      "Entrepreneurs",
      "Investors",
      "Universities",
      "Government agencies",
    ],
    systemReframeProblem: "Problem:\nThese actors operate in isolated silos",
    systemReframeOpportunity: "Opportunity:\nDesign a central system that connects them in one place",
    solutionTitle: "A Centralized Mobile App for Entrepreneurs",
    solutionIntro: "We designed a product that acts as a digital hub for the entire ecosystem.\n\nInstead of standalone features, each part of the app solves a system-level gap:",
    solutionFeatures: [
      "Funding Opportunities → Makes financial resources visible and accessible",
      "Skill-Building Courses → Supports long-term entrepreneurial growth",
      "Professional Networks → Connects users to mentors, investors, and peers",
      "Local Resource Mapping → Helps users discover nearby incubators and services",
      "Event Calendar → Encourages participation in the ecosystem",
    ],
    solutionConclusion: "These features work together to reduce fragmentation and increase accessibility.",
    wireframeImage: "/Case Study wireframes.png",
    process: [
      {
        title: "Structuring Complexity into Clarity",
        intro: "My main contribution was transforming a complex system into a clear, usable structure:",
        list: [
          "Designed the information architecture to organize multiple resource types",
          "Created low-fidelity wireframes to define layout and hierarchy",
          "Helped shape user flows that guide users from discovery → action",
        ],
        conclusion: "This ensured the product was not just comprehensive, but also easy to understand and navigate.",
      },
      {
        title: "Constraints & Decision-Making",
        intro: "This project was completed under extreme time pressure:",
        list: [
          "10 days total",
          "Only 4–5 days to refine the solution for the final round",
        ],
        middle: "We also faced conflicting early ideas about the direction of the project.\n\nTo move forward, I introduced a simple but effective strategy:",
        strategyList: [
          "Set a clear decision deadline (Day 2)",
          "Use research and expert input to evaluate ideas",
          "Align the team around one direction",
        ],
        outcomeIntro: "This allowed us to:",
        outcomeList: [
          "Avoid endless debate",
          "Move quickly into execution",
          "Stay focused under pressure",
        ],
      },
    ],
    impactList: [
      "3rd place winner + $500 prize in the UMSI Case Study Competition",
      "Recognized for a feasible, scalable solution to a real-world problem",
      "Demonstrated the value of system-level thinking in product design",
    ],
    reflectionIntro: "This project changed how I think about design.\n\nI learned that:",
    reflectionList: [
      "The most important problems are often invisible at first",
      "Good design is not just about features — it's about systems and relationships",
      "Clear structure and alignment are critical when working under ambiguity and time pressure",
    ],
    reflectionConclusion: "Most importantly, I learned how to turn complexity into clarity—and that's the kind of problem I want to keep solving.",
  },
  "backyard-brains": {
    hook: "What changes when an interface doesn't just control a device — but another person's body?",
    title: "Designing for Trust: Human–Human Interface (HHI)",
    description: "What changes when an interface doesn't just control a device — but another person's body?",
    subtitle: "Designing a multi-user mobile experience where usability directly impacts safety.",
    client: "Backyard Brains",
    duration: "Jan 2026 – Apr 2026",
    role: "UX Researcher & Designer",
    team: "5 designers",
    tools: "Figma, Wizard-of-Oz Simulation, Usability Testing",
    tags: ["UX Research", "Interaction Design", "Prototyping", "Usability Testing"],
    heroImage: "/placeholder.svg?height=900&width=1900",
    heroImageBg: "",
    hasSystemDiagram: true,
    imagePlaceholders: {
      systemDiagram: "/Backyard 1.png",
      deviceSetup: "Device Setup Pain Points",
      mentalModel: "Mental Model UI",
      feedback: "Feedback UI",
      coordination: "Coordination UI",
      userFlow: "User Flow Diagram",
      keyScreens: ["Key Screen 1", "Key Screen 2", "Key Screen 3"],
    },
    context: "Capstone Project at University of Michigan School of Information (UMSI)",
    contextAndProblemIntro: "This project was part of a capstone collaboration with Backyard Brains, a company developing the Human–Human Interface (HHI), a neuroscience device that allows one user to stimulate another person's muscles through electrical signals.\n\nAt the start of the project, the client only had a physical device designed for in-person demonstrations.\n\nHowever, their goal was to:",
    contextAndProblemGoal: "Enable two users to connect remotely through a mobile app and complete the experiment together.",
    projectScopeIntro: "Our team focused on designing the core interaction system that makes this possible:",
    projectScopeList: [
      "Connecting the device to a mobile app",
      "Connecting two users remotely",
      "Supporting a complete end-to-end experiment flow",
    ],
    projectScopeIncludes: "This includes:",
    projectScopeIncludesList: [
      "pairing devices",
      "guiding setup",
      "coordinating actions between users",
      "ensuring safe interaction",
    ],
    whyDifferentTitle: "Why This Problem Is Different",
    whyDifferentIntro: "This is not just controlling a device — it is controlling another person's body.\n\nThe interaction combines:",
    whyDifferentList: [
      "physical systems (electrical stimulation)",
      "social interaction (two users coordinating)",
      "technical complexity (device + app + connection)",
    ],
    whyDifferentConclusion: "In this system, usability is not about efficiency — it is about trust and safety.",
    myRoleList: [
      "Conducted heuristic evaluation of the physical setup workflow",
      "Co-led usability testing (low- and high-fidelity)",
      "Built and tested Figma prototypes using Wizard-of-Oz simulation",
      "Contributed to interaction design and system structure",
    ],
    processOverviewTitle: "Process Overview",
    processOverview: [
      {
        period: "Jan – Feb",
        description: "Understand current device experience and identify usability breakdowns",
      },
      {
        period: "Feb – Mar",
        description: "Design low-fidelity flows for device connection and multi-user interaction",
      },
      {
        period: "Mar – Apr",
        description: "Refine high-fidelity prototype and validate through usability testing (7 participants)",
      },
    ],
    keyInsightsTitle: "Key Insights → Design Responses",
    keyInsights: [
      {
        number: "1",
        title: "Safety & Consent Are Foundational",
        finding: "Users perceived the interaction as acting on another person's body, leading to hesitation and repeated confirmation behaviors.",
        designResponse: [
          "Shared \"I'm Ready\" confirmation",
          "Consent checkpoints",
          "Emergency stop",
        ],
        outcome: "Users feel safe and in control",
        imageLabel: "Device Setup Pain Points",
      },
      {
        number: "2",
        title: "Users Lack a Clear Mental Model",
        finding: "Users were unsure whether they were connecting to a device or another user, and how the system worked.",
        designResponse: [
          "Session-based system",
          "Defined roles (Controller / Minion)",
          "Role-first flow",
        ],
        outcome: "Clear understanding of system structure and responsibilities",
        imageLabel: "Mental Model UI",
      },
      {
        number: "3",
        title: "System Feedback Is Insufficient",
        finding: "Users relied on guesswork to interpret system state.",
        designResponse: [
          "Real-time status indicators",
          "Step-by-step setup feedback",
        ],
        outcome: "Improved confidence and reduced errors",
        imageLabel: "Feedback UI",
      },
      {
        number: "4",
        title: "Remote Interaction Adds Coordination Complexity",
        finding: "Users relied heavily on verbal communication to coordinate actions.",
        designResponse: [
          "Shared visibility of partner status",
          "Synchronized readiness checkpoints",
          "Guided role switching",
        ],
        outcome: "Smoother coordination between users",
        imageLabel: "Coordination UI",
      },
    ],
    designDirectionTitle: "Design Direction",
    designDirectionIntro: "We reframed the problem from device interaction to a human-to-human coordination system.\n\nDesign principles:",
    designDirectionPrinciples: [
      "Clear Setup",
      "Shared Awareness",
      "Consistent Feedback",
    ],
    solutionOverviewTitle: "Solution Overview",
    solutionOverviewIntro: "We designed a session-based mobile system that enables:",
    solutionOverviewFeatures: [
      "device-to-app connection",
      "user-to-user connection",
      "coordinated experiment flow",
    ],
    solutionOverviewFlow: "The system guides users step by step from:\n\nconnection\n → setup\n → readiness\n → experiment",
    keyInteractionDecisionsTitle: "Key Interaction Design Decisions",
    keyInteractionDecisions: [
      {
        decision: "Role-First Onboarding",
        rationale: "clarifies responsibilities early",
      },
      {
        decision: "Guided Setup Flow",
        rationale: "reduces confusion in device setup",
      },
      {
        decision: "Shared Readiness System",
        rationale: "ensures safe and synchronized interaction",
      },
    ],
    evaluationTitle: "Evaluation & Iteration",
    evaluationIntro: "Tested with 7 new users\n\nEvaluated:",
    evaluationCriteria: [
      "task success",
      "confusion",
      "user confidence",
    ],
    evaluationResultsTitle: "Results",
    evaluationResults: [
      "clearer workflows",
      "improved coordination",
      "increased trust",
    ],
    impactTitle: "Impact & Broader Contribution",
    impactEducationTitle: "Education",
    impactEducationIntro: "Transforms the HHI device into a guided, teachable system:",
    impactEducationList: [
      "reduces setup friction",
      "improves learning experience",
      "supports classroom and remote use",
    ],
    impactFutureTitle: "Future Potential (Health & Assistive Tech)",
    impactFutureDescription: "This work suggests potential for assistive interaction systems, such as supporting mobility-related use cases through safe, coordinated stimulation.",
    reflectionIntro: "This project taught me that:",
    reflectionList: [
      "Designing for safety requires more than usability",
      "Clear mental models are critical in complex systems",
      "UX design often involves designing relationships between people",
    ],
    reflectionConclusion: "The most important UX problems are not about interfaces — they are about trust between people.",
  },
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const projectData = projectsData[params.slug] || projectsData["ra-labs"]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold gradient-text">
            Lingfei Zhan
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground">
              Home
            </Link>
            <Link href="/#work" className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground">
              Projects
            </Link>
            <Link href="/#experience" className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground">
              Experience
            </Link>
            <Link href="/#contact" className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground">
              Contact
            </Link>
            <Button asChild size="sm">
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-12 md:py-24">
          <Button variant="ghost" size="sm" className="mb-8" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          {projectData.hook ? (
            <>
              {/* Hero section with hook */}
              <div className="mx-auto max-w-3xl">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{projectData.title}</h1>
                <p className="mt-4 text-lg text-muted-foreground italic">
                  {projectData.hook}
                </p>
                <p className="mt-4 text-muted-foreground">{projectData.subtitle}</p>

                <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
                  <div className="flex gap-2">
                    <span className="font-medium">Role:</span>
                    <span className="text-muted-foreground">{projectData.role}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-medium">Timeline:</span>
                    <span className="text-muted-foreground">{projectData.duration}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-medium">Team:</span>
                    <span className="text-muted-foreground">{projectData.team}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-medium">Client:</span>
                    <span className="text-muted-foreground">{projectData.client}</span>
                  </div>
                </div>

                {projectData.hasSystemDiagram && (
                  <div className="mt-12 flex items-center justify-center">
                    <div className="max-w-2xl w-full overflow-hidden rounded-lg">
                      <Image
                        src={projectData.imagePlaceholders?.systemDiagram || "/placeholder.svg"}
                        alt="System Diagram"
                        width={800}
                        height={450}
                        className="object-cover w-full"
                      />
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <div className={`relative aspect-[21/9] w-full overflow-hidden rounded-lg ${projectData.heroImageBg}`}>
                <Image
                  src={projectData.heroImage}
                  alt={projectData.title}
                  width={1900}
                  height={900}
                  className={projectData.heroImageBg ? "object-contain" : "object-cover"}
                  priority
                />
              </div>

              <div className="mx-auto max-w-3xl py-12">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{projectData.title}</h1>
                <p className="mt-4 text-xl text-muted-foreground">{projectData.description}</p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                  <div>
                    <h3 className="font-medium">Timeline</h3>
                    <p className="text-muted-foreground">{projectData.duration}</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Role</h3>
                    <p className="text-muted-foreground">{projectData.role}</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Team</h3>
                    <p className="text-muted-foreground">{projectData.team}</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Tools</h3>
                    <p className="text-muted-foreground">{projectData.tools}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {projectData.tags.map((tag: string, index: number) => (
                    <div key={index} className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          <div className="mx-auto max-w-3xl">
            {projectData.subtitle && !projectData.hook && (
              <p className="mt-2 text-lg text-muted-foreground">{projectData.subtitle}</p>
            )}

            {projectData.context && !projectData.hook && (
              <p className="mt-4 text-sm text-muted-foreground italic">Context: {projectData.context}</p>
            )}

            {projectData.contextAndProblemIntro ? (
              <div className="mt-12">
                <h2 className="text-2xl font-bold">Context & Problem</h2>
                <p className="mt-4 text-muted-foreground whitespace-pre-line">{projectData.contextAndProblemIntro}</p>
                {projectData.contextAndProblemGoal && (
                  <p className="mt-4 text-muted-foreground font-medium">{projectData.contextAndProblemGoal}</p>
                )}
              </div>
            ) : (
              <div className="mt-12">
                <h2 className="text-2xl font-bold">Overview</h2>
                <p className="mt-4 text-muted-foreground whitespace-pre-line">{projectData.overview}</p>
              </div>
            )}

            {projectData.projectScopeIntro && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold">Project Scope</h2>
                <p className="mt-4 text-muted-foreground">{projectData.projectScopeIntro}</p>
                {projectData.projectScopeList && (
                  <ul className="mt-4 space-y-2">
                    {projectData.projectScopeList.map((item: string, index: number) => (
                      <li key={index} className="flex items-start text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {projectData.projectScopeIncludes && (
                  <p className="mt-4 text-muted-foreground">{projectData.projectScopeIncludes}</p>
                )}
                {projectData.projectScopeIncludesList && (
                  <ul className="mt-4 space-y-2">
                    {projectData.projectScopeIncludesList.map((item: string, index: number) => (
                      <li key={index} className="flex items-start text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {projectData.whyDifferentTitle && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold">{projectData.whyDifferentTitle}</h2>
                <p className="mt-4 text-muted-foreground whitespace-pre-line">{projectData.whyDifferentIntro}</p>
                {projectData.whyDifferentList && (
                  <ul className="mt-4 space-y-2">
                    {projectData.whyDifferentList.map((item: string, index: number) => (
                      <li key={index} className="flex items-start text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {projectData.whyDifferentConclusion && (
                  <p className="mt-4 text-muted-foreground font-medium">{projectData.whyDifferentConclusion}</p>
                )}
              </div>
            )}

            <div className="mt-12">
              <h2 className="text-2xl font-bold">My Role</h2>
              {projectData.myRoleList ? (
                <ul className="mt-4 space-y-2">
                  {projectData.myRoleList.map((item: string, index: number) => (
                    <li key={index} className="flex items-start text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-muted-foreground">{projectData.myRole}</p>
              )}
            </div>

            {projectData.challenge && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold">The Challenge</h2>
                <p className="mt-4 text-muted-foreground whitespace-pre-line">{projectData.challenge}</p>
              </div>
            )}

            {projectData.processOverview && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold">{projectData.processOverviewTitle || "Process Overview"}</h2>
                <div className="mt-6 space-y-4">
                  {projectData.processOverview.map((item: any, index: number) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="font-medium text-primary min-w-[100px]">{item.period}</div>
                      <div className="text-muted-foreground">{item.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {projectData.keyInsights && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold">{projectData.keyInsightsTitle || "Key Insights"}</h2>
                <div className="mt-8 space-y-12">
                  {projectData.keyInsights.map((insight: any, index: number) => (
                    <div key={index}>
                      <div className="grid md:grid-cols-[40%_60%] gap-8">
                        {/* Left column - Insight content */}
                        <div>
                          <h3 className="text-xl font-semibold">{insight.number}. {insight.title}</h3>
                          <p className="mt-4 text-muted-foreground">{insight.finding}</p>
                        </div>
                        {/* Right column - Image placeholder */}
                        <div>
                          <ImagePlaceholder 
                            label={insight.imageLabel || `Insight ${insight.number} UI`} 
                            aspectRatio="4/3"
                          />
                        </div>
                      </div>
                      {/* Design Response below */}
                      <div className="mt-6 pt-6 border-t border-muted-foreground/10">
                        <p className="font-medium text-primary">Design Response</p>
                        <ul className="mt-3 space-y-2">
                          {insight.designResponse.map((item: string, i: number) => (
                            <li key={i} className="flex items-start text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4">
                          <span className="font-medium text-primary">Outcome: </span>
                          <span className="text-muted-foreground">{insight.outcome}</span>
                        </div>
                      </div>
                      {/* Subtle divider between insights */}
                      {index < projectData.keyInsights.length - 1 && (
                        <div className="mt-8 border-b border-muted-foreground/20" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {projectData.designDirectionTitle && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold">{projectData.designDirectionTitle}</h2>
                <p className="mt-4 text-muted-foreground whitespace-pre-line">{projectData.designDirectionIntro}</p>
                {projectData.designDirectionPrinciples && (
                  <ul className="mt-4 space-y-2">
                    {projectData.designDirectionPrinciples.map((item: string, index: number) => (
                      <li key={index} className="flex items-start text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {projectData.solutionOverviewTitle && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold">{projectData.solutionOverviewTitle}</h2>
                <p className="mt-4 text-muted-foreground">{projectData.solutionOverviewIntro}</p>
                {projectData.solutionOverviewFeatures && (
                  <ul className="mt-4 space-y-2">
                    {projectData.solutionOverviewFeatures.map((item: string, index: number) => (
                      <li key={index} className="flex items-start text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {projectData.solutionOverviewFlow && (
                  <p className="mt-4 text-muted-foreground whitespace-pre-line">{projectData.solutionOverviewFlow}</p>
                )}
                
                {/* User Flow Diagram placeholder */}
                {projectData.imagePlaceholders?.userFlow && (
                  <div className="mt-10">
                    <ImagePlaceholder 
                      label={projectData.imagePlaceholders.userFlow} 
                      aspectRatio="16/9"
                    />
                  </div>
                )}
                
                {/* Key Screens placeholders */}
                {projectData.imagePlaceholders?.keyScreens && (
                  <div className="mt-10">
                    <h3 className="text-lg font-semibold mb-4">Key Screens</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      {projectData.imagePlaceholders.keyScreens.map((label: string, index: number) => (
                        <ImagePlaceholder 
                          key={index}
                          label={label} 
                          aspectRatio="3/2"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {projectData.keyInteractionDecisionsTitle && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold">{projectData.keyInteractionDecisionsTitle}</h2>
                <div className="mt-6 space-y-4">
                  {projectData.keyInteractionDecisions.map((item: any, index: number) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="font-medium min-w-[200px]">{item.decision}</div>
                      <div className="text-muted-foreground">→ {item.rationale}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {projectData.evaluationTitle && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold">{projectData.evaluationTitle}</h2>
                <p className="mt-4 text-muted-foreground whitespace-pre-line">{projectData.evaluationIntro}</p>
                {projectData.evaluationCriteria && (
                  <ul className="mt-4 space-y-2">
                    {projectData.evaluationCriteria.map((item: string, index: number) => (
                      <li key={index} className="flex items-start text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {projectData.evaluationResultsTitle && (
                  <p className="mt-4 font-medium">{projectData.evaluationResultsTitle}</p>
                )}
                {projectData.evaluationResults && (
                  <ul className="mt-2 space-y-2">
                    {projectData.evaluationResults.map((item: string, index: number) => (
                      <li key={index} className="flex items-start text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {projectData.invisibleProblem && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold">The Invisible Problem</h2>
                <p className="mt-4 text-muted-foreground whitespace-pre-line">{projectData.invisibleProblem}</p>
                {projectData.invisibleProblemList && (
                  <ul className="mt-4 space-y-2">
                    {projectData.invisibleProblemList.map((item: string, index: number) => (
                      <li key={index} className="flex items-start text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {projectData.invisibleProblemConclusion && (
                  <p className="mt-4 text-muted-foreground">{projectData.invisibleProblemConclusion}</p>
                )}
              </div>
            )}

            {projectData.researchInsights && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold">Research & Insights</h2>
                <p className="mt-4 text-muted-foreground">{projectData.researchInsights}</p>
                {projectData.researchInsightsList && (
                  <ul className="mt-4 space-y-2">
                    {projectData.researchInsightsList.map((item: string, index: number) => (
                      <li key={index} className="flex items-start text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {projectData.researchKeyInsight && (
                  <p className="mt-4 text-muted-foreground whitespace-pre-line">{projectData.researchKeyInsight}</p>
                )}
              </div>
            )}

            {projectData.designPrinciple && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold">Design Principle</h2>
                <p className="mt-4 text-muted-foreground whitespace-pre-line">{projectData.designPrinciple}</p>
                {projectData.designPrincipleList && (
                  <ul className="mt-4 space-y-2">
                    {projectData.designPrincipleList.map((item: string, index: number) => (
                      <li key={index} className="flex items-start text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {projectData.systemReframe && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold">From Ecosystem → System</h2>
                <p className="mt-4 text-muted-foreground">{projectData.systemReframe}</p>
                {projectData.systemReframeActors && (
                  <>
                    <p className="mt-4 text-muted-foreground font-medium">{projectData.systemReframeActors}</p>
                    <ul className="mt-2 space-y-2">
                      {projectData.systemReframeActorsList.map((item: string, index: number) => (
                        <li key={index} className="flex items-start text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {projectData.systemReframeProblem && (
                  <p className="mt-4 text-muted-foreground whitespace-pre-line">{projectData.systemReframeProblem}</p>
                )}
                {projectData.systemReframeOpportunity && (
                  <p className="mt-4 text-muted-foreground whitespace-pre-line">{projectData.systemReframeOpportunity}</p>
                )}
              </div>
            )}

            {(projectData.solution || projectData.solutionTitle) && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold">Solution</h2>
                {projectData.solutionTitle && (
                  <h3 className="mt-4 text-xl font-semibold">{projectData.solutionTitle}</h3>
                )}
                {projectData.solutionIntro && (
                  <p className="mt-4 text-muted-foreground whitespace-pre-line">{projectData.solutionIntro}</p>
                )}
                {projectData.solutionFeatures && (
                  <ul className="mt-4 space-y-2">
                    {projectData.solutionFeatures.map((item: string, index: number) => (
                      <li key={index} className="flex items-start text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {projectData.solutionConclusion && (
                  <p className="mt-4 text-muted-foreground font-medium">{projectData.solutionConclusion}</p>
                )}
                {projectData.solution && !projectData.solutionTitle && (
                  <p className="mt-4 text-muted-foreground">{projectData.solution}</p>
                )}
              </div>
            )}

            {projectData.wireframeImage && (
              <div className="mt-12">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={projectData.wireframeImage}
                    alt="Project wireframe"
                    width={800}
                    height={600}
                    className="object-cover w-full"
                  />
                </div>
              </div>
            )}

            {projectData.process && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold">{projectData.invisibleProblem ? "Design Process" : "Approach"}</h2>
                <div className="mt-6 grid gap-8">
                  {projectData.process.map((step: any, index: number) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold">{step.title}</h3>
                      {step.description && (
                        <p className="mt-2 text-muted-foreground">{step.description}</p>
                      )}
                      {step.intro && (
                        <p className="mt-2 text-muted-foreground">{step.intro}</p>
                      )}
                      {step.list && (
                        <ul className="mt-2 space-y-2">
                          {step.list.map((item: string, i: number) => (
                            <li key={i} className="flex items-start text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                      {step.conclusion && (
                        <p className="mt-2 text-muted-foreground">{step.conclusion}</p>
                      )}
                      {step.middle && (
                        <p className="mt-4 text-muted-foreground whitespace-pre-line">{step.middle}</p>
                      )}
                      {step.strategyList && (
                        <ul className="mt-2 space-y-2">
                          {step.strategyList.map((item: string, i: number) => (
                            <li key={i} className="flex items-start text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                      {step.outcomeIntro && (
                        <p className="mt-4 text-muted-foreground">{step.outcomeIntro}</p>
                      )}
                      {step.outcomeList && (
                        <ul className="mt-2 space-y-2">
                          {step.outcomeList.map((item: string, i: number) => (
                            <li key={i} className="flex items-start text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  ))}
                </div>
              </div>
            )}

            {projectData.keyContributions && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold">Key Contributions</h2>
                <ul className="mt-4 space-y-2">
                  {projectData.keyContributions.map((item: string, index: number) => (
                    <li key={index} className="flex items-start text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-12">
              <h2 className="text-2xl font-bold">{projectData.impactTitle || "Impact"}</h2>
              {projectData.impactEducationTitle && (
                <>
                  <h3 className="mt-6 text-xl font-semibold">{projectData.impactEducationTitle}</h3>
                  <p className="mt-2 text-muted-foreground">{projectData.impactEducationIntro}</p>
                  {projectData.impactEducationList && (
                    <ul className="mt-2 space-y-2">
                      {projectData.impactEducationList.map((item: string, index: number) => (
                        <li key={index} className="flex items-start text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
              {projectData.impactFutureTitle && (
                <>
                  <h3 className="mt-6 text-xl font-semibold">{projectData.impactFutureTitle}</h3>
                  <p className="mt-2 text-muted-foreground">{projectData.impactFutureDescription}</p>
                </>
              )}
              {projectData.impactList ? (
                <ul className="mt-4 space-y-2">
                  {projectData.impactList.map((item: string, index: number) => (
                    <li key={index} className="flex items-start text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : projectData.impact ? (
                <p className="mt-4 text-muted-foreground">{projectData.impact}</p>
              ) : null}
            </div>

            {projectData.whatILearned && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold">What I Learned</h2>
                <p className="mt-4 text-muted-foreground">{projectData.whatILearned}</p>
              </div>
            )}

            <div className="mt-12">
              <h2 className="text-2xl font-bold">Reflection</h2>
              {projectData.reflectionIntro && (
                <p className="mt-4 text-muted-foreground whitespace-pre-line">{projectData.reflectionIntro}</p>
              )}
              {projectData.reflectionList && (
                <ul className="mt-4 space-y-2">
                  {projectData.reflectionList.map((item: string, index: number) => (
                    <li key={index} className="flex items-start text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {projectData.reflectionConclusion && (
                <p className="mt-4 text-muted-foreground">{projectData.reflectionConclusion}</p>
              )}
              {projectData.reflection && !projectData.reflectionIntro && (
                <p className="mt-4 text-muted-foreground">{projectData.reflection}</p>
              )}
            </div>

            <div className="mt-12 flex justify-center gap-4">
              <Button asChild variant="outline">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Lingfei Zhan. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

