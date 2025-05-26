"use client"
import React, { useState } from "react";
import api from "@/lib/api";

export default function AdminDashboard() {
  const [selected, setSelected] = useState<"event" | "project" | "team">("event");
  const [form, setForm] = useState<{
    image: string;
    name: string;
    date: string;
    time: string;
    location: string;
    description: string;
  }>({
    image: "",
    name: "",
    date: "",
    time: "",
    location: "",
    description: "",
  });

  const [projectForm, setProjectForm] = useState<{
    title: string;
    description: string;
    tags: string[];
    github: string;
    demo: string;
  }>({
    title: "",
    description: "",
    tags: [],
    github: "",
    demo: "",
  });

  const [teamForm, setTeamForm] = useState({
    name: "",
    role: "",
    bio: "",
    image: "",
    github: "",
    linkedin: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleProjectChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.name === "tags") {
      setProjectForm({ ...projectForm, tags: e.target.value.split(",").map(tag => tag.trim()).filter(tag => tag) });
    } else {
      setProjectForm({ ...projectForm, [e.target.name]: e.target.value });
    }
  };

  const handleTeamChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTeamForm({ ...teamForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/events", form);
      alert("Event submitted!");
      setForm({ image: "", name: "", date: "", time: "", location: "", description: "" });
    } catch (err: any) {
      alert("Failed to submit event");
    }
  };

  const handleProjectSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/projects", { ...projectForm, tags: projectForm.tags });
      alert("Project submitted!");
      setProjectForm({ title: "", description: "", tags: [], github: "", demo: "" });
    } catch (err: any) {
      alert("Failed to submit project");
    }
  };

  const handleTeamSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/members", teamForm);
      alert("Team member submitted!");
      setTeamForm({ name: "", role: "", bio: "", image: "", github: "", linkedin: "", email: "" });
    } catch (err: any) {
      alert("Failed to submit team member");
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <div className="flex justify-center gap-4 mb-8">
        <button
          className={`px-4 py-2 rounded font-semibold transition-colors duration-200 ${selected === "event" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
          onClick={() => setSelected("event")}
        >
          Add Event
        </button>
        <button
          className={`px-4 py-2 rounded font-semibold transition-colors duration-200 ${selected === "project" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
          onClick={() => setSelected("project")}
        >
          Add Project
        </button>
        <button
          className={`px-4 py-2 rounded font-semibold transition-colors duration-200 ${selected === "team" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
          onClick={() => setSelected("team")}
        >
          Add Team Member
        </button>
      </div>

      {selected === "event" && (
        <section className="w-full max-w-xl mx-auto p-6 bg-card rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Add Upcoming Events</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium" htmlFor="image">Image URL</label>
              <input
                type="text"
                id="image"
                name="image"
                value={form.image}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md bg-background text-foreground"
                placeholder="/placeholder.jpg"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="name">Event Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md bg-background text-foreground"
                required
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block mb-1 font-medium" htmlFor="date">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md bg-background text-foreground"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block mb-1 font-medium" htmlFor="time">Time</label>
                <input
                  type="text"
                  id="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md bg-background text-foreground"
                  placeholder="2:00 PM - 5:00 PM"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                value={form.location}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md bg-background text-foreground"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={form.description}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md bg-background text-foreground"
                rows={3}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition"
            >
              Add Event
            </button>
          </form>
        </section>
      )}

      {selected === "project" && (
        <section className="w-full max-w-xl mx-auto p-6 bg-card rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Add Project</h2>
          <form onSubmit={handleProjectSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium" htmlFor="projectTitle">Title</label>
              <input
                type="text"
                id="projectTitle"
                name="title"
                value={projectForm.title}
                onChange={handleProjectChange}
                className="w-full px-3 py-2 border rounded-md bg-background text-foreground"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="projectDescription">Description</label>
              <textarea
                id="projectDescription"
                name="description"
                value={projectForm.description}
                onChange={handleProjectChange}
                className="w-full px-3 py-2 border rounded-md bg-background text-foreground"
                rows={3}
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="projectTags">Tags (comma separated)</label>
              <input
                type="text"
                id="projectTags"
                name="tags"
                value={projectForm.tags.join(", ")}
                onChange={handleProjectChange}
                className="w-full px-3 py-2 border rounded-md bg-background text-foreground"
                placeholder="Intel Edison, Node.js, MQTT"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="projectGithub">GitHub Link</label>
              <input
                type="url"
                id="projectGithub"
                name="github"
                value={projectForm.github}
                onChange={handleProjectChange}
                className="w-full px-3 py-2 border rounded-md bg-background text-foreground"
                placeholder="#"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="projectDemo">Demo Link</label>
              <input
                type="url"
                id="projectDemo"
                name="demo"
                value={projectForm.demo}
                onChange={handleProjectChange}
                className="w-full px-3 py-2 border rounded-md bg-background text-foreground"
                placeholder="#"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition"
            >
              Add Project
            </button>
          </form>
        </section>
      )}

      {selected === "team" && (
        <section className="w-full max-w-xl mx-auto p-6 bg-card rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Add Team Member</h2>
          <form onSubmit={handleTeamSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium" htmlFor="teamName">Name</label>
              <input
                type="text"
                id="teamName"
                name="name"
                value={teamForm.name}
                onChange={handleTeamChange}
                className="w-full px-3 py-2 border rounded-md bg-background text-foreground"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="teamRole">Role</label>
              <input
                type="text"
                id="teamRole"
                name="role"
                value={teamForm.role}
                onChange={handleTeamChange}
                className="w-full px-3 py-2 border rounded-md bg-background text-foreground"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="teamBio">Bio</label>
              <textarea
                id="teamBio"
                name="bio"
                value={teamForm.bio}
                onChange={handleTeamChange}
                className="w-full px-3 py-2 border rounded-md bg-background text-foreground"
                rows={3}
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="teamImage">Image URL</label>
              <input
                type="text"
                id="teamImage"
                name="image"
                value={teamForm.image}
                onChange={handleTeamChange}
                className="w-full px-3 py-2 border rounded-md bg-background text-foreground"
                placeholder="/placeholder.svg?height=200&width=200"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="teamGithub">GitHub Link</label>
              <input
                type="url"
                id="teamGithub"
                name="github"
                value={teamForm.github}
                onChange={handleTeamChange}
                className="w-full px-3 py-2 border rounded-md bg-background text-foreground"
                placeholder="#"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="teamLinkedin">LinkedIn Link</label>
              <input
                type="url"
                id="teamLinkedin"
                name="linkedin"
                value={teamForm.linkedin}
                onChange={handleTeamChange}
                className="w-full px-3 py-2 border rounded-md bg-background text-foreground"
                placeholder="#"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="teamEmail">Email</label>
              <input
                type="email"
                id="teamEmail"
                name="email"
                value={teamForm.email}
                onChange={handleTeamChange}
                className="w-full px-3 py-2 border rounded-md bg-background text-foreground"
                placeholder="alex@example.com"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition"
            >
              Add Team Member
            </button>
          </form>
        </section>
      )}
    </div>
  );
}
