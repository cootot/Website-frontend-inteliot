import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  const goals = [
    {
      id: "item-1",
      title: "Hands-on Learning",
      content: "Provide practical experience with Intel IoT technologies through workshops and projects.",
    },
    {
      id: "item-2",
      title: "Industry Collaboration",
      content:
        "Partner with Intel and other tech companies to bring real-world challenges and opportunities to students.",
    },
    {
      id: "item-3",
      title: "Innovation",
      content: "Foster a culture of innovation and problem-solving using IoT technologies.",
    },
    {
      id: "item-4",
      title: "Community",
      content: "Build a supportive community of tech enthusiasts interested in IoT and connected technologies.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">About Our Club</h2>
          <p className="mt-4 text-muted-foreground">Learn about our mission and values</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
              <CardDescription>What drives us forward</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                The Intel IoT Club is dedicated to empowering students with the knowledge and skills needed to innovate
                in the Internet of Things space. We provide a platform for learning, collaboration, and creation using
                Intel's cutting-edge IoT technologies.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Vision</CardTitle>
              <CardDescription>Where we're headed</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We envision a community where students can transform innovative ideas into real-world IoT solutions. By
                bridging the gap between academic learning and industry application, we aim to prepare the next
                generation of tech leaders.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <h3 className="mb-6 text-2xl font-bold">Our Goals and Values</h3>
          <Accordion type="single" collapsible className="w-full">
            {goals.map((goal) => (
              <AccordionItem key={goal.id} value={goal.id}>
                <AccordionTrigger>{goal.title}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{goal.content}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
