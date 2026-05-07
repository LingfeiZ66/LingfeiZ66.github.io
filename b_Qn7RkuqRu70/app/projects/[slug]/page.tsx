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
  "e-commerce": {
    title: "Eisenberg Family Depression Center Toolkit",
    description: "Improving Access to Mental Health Resources Through UX Research",
    subtitle: "UX Research Case Study | Jan–Apr 2025",
    client: "Eisenberg Family Depression Center, University of Michigan",
    duration: "Jan–Apr 2025",
    role: "UX Researcher",
    team: "5 UX researchers",
    tools: "Interviews, survey, comparative analysis, heuristic evaluation, usability testing",
    tags: ["UX Research", "Interviews", "Usability Testing", "Heuristic Evaluation", "Mental Health"],
    heroImage: "/placeholder.svg?height=600&width=1200",
    heroImageBg: "bg-blue-50",
    heroImageCaption: "Hero image showing the Toolkit website on laptop/mobile screens, with a soft background and a few research artifacts like sticky notes or report pages.",
    impact: "In April 2026, the client shared that our research had been applied to website updates, and the new version of the Toolkit website had launched.",
    overview: "The Depression Center Toolkit is an online mental health resource created by the Eisenberg Family Depression Center. It helps users understand symptoms, explore treatment options, use self-assessments, and find supportive resources.\n\nThe Toolkit had valuable, evidence-based content, but the user experience created barriers. Users could not always find what they needed quickly. Some pages felt text-heavy, clinical, and hard to scan. This mattered because people often visit mental health resources when they are already stressed, uncertain, or looking for help in a vulnerable moment.\n\nOur team conducted mixed-method UX research to understand these barriers and provide actionable recommendations for improving the Toolkit's usability, accessibility, personalization, and content flow.",
    thesis: "We helped a trusted mental health resource move from an information-heavy website toward a clearer, more supportive, and more actionable experience.",
    challenge: "Mental health resources are only helpful when people can find, understand, and act on them. The Toolkit offered strong content, including self-assessments, educational materials, coping strategies, and treatment guidance. However, our early research showed that users faced information overload, lack of personalization, and difficulty knowing what to do after using an assessment tool.\n\nThe key challenge was not whether the Toolkit had useful information. It did. The challenge was whether users could access that information easily during moments when they might already feel overwhelmed.",
    challengeImageCaption: "Screenshot of the original Toolkit page, ideally showing the side navigation and dense text layout. Add annotation labels such as \"Deep navigation,\" \"Dense content,\" and \"Unclear next step.\"",
    researchGoals: [
      "How do users search for and evaluate mental health information online?",
      "What makes users trust or distrust an online mental health resource?",
      "Can users find important Toolkit resources without confusion?",
      "How can the Toolkit improve usability, accessibility, personalization, and privacy?"
    ],
    researchGoalsNote: "These questions helped us look beyond surface-level website problems. We wanted to understand how users think, what they need emotionally, and what kind of guidance would help them take the next step.",
    researchProcessIntro: "Research timeline from January to April 2025: Interviews → Survey → Comparative Analysis → Heuristic Evaluation → Usability Testing → Recommendations.",
    researchProcess: [
      {
        title: "1. Interviews: Understanding user needs",
        description: "We conducted 5 interviews to understand how people search for, evaluate, and use online mental health resources. Participants discussed trust, accessibility, content preferences, and barriers such as information overload and conflicting advice. After interviews, our team reviewed responses, coded themes, and created an affinity wall to synthesize patterns.",
        question: "What we wanted to learn: How do users decide whether a mental health resource feels trustworthy, useful, and easy to act on?",
        imageCaption: "Affinity wall, interview notes, or a simplified \"themes from interviews\" graphic."
      },
      {
        title: "2. Survey: Validating early patterns",
        description: "We created a pilot survey to expand on the interview findings. The survey explored how people seek mental health information, what challenges they face with self-assessment tools, and how the Toolkit could improve usability, accessibility, and personalization while maintaining privacy.\n\nBecause mental health is a sensitive topic, we carefully revised the survey language. For example, instead of asking what would make users \"not use\" a website, we reframed the question around what factors are most important when using an online mental health resource. This made the survey feel more constructive and less emotionally triggering.",
        imageCaption: "Survey question examples or a small card showing \"Before wording\" vs. \"After wording.\""
      },
      {
        title: "3. Comparative Analysis: Learning from other platforms",
        description: "We compared the Toolkit with other mental health and educational platforms, including Beyond Blue, DBSA, Here to Help, CDC Mental Health Page, and Khan Academy. We evaluated content quality, navigation, accessibility, engagement, and privacy.\n\nThis helped us understand what users might expect from similar platforms. We found that platforms with stronger personalization, clearer navigation, and more interactive tools created a more engaging experience. The Toolkit performed well in content organization, but it had opportunities to improve readability, interactivity, visual hierarchy, and navigation clarity.",
        imageCaption: "Comparative matrix table. You can simplify the table into 5 columns: Personalization, Interactive Tools, Navigation, Content Organization, Readability."
      },
      {
        title: "4. Heuristic Evaluation: Inspecting usability and accessibility issues",
        description: "We evaluated the Toolkit using Nielsen's 10 usability heuristics, focusing on navigation, accessibility, consistency, readability, and visual hierarchy. The site supported keyboard navigation, but lacked visual icons, clear call-to-action buttons, visual contrast, and consistent alt text. These issues made it harder for users to scan content and know what action to take next.",
        imageCaption: "Annotated screenshot showing missing CTA buttons, weak visual hierarchy, or dense text blocks."
      },
      {
        title: "5. Usability Testing: Observing real task behavior",
        description: "We conducted 5 remote usability tests with participants aged 18–55. Participants completed realistic tasks, such as finding depression symptom information, preparing for a doctor's visit, and completing a self-assessment.\n\nUsers appreciated the depth and seriousness of the content, but they struggled with confusing navigation, unclear content categories, and a formal tone that felt uninviting. These problems caused hesitation, frustration, and sometimes task failure.",
        imageCaption: "Usability testing setup screenshot, task flow diagram, or a quote card from a participant."
      }
    ],
    keyInsight: "The Toolkit should not only provide information. It should guide users toward the right resource, explain what to do next, and feel supportive during a sensitive moment.",
    keyInsightDirection: "This became the main direction for our recommendations:\n\nMove from a static resource library to a guided support experience.",
    keyInsightImageCaption: "Simple before/after concept diagram: \"Resource Library\" → \"Guided Support Experience.\"",
    findings: [
      {
        title: "Finding 1: Users needed to find support quickly, but navigation felt too deep.",
        problem: "The most noticeable usability issue was the Toolkit's complex navigation and deep hierarchy. During usability testing, users described the site as having too many layers. One participant said it felt like \"a hamburger with 10 layers deep.\" Users often paused, rerouted, or became disoriented when trying to find self-assessment tools or appointment preparation information.",
        mattered: "For a mental health resource, slow or confusing navigation can prevent users from reaching support when they need it most.",
        recommendation: "Simplify the information hierarchy, add breadcrumbs, make key resources more visible, and reorganize sections around user intent, such as Learn, Get Help, and Prepare.",
        imageCaption: "Annotated navigation screenshot + simplified proposed navigation structure."
      },
      {
        title: "Finding 2: Users trusted the content, but the tone and format felt overwhelming.",
        problem: "Users saw the Toolkit as serious and credible, but the tone often felt too clinical. Dense text blocks and bullet-heavy sections made pages harder to read, especially on emotionally sensitive pages like \"I'm not feeling well.\"",
        mattered: "A mental health website should not only be accurate. It should also feel approachable, calm, and supportive.",
        recommendation: "Use warmer language, shorter paragraphs, supportive headings, visual cues, and plain language. Break long content into smaller sections so users can scan the page more easily.",
        imageCaption: "Before/after content layout. Left: dense text. Right: shorter sections with supportive headers and icons."
      },
      {
        title: "Finding 3: Self-assessments needed clearer next steps.",
        problem: "Interview participants wanted online assessments to provide more than a score. They wanted clear, personalized guidance, such as self-help exercises, goal-setting tools, recommendations, treatment links, or direct next steps. The current assessment experience was not easy to discover and did not provide enough actionable follow-up.",
        mattered: "For many users, a self-assessment may be the first step toward seeking help. If the result does not explain what to do next, users may feel stuck.",
        recommendation: "Make the assessment easier to find and redesign the results page to include tailored next steps, relevant resources, and clear explanations of what the score means.",
        imageCaption: "Assessment results page concept. Include cards like \"Understand your score,\" \"Try a guided exercise,\" \"Prepare for a provider visit,\" \"Find support.\""
      },
      {
        title: "Finding 4: Accessibility and visual hierarchy affected users' ability to scan and act.",
        problem: "The heuristic evaluation found that the Toolkit supported keyboard navigation, but it lacked visual icons, clear call-to-action buttons, strong contrast, and meaningful alt text for some images. The mostly uniform visual style made it difficult for users to identify key content quickly.",
        mattered: "Accessibility is not only about technical compliance. It also affects whether users can understand where they are, what matters, and what they should do next.",
        recommendation: "Add consistent icons, stronger visual hierarchy, clearer CTA buttons, improved contrast, and meaningful alt text.",
        imageCaption: "Accessibility improvement checklist or annotated UI showing CTA, icon, heading hierarchy, and contrast."
      },
      {
        title: "Finding 5: Users wanted personalization while maintaining privacy.",
        problem: "Interview and survey findings showed that users wanted resources that felt relevant to their personal situation. However, because mental health is sensitive, users also cared about privacy and did not want to give unnecessary personal information. Survey responses showed interest in personalized recommendations, interactive tools, and downloadable content.",
        mattered: "A one-size-fits-all experience can feel generic, but over-personalization may create privacy concerns.",
        recommendation: "Use privacy-conscious personalization, such as optional filters, saved resources, downloadable tools, and non-login-based pathways.",
        imageCaption: "Personalization concept showing optional filters like \"I want to learn,\" \"I want support now,\" \"I am preparing for an appointment,\" \"I am supporting someone else.\""
      }
    ],
    finalRecommendations: [
      {
        number: "1",
        title: "Simplify navigation",
        description: "Reduce the number of layers in the side navigation. Add breadcrumbs and make high-priority resources easier to access."
      },
      {
        number: "2",
        title: "Use user-centered labels",
        description: "Rename confusing categories using everyday language. Group content around what users are trying to do, not around internal content categories."
      },
      {
        number: "3",
        title: "Make content easier to scan",
        description: "Break long pages into shorter sections. Use supportive headings, plain language, icons, and visual summaries."
      },
      {
        number: "4",
        title: "Improve assessment follow-up",
        description: "Make the self-assessment tool easier to find and provide clearer next steps after users receive a result."
      },
      {
        number: "5",
        title: "Strengthen accessibility",
        description: "Improve contrast, add alt text, create clearer heading structures, and use stronger CTAs to guide users."
      },
      {
        number: "6",
        title: "Build trust through transparency",
        description: "Show authorship, review dates, professional validation, and source information clearly so users can evaluate credibility."
      }
    ],
    outcomeIntro: "In April 2026, the client shared that they had applied our research findings to website changes, and the new version of the Toolkit website had already launched.\n\nThis made the project especially meaningful because our research moved beyond a class deliverable. It contributed to a real website update for a public mental health resource.",
    outcomeImpact: [
      {
        title: "User impact",
        description: "Our recommendations aimed to help users find mental health support faster, understand information more easily, and feel more comfortable using the Toolkit during vulnerable moments."
      },
      {
        title: "Client impact",
        description: "The research gave the Eisenberg Family Depression Center a clear, evidence-based direction for improving navigation, readability, accessibility, personalization, and user flow."
      },
      {
        title: "Personal impact",
        description: "This project helped me learn how to conduct research on a sensitive topic, communicate findings to a real client, and turn mixed-method research into actionable product recommendations."
      }
    ],
    outcomeImageCaption: "\"Research → Website Update\" impact graphic, or screenshot of client email with private information blurred.",
    reflectionIntro: "This project taught me that good UX research is not only about finding usability problems. It is also about understanding the emotional context behind those problems.\n\nFor a mental health resource, confusing navigation or dense text is not just inconvenient. It can make users feel more overwhelmed at a moment when they need clarity and support. Through this project, I learned how to combine interviews, surveys, competitive research, heuristic evaluation, and usability testing to tell a stronger story about user needs.\n\nI also learned the importance of client communication. Since our recommendations needed to support both user needs and stakeholder goals, we had to make our findings clear, practical, and actionable. Seeing the client later apply our research to the launched website showed me how UX research can create real impact.",
    reflectionList: [],
    reflectionConclusion: ""
  },
}

