"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { ArrowRight, Download, Send, Mail, Phone, MapPin } from "lucide-react"
import { SiteHeader, RESUME_URL } from "@/components/site-header"
import { SectionHeader } from "@/components/section-header"
import { StatusIndicator } from "@/components/status-indicator"
import { Hero } from "@/components/hero"
import { SelectedWork } from "@/components/selected-work"

export default function Home() {
  const { toast } = useToast()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />
        <section aria-label="Skills" className="pb-16 md:pb-24">
          <div className="container mx-auto px-4">
            {/* Rolling Skills Marquee */}
            <div className="relative mt-20 overflow-hidden border-y border-border py-5">
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
                        className="whitespace-nowrap rounded-full border border-border px-4 py-1.5 font-mono text-xs text-muted-foreground transition-colors duration-fast hover:border-foreground/40 hover:text-foreground"
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

        <SelectedWork />

        {/* Experience Section */}
        <section id="experience" className="section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <SectionHeader chapter="02" label="Progress log" title="Experience" />

              {/* Education */}
              <div className="mb-16">
                <h3 className="eyebrow mb-6">Education</h3>
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
                <h3 className="eyebrow mb-6">Award</h3>
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
                <h3 className="eyebrow mb-6">Experiences</h3>
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
                  <a href={RESUME_URL} download>
                    <Download aria-hidden="true" />
                    Download Full Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <SectionHeader chapter="03" label="Final level" title="Get In Touch" />

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="eyebrow mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-3 text-primary" />
                    <a href="mailto:lingfeiz66@gmail.com" className="link-underline text-muted-foreground hover:text-foreground">
                      lingfeiz66@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-3 text-primary" />
                      <a href="tel:+18585194582" className="link-underline text-muted-foreground hover:text-foreground">
                        +1 858-519-4582
                      </a>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-3 text-primary" />
                      <span className="text-muted-foreground">San Diego, CA</span>
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
      <footer className="border-t border-border py-8">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Lingfei Zhan. All rights reserved.
          </p>
          <p className="eyebrow" title="↑ ↑ ↓ ↓ ← → ← → B A">
            Thanks for playing
          </p>
        </div>
      </footer>
    </div>
  )
}

