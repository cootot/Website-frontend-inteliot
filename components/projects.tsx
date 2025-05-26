import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "Smart Campus",
      description: "IoT-based system for monitoring and managing campus resources efficiently.",
      tags: ["Intel Edison", "Node.js", "MQTT"],
      github: "#",
      demo: "#",
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
    <section id="projects" className="py-20 bg-muted">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Projects</h2>
          <p className="mt-4 text-muted-foreground">Innovative solutions built by our members</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] dark:hover:shadow-primary/10"
            >
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-primary/10 hover:border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full transition-all duration-300 hover:bg-primary/10 hover:border-primary/30"
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
                  className="rounded-full transition-all duration-300 hover:bg-primary/10 hover:border-primary/30"
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
