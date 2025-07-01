"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import api from "@/lib/api";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

export default function Events({ initialEvents }: { initialEvents: any[] }) {
  const [events, setEvents] = useState<any[]>(initialEvents || []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!initialEvents || initialEvents.length === 0) {
      setLoading(true);
      api
        .get("/events")
        .then((res) => {
          setEvents(res.data);
          setLoading(false);
        })
        .catch(() => {
          setError("Failed to load events.");
          setLoading(false);
        });
    }
  }, [initialEvents]);

  interface Event {
    image: string;
    id: number;
    name: string;
    date: string;
    time: string;
    location: string;
    description: string;
  }

  const EventCard = ({ event }: { event: Event }) => (
    <Card className="group flex flex-col lg:flex-row overflow-hidden border border-border shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-blue-100 hover:-translate-y-1 bg-background/80 backdrop-blur-md rounded-xl">
      <div className="h-72 lg:h-96 w-full lg:w-96 xl:w-[28rem] flex-shrink-0 overflow-hidden bg-muted/30 rounded-l-xl lg:rounded-l-xl lg:rounded-r-none p-4 lg:p-6 flex items-center justify-center">
        <img
          src={event.image}
          alt={event.name + " poster"}
          className="object-contain h-full w-full max-h-full max-w-full transition-transform duration-300 group-hover:scale-105 rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-between w-full min-h-0">
        <CardHeader className="flex flex-col gap-2 items-start p-4 lg:p-6 pb-2">
          <CardTitle className="text-lg lg:text-xl xl:text-2xl font-semibold mb-1 leading-tight">
            {event.name}
          </CardTitle>
          <CardDescription className="flex items-center gap-2 text-sm lg:text-base text-muted-foreground">
            <CalendarDays className="h-4 w-4 lg:h-5 lg:w-5" /> {event.date}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm lg:text-base p-4 lg:p-6 pt-0">
          <div className="flex items-center text-muted-foreground">
            <Clock className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
            {event.time}
          </div>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
            {event.location}
          </div>
          <p className="text-foreground mt-2 leading-relaxed">
            {event.description}
          </p>
        </CardContent>
      </div>
    </Card>
  );

  return (
    <section
      id="events"
      className="py-12 lg:py-16 xl:py-20 bg-gradient-to-b from-background to-muted rounded-lg"
    >
      <div className="container px-4 lg:px-8">
        <div className="mb-12 lg:mb-16 text-center">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight">
            Club Events
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
            Join us for immersive workshops, competitions, and guest talks.
          </p>
        </div>
        {loading ? (
          <div className="text-center py-12 text-lg">Loading...</div>
        ) : error ? (
          <div className="text-center py-12 text-red-500 text-lg">{error}</div>
        ) : (
          <div className="flex flex-col gap-6 lg:gap-8">
            {events.map((event, index) => (
              <EventCard key={event.id || `event-${index}`} event={event} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
