import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Team() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "President",
      bio: "Computer Engineering senior with a passion for IoT and embedded systems.",
      image: "/placeholder.svg?height=200&width=200",
      github: "#",
      linkedin: "#",
      email: "alex@example.com",
    },
    {
      name: "Samantha Lee",
      role: "Vice President",
      bio: "Electrical Engineering junior focusing on sensor networks and data analytics.",
      image: "/placeholder.svg?height=200&width=200",
      github: "#",
      linkedin: "#",
      email: "samantha@example.com",
    },
    {
      name: "David Chen",
      role: "Technical Lead",
      bio: "Computer Science senior specializing in edge computing and machine learning.",
      image: "/placeholder.svg?height=200&width=200",
      github: "#",
      linkedin: "#",
      email: "david@example.com",
    },
    {
      name: "Priya Patel",
      role: "Workshop Coordinator",
      bio: "IoT enthusiast with experience in organizing technical workshops and hackathons.",
      image: "/placeholder.svg?height=200&width=200",
      github: "#",
      linkedin: "#",
      email: "priya@example.com",
    },
    {
      name: "Michael Rodriguez",
      role: "Project Manager",
      bio: "Mechanical Engineering senior interested in IoT applications for smart manufacturing.",
      image: "/placeholder.svg?height=200&width=200",
      github: "#",
      linkedin: "#",
      email: "michael@example.com",
    },
    {
      name: "Emma Wilson",
      role: "Outreach Coordinator",
      bio: "Marketing major with a minor in Computer Science, passionate about tech communication.",
      image: "/placeholder.svg?height=200&width=200",
      github: "#",
      linkedin: "#",
      email: "emma@example.com",
    },
  ]

  return (
    <section id="team" className="py-20 bg-muted">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Team</h2>
          <p className="mt-4 text-muted-foreground">Meet the people behind Intel IoT Club</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] dark:hover:shadow-primary/10"
            >
              <CardHeader className="text-center">
                <Avatar className="mx-auto h-24 w-24 ring-2 ring-primary/20 transition-all duration-300 hover:ring-primary">
                  <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="mt-4">{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
              <CardFooter className="flex justify-center gap-4">
                <Link
                  href={member.github}
                  className="text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-110"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href={member.linkedin}
                  className="text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href={`mailto:${member.email}`}
                  className="text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-110"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
