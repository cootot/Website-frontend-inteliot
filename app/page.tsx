import Hero from "@/components/hero"
import Team from "@/components/team"
import Events from "@/components/events"
import Projects from "@/components/projects"
import api from "@/lib/api"

// Fetch data on the server and pass as props
export default async function Home() {
  const [membersRes, eventsRes, projectsRes] = await Promise.all([
    api.get("/members"),
    api.get("/events"),
    api.get("/projects"),
  ])
  const members = membersRes.data
  const events = eventsRes.data
  const projects = projectsRes.data

  return (
    <main className="min-h-screen">
      <Hero />
    </main>
  )
}
