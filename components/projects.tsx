import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Star } from "lucide-react"
import Link from "next/link"
import clsx from "clsx"

export default function Projects() {
  const projects = [
    {
      title: "Smart Campus",
      description: "IoT-based system for monitoring and managing campus resources efficiently.",
      tags: ["Intel Edison", "Node.js", "MQTT"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      title: "Health Monitoring Wearable",
      description: "Wearable device that tracks vital signs and sends alerts in case of emergencies.",
      tags: ["Intel Curie", "Arduino", "Bluetooth LE"],
      github: "#",
      demo: "#",
    },
    {
      title: "Smart Agriculture System",
      description: "Automated irrigation and monitoring system for optimal crop growth.",
      tags: ["Intel Galileo", "Python", "Sensors"],
      github: "#",
      demo: "#",
    },
    {
      title: "Connected Home Assistant",
      description: "Voice-controlled home automation system using Intel IoT technologies.",
      tags: ["Intel NUC", "RaspberryPi", "Voice Recognition"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      title: "Traffic Management System",
      description: "Real-time traffic monitoring and optimization using computer vision.",
      tags: ["Intel OpenVINO", "Computer Vision", "Edge Computing"],
      github: "#",
      demo: "#",
    },
    {
      title: "Energy Monitoring Dashboard",
      description: "Real-time energy consumption monitoring and analytics platform.",
      tags: ["Intel IoT Gateway", "React", "Time Series DB"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold sm:text-5xl tracking-tight">Our Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore cutting-edge IoT solutions built by our talented members — from smart wearables to scalable city systems.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={clsx(
                "relative overflow-hidden bg-background/70 backdrop-blur border border-border shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-blue-200 hover:-translate-y-1",
                project.featured && "border-primary/30"
              )}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 flex items-center gap-1 text-sm font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  <Star className="h-4 w-4" />
                  Featured
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="pb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground bg-muted hover:bg-primary/10 hover:text-primary transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex justify-between pt-0">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full text-sm font-medium"
                  asChild
                >
                  <Link href={project.github}>
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full text-sm font-medium"
                  asChild
                >
                  <Link href={project.demo}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
