import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Users, Target, Lightbulb, Handshake } from "lucide-react"

export default function About() {
  const goals = [
    {
      id: "item-1",
      icon: <Users className="h-5 w-5 text-primary" />,
      title: "Hands-on Learning",
      content:
        "We emphasize experiential learning through real projects, coding sessions, and rapid prototyping workshops.",
    },
    {
      id: "item-2",
      icon: <Handshake className="h-5 w-5 text-primary" />,
      title: "Industry Collaboration",
      content:
        "We partner with Intel and other top tech leaders to offer mentorship, guidance, and real-world IoT challenges.",
    },
    {
      id: "item-3",
      icon: <Lightbulb className="h-5 w-5 text-primary" />,
      title: "Innovation",
      content:
        "We foster a creative environment to brainstorm, build, and test cutting-edge IoT solutions.",
    },
    {
      id: "item-4",
      icon: <Target className="h-5 w-5 text-primary" />,
      title: "Community",
      content:
        "We aim to build a tight-knit community of IoT enthusiasts who collaborate, learn, and grow together.",
    },
  ]

  const stats = [
    { label: "Active Members", value: "300+" },
    { label: "Workshops Conducted", value: "45+" },
    { label: "Projects Built", value: "120+" },
    { label: "Industry Partners", value: "10+" },
  ]

  return (
    <section id="about" className=" bg-gradient-to-b from-background to-muted py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">About the Intel IoT Club</h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            We are a student-led initiative passionate about bridging the physical and digital worlds through Intel’s IoT technology.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="rounded-xl border bg-muted p-6 shadow-sm">
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-16">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
              <CardDescription>What drives us</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Empower students with the knowledge and tools to innovate using Intel’s cutting-edge IoT technologies. Our workshops, hackathons, and mentorship programs equip students to create impactful solutions.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Our Vision</CardTitle>
              <CardDescription>Where we’re headed</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To become the premier student-led IoT innovation hub in the region, shaping the future of connected technology through collaboration, creativity, and community.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Our Core Pillars</h3>
          <Accordion type="single" collapsible className="w-full">
            {goals.map((goal) => (
              <AccordionItem key={goal.id} value={goal.id}>
                <AccordionTrigger className="flex items-center gap-3">
                  {goal.icon}
                  {goal.title}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{goal.content}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-20 text-center">
          <h4 className="text-2xl font-semibold mb-4">Want to get involved?</h4>
          <p className="mb-6 text-muted-foreground max-w-xl mx-auto">
            Whether you're a beginner or an expert, there's a place for you at Intel IoT Club. Join our community and start building the future.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-white font-medium transition hover:bg-primary/90"
          >
            Join the Club
          </a>
        </div>
      </div>
    </section>
  )
}
