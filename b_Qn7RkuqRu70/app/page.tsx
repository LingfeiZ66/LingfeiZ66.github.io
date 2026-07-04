"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Download, Send, ExternalLink, Mail, Phone, MapPin, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  const { toast } = useToast()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "work", "experience", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/xvzlwaqy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      })

      // Reset form
      setName("")
      setEmail("")
      setMessage("")
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold gradient-text">
            Lingfei Zhan
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "home" ? "text-primary" : "text-muted-foreground"}`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "work" ? "text-primary" : "text-muted-foreground"}`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "experience" ? "text-primary" : "text-muted-foreground"}`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "contact" ? "text-primary" : "text-muted-foreground"}`}
            >
              Contact
            </button>
            <Button asChild size="sm">
              <a href="https://blobs.vusercontent.net/blob/Resume-Lingfei%20Zhan%20%282026%29-qrLiukPXBUn3JgvYiwvZv0Y5zFXGOA.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute w-full bg-background border-b border-border py-4 px-4 flex flex-col space-y-4">
            <button onClick={() => scrollToSection("home")} className="text-sm font-medium py-2 hover:text-primary">
              Home
            </button>
            <button onClick={() => scrollToSection("work")} className="text-sm font-medium py-2 hover:text-primary">
              Projects
            </button>
            <button onClick={() => scrollToSection("experience")} className="text-sm font-medium py-2 hover:text-primary">
              Experience
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm font-medium py-2 hover:text-primary">
              Contact
            </button>
            <Button asChild size="sm" className="w-full">
              <a href="https://blobs.vusercontent.net/blob/Resume-Lingfei%20Zhan%20%282026%29-qrLiukPXBUn3JgvYiwvZv0Y5zFXGOA.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
            <div className="flex items-center justify-between pt-2 border-t border-border">
              <span className="text-sm text-muted-foreground">Theme</span>
              <ThemeToggle />
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1 space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Hi, I&apos;m <span className="gradient-text">Lingfei Zhan</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">UI/UX Designer</h2>
                <p className="text-lg text-muted-foreground max-w-xl">
                  I&apos;m a UX designer and University of Michigan School of Information student graduating Summer 2026, with a focus on accessibility, research, and inclusive digital experiences.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button onClick={() => scrollToSection("work")}>View My Projects</Button>
                  <Button variant="outline" onClick={() => scrollToSection("contact")}>
                    Get In Touch
                  </Button>
                </div>
              </div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14f59bf9d76da53bf1c7d06a428246d9-cE4prZ7eI4jAH9Al96TFQtIvqUv2qa.png"
                  alt="Lingfei Zhan"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Rolling Skills Marquee */}
            <div className="relative overflow-hidden py-6 mt-16">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
              
              <div className="flex animate-marquee">
                {[...Array(2)].map((_, idx) => (
                  <div key={idx} className="flex gap-4 pr-4">
                    {[
                      "Figma",
                      "User Research",
                      "Usability Testing",
                      "Wireframing",
                      "Prototyping",
                      "Interaction Design",
                      "Information Architecture",
                      "Accessibility",
                      "Heuristic Evaluation",
                      "Survey Design",
                      "Interviewing",
                      "HTML/CSS",
                      "Python",
                      "Visual Design",
                      "Typography",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium whitespace-nowrap hover:border-primary hover:text-primary transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">My Projects</h2>
                <p className="text-lg text-muted-foreground">
                  A selection of my recent UI/UX design projects across various industries.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Project 1 */}
                <Link href="/projects/ra-labs" className="group">
                  <div className="gradient-border bg-card overflow-hidden transition-transform duration-300 group-hover:scale-[1.02] h-[320px] flex flex-col">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ra%20Labs%20logo%20design%20with%20robot%20and%20elephant-WIsEjgK16vtg5cMXipCFioJX2MMqDS.png"
                        alt="RA Labs AI Data-Cleaning Platform"
                        width={720}
                        height={450}
                        className="object-contain bg-white transition-transform duration-300 group-hover:scale-105"
                      />
                      <span className="absolute top-3 right-3 z-10 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-neutral-900 shadow-md ring-1 ring-amber-500/60">
                        Confidential
                      </span>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">RA Labs AI Platform</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 flex-1">
                        Designed an AI data-cleaning platform prototype from scratch to high fidelity for a startup.
                      </p>
                    </div>
                  </div>
                </Link>

                {/* Project 2 */}
                <Link href="/projects/umsi-case-study" className="group">
                  <div className="gradient-border bg-card overflow-hidden transition-transform duration-300 group-hover:scale-[1.02] h-[320px] flex flex-col">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src="/Case Study Competition cover.png"
                        alt="UMSI Case Study Competition"
                        width={720}
                        height={450}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">UMSI Case Study Competition</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 flex-1">
                        Designed a centralized mobile app to support entrepreneurship in Michigan, earning 3rd place.
                      </p>
                    </div>
                  </div>
                </Link>

                {/* Project 3 */}
                <Link href="/projects/backyard-brains" className="group">
                  <div className="gradient-border bg-card overflow-hidden transition-transform duration-300 group-hover:scale-[1.02] h-[320px] flex flex-col">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src="/Backyard Brains cover.png"
                        alt="Backyard Brains HHI"
                        width={720}
                        height={450}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <span className="absolute top-3 right-3 z-10 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-neutral-900 shadow-md ring-1 ring-amber-500/60">
                        Recommended
                      </span>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Designing for Trust: Human-Human Interface</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 flex-1">
                        Designing a multi-user mobile experience that connects two users to a neuroscience device for safe, remote interaction.
                      </p>
                    </div>
                  </div>
                </Link>

                {/* Project 4 - Eisenberg Family Depression Center Toolkit */}
                <Link href="/projects/e-commerce" className="group">
                  <div className="gradient-border bg-card overflow-hidden transition-transform duration-300 group-hover:scale-[1.02] h-[320px] flex flex-col">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Eisenberg%20Toolkit%20cover-uAksGepkChuLYLXPEJGu368UlDNdKa.png"
                        alt="Eisenberg Family Depression Center Toolkit"
                        width={720}
                        height={450}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Eisenberg Family Depression Center Toolkit</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 flex-1">
                        Improving Access to Mental Health Resources Through UX Research
                      </p>
                    </div>
                  </div>
                </Link>

                {/* Project 5 - Michigan Football VIP Experience */}
                <Link href="/projects/education-platform" className="group">
                  <div className="gradient-border bg-card overflow-hidden transition-transform duration-300 group-hover:scale-[1.02] h-[320px] flex flex-col">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Michigan%20Football%20cover-MYty0hbsZevkL5Vr10j50bRsv4FZ9U.png"
                        alt="Michigan Football VIP Experience"
                        width={720}
                        height={450}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <span className="absolute top-3 right-3 z-10 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-neutral-900 shadow-md ring-1 ring-amber-500/60">
                        Recommended
                      </span>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Designing with AI: Michigan Football VIP Experience</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 flex-1">
                        What happens when AI helps you design a product—but you can&apos;t fully trust it?
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              {/* Education */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8">Education</h2>
                <div className="space-y-6">
                  <div className="gradient-border p-6 bg-card">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-xl font-semibold">University of Michigan</h3>
                        <p className="text-primary font-medium">Master of Science in Informatics, UX track</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-muted-foreground">Ann Arbor, MI</span>
                        <p className="text-sm text-muted-foreground">Aug 2024 - May 2026</p>
                      </div>
                    </div>
                  </div>

                  <div className="gradient-border p-6 bg-card">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-xl font-semibold">University of California - San Diego</h3>
                        <p className="text-primary font-medium">Bachelor degree of Communication major</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-muted-foreground">San Diego, CA</span>
                        <p className="text-sm text-muted-foreground">Mar 2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Award */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8">Award</h2>
                <div className="gradient-border p-6 bg-card">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">University of Michigan School of Information Case Study Competition</h3>
                      <p className="text-primary font-medium">Honorable mention</p>
                    </div>
                    <span className="text-sm text-muted-foreground">Nov 2024</span>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                      Led team meetings to ensure the team stayed on track, focused, and aligned with the objectives.
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                      Collaborated to analyze and propose solutions for the complex problem of Talent Retention & Entrepreneurship for Economic Growth in Michigan.
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                      Conducted interviews, surveys, literature reviews, and data analysis to inform the development of six alternative solutions.
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                      Recommended a final solution, which included creating a digital app prototype.
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                      Contributed to the development of a comprehensive written report and presentation slides for the final round.
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                      Demonstrated strong leadership, teamwork, analytical thinking, and problem-solving skills while meeting tight deadlines.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Experiences */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-8">Experiences</h2>
                <div className="space-y-6">
                  {/* Ra Labs */}
                  <div className="gradient-border p-6 bg-card">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">UX Design Intern</h3>
                        <p className="text-primary font-medium">Ra Labs</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-muted-foreground">New York, NY (Remote)</span>
                        <p className="text-sm text-muted-foreground">Jul 2025 - Oct 2025</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                        Designed a 0 to 1 AI-powered data cleaning product (30+ screens), turning complex workflows into a clear, user-centered experience.
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                        Owned end-to-end UX design from concept to high-fidelity within a 4-month internship
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                        Created structured workflows for reviewing and correcting AI outputs, improving usability and user trust
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                        Simplified ambiguous AI system behavior into actionable UI patterns
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                        Partnered with cross-functional stakeholders under confidentiality constraints
                      </li>
                    </ul>
                  </div>

                  {/* Mom Kitchen */}
                  <div className="gradient-border p-6 bg-card">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">Marketing Manager</h3>
                        <p className="text-primary font-medium">Mom Kitchen</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-muted-foreground">San Diego, CA</span>
                        <p className="text-sm text-muted-foreground">Jul 2023 - Aug 2024</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                        Developed and launched the restaurant&apos;s website, improving user experience and increasing customer engagement.
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                        Collaborated with stakeholders, including restaurant owners and staff, to gather requirements and align the website and social media strategies with business goals.
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                        Led social media management, including creating content and curating posts to enhance user engagement and drive traffic.
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                        Conducted user research through customer feedback and data analysis to refine content and improve user interaction.
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                        Grew the restaurant&apos;s Instagram account by 300+ followers within two weeks, with a single post achieving over 10k views, optimizing content for better user reach and engagement.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <Button asChild size="lg">
                  <a href="https://blobs.vusercontent.net/blob/Resume-Lingfei%20Zhan%20%282026%29-qrLiukPXBUn3JgvYiwvZv0Y5zFXGOA.pdf" download>
                    <Download className="mr-2 h-5 w-5" />
                    Download Full Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-3 text-primary" />
                      <a href="mailto:lingfeiz@umich.edu" className="text-muted-foreground hover:text-primary">
                        lingfeiz@umich.edu
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-3 text-primary" />
                      <a href="tel:+18585194582" className="text-muted-foreground hover:text-primary">
                        +1 858-519-4582
                      </a>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-3 text-primary" />
                      <span className="text-muted-foreground">Ann Arbor, MI</span>
                    </div>
                  </div>
                </div>

                <div className="gradient-border p-6 bg-card">
                  <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Name
                      </label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your message"
                        rows={4}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Lingfei Zhan. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

