import Image from "next/image";
import Link from "next/link";

export default function HackathonPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <section className="w-full max-w-5xl mx-auto p-6 bg-card rounded-2xl shadow-md border">
        {/* Hackathon Name */}
        <div className="flex justify-center mb-4">
          <div className="px-4 py-1 rounded-lg text-5xl font-extrabold bg-background/80">
            InnovateX Hackathon 2025
          </div>
        </div>
        {/* Top: Banner + Info */}
        <div className="flex flex-col md:flex-row gap-6 mb-4">
          {/* Banner/Pic */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full h-56 md:h-72 bg-muted rounded-xl flex items-center justify-center overflow-hidden">
              <Image
                src="/hackathon.png"
                alt="Hackathon banner"
                width={960}
                height={540}
                className="object-cover w-full h-full rounded-xl"
                priority
              />
            </div>
          </div>
          {/* Date, Location, Status */}
          <div className="flex flex-col gap-3 md:w-64">
            <div className="px-4 py-2 rounded-md bg-background/80 text-base">Date: 2024-08-15</div>
            <div className="px-4 py-2 rounded-md bg-background/80 text-base">Location: Main Auditorium</div>
            <div className="px-4 py-2 rounded-md bg-background/80 text-base">Status: <span className="font-semibold">Open</span></div>
            <Link href="/hackathon/register" className="mt-2 w-full block">
              <button className="w-full py-2 px-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition">
                Register Now
              </button>
            </Link>
          </div>
        </div>
        {/* Tagline/One-liner */}
        <div className="mb-4">
          <div className="w-full px-4 py-2 rounded-md bg-background/80 text-2xl font-semibold">
            Code, Create & Contribute!
          </div>
        </div>
        {/* Description */}
        <div>
          <div className="w-full min-h-[120px] px-4 py-6 rounded-xl bg-background/80 text-lg">
            Hackathon Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. More details about the hackathon, rules, schedule, and registration info can go here.
          </div>
        </div>
      </section>
    </main>
  );
}
