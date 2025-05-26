"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, MapPin, Clock } from "lucide-react"

export default function Events() {
  const upcomingEvents = [
    {
      id: 1,
      image: "/placeholder.jpg",
      name: "IoT Workshop Series",
      date: "June 15, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Engineering Building, Room 302",
      description: "Hands-on workshop on getting started with Intel IoT Development Kit.",
    },
    {
      id: 2,
      image: "/placeholder.jpg",
      name: "Hackathon: Smart Campus Solutions",
      date: "July 10-12, 2024",
      time: "48-hour event",
      location: "Innovation Center",
      description: "Build innovative IoT solutions to improve campus life and sustainability.",
    },
    {
      id: 3,
      image: "/placeholder.jpg",
      name: "Guest Lecture: Future of IoT",
      date: "August 5, 2024",
      time: "4:00 PM - 6:00 PM",
      location: "Main Auditorium",
      description: "Industry experts from Intel discussing the future trends in IoT technology.",
    },
  ]

  const pastEvents = [
    {
      id: 4,
      image: "/placeholder.jpg",
      name: "IoT Project Showcase",
      date: "April 20, 2024",
      time: "1:00 PM - 4:00 PM",
      location: "Student Center",
      description: "Members presented their semester-long IoT projects to the campus community.",
    },
    {
      id: 5,
      image: "/placeholder.jpg",
      name: "Workshop: IoT Security Fundamentals",
      date: "March 15, 2024",
      time: "3:00 PM - 5:00 PM",
      location: "Engineering Building, Room 201",
      description: "Learning about security challenges and best practices in IoT implementations.",
    },
    {
      id: 6,
      image: "/placeholder.jpg",
      name: "Intel IoT Roadshow",
      date: "February 10, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Innovation Center",
      description: "Intel representatives showcased the latest IoT technologies and development tools.",
    },
  ]

  interface Event {
    image: string
    id: number
    name: string
    date: string
    time: string
    location: string
    description: string
  }

  const EventCard = ({ event }: { event: Event }) => (
    <Card className="mb-4">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="h-36 w-36 flex-shrink-0 overflow-hidden rounded-md bg-muted flex items-center justify-center">
            <img
              src={event.image || "/placeholder.jpg"}
              alt={event.name + " poster"}
              className="object-cover h-full w-full"
            />
          </div>
          <div>
            <CardTitle>{event.name}</CardTitle>
            <CardDescription className="flex items-center gap-1">
              <CalendarDays className="h-4 w-4" /> {event.date}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="mr-2 h-4 w-4" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-2 h-4 w-4" />
            <span>{event.location}</span>
          </div>
          <p className="mt-2">{event.description}</p>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <section id="events" className="py-20 bg-background">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Events</h2>
          <p className="mt-4 text-muted-foreground">Join us for workshops, hackathons, and more</p>
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="mt-6">
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past" className="mt-6">
            <div className="space-y-4">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
