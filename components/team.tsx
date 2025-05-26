"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import api from "@/lib/api"

export default function Team() {
  const [teamMembers, setTeamMembers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    api.get("/members")
      .then(res => {
        setTeamMembers(res.data)
        setLoading(false)
      })
      .catch(() => {
        setError("Failed to load team members.")
        setLoading(false)
      })
  }, [])

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Meet Our Team</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
            The passionate minds driving the Intel IoT Club forward
          </p>
        </div>
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="group overflow-hidden border border-border shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-blue-100 hover:-translate-y-0.5 bg-background/80 backdrop-blur-md"
              >
                <CardHeader className="text-center flex flex-col items-center">
                  <div className="relative">
                    <Avatar className="h-24 w-24 ring-2 ring-primary/20 group-hover:ring-primary transition-all duration-300">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>
                        {member.name?.split(" ").map((n: string) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute inset-0 rounded-full shadow-inner" />
                  </div>
                  <CardTitle className="mt-4 text-lg font-semibold">{member.name}</CardTitle>
                  <CardDescription className="text-sm">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="text-center px-6 pb-4">
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
                <CardFooter className="flex justify-center gap-5 pt-0 pb-6">
                  <Link href={member.github} className="text-muted-foreground hover:text-primary hover:scale-110 transition-all">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link href={member.linkedin} className="text-muted-foreground hover:text-primary hover:scale-110 transition-all">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href={`mailto:${member.email}`} className="text-muted-foreground hover:text-primary hover:scale-110 transition-all">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
