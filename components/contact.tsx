"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", subject: "", message: "" })
    alert("Message sent successfully!")
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Get in Touch
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Whether you're curious about our club, want to collaborate, or have questions—reach out!
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <Card className="shadow-md hover:shadow-lg transition-all duration-300 border-none bg-muted/40">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Contact Information</CardTitle>
              <CardDescription>Reach us through the following details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 text-base">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Engineering Building, Amrita Campus</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <Link href="mailto:info@inteliotclub.edu" className="hover:underline">
                  info@inteliotclub.edu
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <Link href="tel:+1234567890" className="hover:underline">
                  (123) 456-7890
                </Link>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="mb-3 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  Follow Us
                </h3>
                <div className="flex gap-5">
                  <Link href="#" className="hover:text-primary transition-all">
                    <Github className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="hover:text-primary transition-all">
                    <Linkedin className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="hover:text-primary transition-all">
                    <Instagram className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-all duration-300 border-none bg-muted/40">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Send a Message</CardTitle>
              <CardDescription>We usually respond within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block mb-1 text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-1 text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-1 text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="rounded-md"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-1 text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    required
                    className="rounded-md"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-full transition-all duration-300 bg-primary text-white hover:bg-primary/90 hover:shadow-lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}