export function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug,
  }))
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

            {projectData.thesis && (
              <div className="mt-8 p-6 bg-muted/50 rounded-lg border-l-4 border-primary">
                <p className="text-sm font-medium text-primary mb-2">Case study thesis:</p>
                <p className="text-foreground italic">{projectData.thesis}</p>
              </div>
            )}

            {projectData.impact && (
              <div className="mt-6 p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-sm font-medium text-green-700 dark:text-green-400">Impact: {projectData.impact}</p>
              </div>
            )}

            {projectData.researchGoals && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold">Research Goals</h2>
                <p className="mt-4 text-muted-foreground">We focused on four main questions:</p>
                <ol className="mt-4 space-y-3">
                  {projectData.researchGoals.map((goal: string, index: number) => (
                    <li key={index} className="flex items-start text-muted-foreground">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-medium mr-3">
                        {index + 1}
                      </span>
                      {goal}
                    </li>
                  ))}
                </ol>
                {projectData.researchGoalsNote && (
                  <p className="mt-4 text-muted-foreground">{projectData.researchGoalsNote}</p>
                )}
              </div>
            )}

            {projectData.researchProcess && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold">Research Process</h2>
                {projectData.researchProcessIntro && (
                  <p className="mt-4 text-muted-foreground italic text-sm">{projectData.researchProcessIntro}</p>
                )}
                <div className="mt-6 space-y-8">
                  {projectData.researchProcess.map((method: any, index: number) => (
                    <div key={index} className="p-6 rounded-lg border bg-card">
                      <h3 className="text-lg font-bold">{method.title}</h3>
                      <p className="mt-3 text-muted-foreground whitespace-pre-line">{method.description}</p>
                      {method.question && (
                        <p className="mt-4 text-sm text-primary font-medium">{method.question}</p>
                      )}
                      {method.imageCaption && (
                        <div className="mt-4 p-4 bg-muted/50 rounded-md border border-dashed">
                          <p className="text-xs text-muted-foreground italic">[IMAGE PLACEHOLDER: {method.imageCaption}]</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {projectData.keyInsight && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold">Key Insight</h2>
                <div className="mt-4 p-6 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-foreground whitespace-pre-line">{projectData.keyInsight}</p>
                  {projectData.keyInsightDirection && (
                    <p className="mt-4 text-foreground font-semibold whitespace-pre-line">{projectData.keyInsightDirection}</p>
                  )}
                </div>
                {projectData.keyInsightImageCaption && (
                  <div className="mt-4 p-4 bg-muted/50 rounded-md border border-dashed">
                    <p className="text-xs text-muted-foreground italic">[IMAGE PLACEHOLDER: {projectData.keyInsightImageCaption}]</p>
                  </div>
                )}
              </div>
            )}

            {projectData.findings && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold">Key Findings</h2>
                <div className="mt-6 space-y-8">
                  {projectData.findings.map((finding: any, index: number) => (
                    <div key={index} className="p-6 rounded-lg border bg-card">
                      <h3 className="text-lg font-bold">{finding.title}</h3>
                      <p className="mt-3 text-muted-foreground whitespace-pre-line">{finding.problem}</p>
                      <div className="mt-4 p-4 bg-muted/50 rounded-md">
                        <p className="text-sm font-medium text-primary">Why it mattered:</p>
                        <p className="mt-1 text-sm text-muted-foreground">{finding.mattered}</p>
                      </div>
                      <div className="mt-4 p-4 bg-primary/5 rounded-md border-l-2 border-primary">
                        <p className="text-sm font-medium text-primary">Recommendation:</p>
                        <p className="mt-1 text-sm text-muted-foreground">{finding.recommendation}</p>
                      </div>
                      {finding.imageCaption && (
                        <div className="mt-4 p-4 bg-muted/50 rounded-md border border-dashed">
                          <p className="text-xs text-muted-foreground italic">[IMAGE PLACEHOLDER: {finding.imageCaption}]</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {projectData.finalRecommendations && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold">Recommendations</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {projectData.finalRecommendations.map((rec: any, index: number) => (
                    <div key={index} className="p-5 rounded-lg border bg-card">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                          {rec.number}
                        </div>
                        <div>
                          <h3 className="font-semibold">{rec.title}</h3>
                          <p className="mt-1 text-sm text-muted-foreground">{rec.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {projectData.outcomeImpact && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold">Outcome and Impact</h2>
                {projectData.outcomeIntro && (
                  <p className="mt-4 text-muted-foreground whitespace-pre-line">{projectData.outcomeIntro}</p>
                )}
                <div className="mt-6 space-y-4">
                  {projectData.outcomeImpact.map((impact: any, index: number) => (
                    <div key={index} className="p-5 rounded-lg border bg-card">
                      <h3 className="font-semibold text-primary">{impact.title}</h3>
                      <p className="mt-2 text-muted-foreground">{impact.description}</p>
                    </div>
                  ))}
                </div>
                {projectData.outcomeImageCaption && (
                  <div className="mt-4 p-4 bg-muted/50 rounded-md border border-dashed">
                    <p className="text-xs text-muted-foreground italic">[IMAGE PLACEHOLDER: {projectData.outcomeImageCaption}]</p>
                  </div>
                )}
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

