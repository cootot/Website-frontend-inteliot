import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CircuitBoard } from "lucide-react"
import Hero3D from "@/components/hero-3d"

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-background to-muted py-20 md:py-32 mb-0 pb-0">
      <Hero3D />

      <div className="container relative z-10 flex flex-col items-center justify-center text-center">
        <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
          <img src="/logo.png" alt="IoT Club Logo" className="h-16 w-60" />
        </div>

        <h1 className="mb-48 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Empowering Innovation through Intel IoT
        </h1>

        <p className="mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Exploring the intersection of hardware, software, and connectivity
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            size="lg"
            className="group relative overflow-hidden rounded-full bg-primary px-6 py-2 transition-all duration-300 ease-out hover:bg-primary/90 hover:pl-9"
            asChild
          >
            <Link href="#contact">
              Join the Club
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-primary/20 px-6 py-2 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
            asChild
          >
            <Link href="/projects">Explore Projects</Link>
          </Button>

        </div>
      </div>
    </section>
  )
}
