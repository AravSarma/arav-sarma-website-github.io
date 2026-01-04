"use client"

import { useState } from "react"
import type React from "react"
import { Github, Linkedin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Form submission logic can be added here
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-(--foreground) mb-4 text-balance">
          Get in Touch
        </h2>
        <p className="text-lg text-(--muted-text) mb-12">
          I'm open to internships, collaborations, and exciting projects. Let's
          connect.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div>
                <h3 className="font-bold text-(--foreground) mb-1">Email</h3>
                <p className="text-(--muted-text)">aravsarma@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div>
                <h3 className="font-bold text-(--foreground) mb-1">Phone</h3>
                <p className="text-(--muted-text)">(408) 628-8445</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div>
                <h3 className="font-bold text-(--foreground) mb-1">Location</h3>
                <p className="text-(--muted-text)">San Jose, CA</p>
              </div>
            </div>

            <div className="pt-6 border-t border-(--border-color)">
              <h3 className="font-bold text-(--foreground) mb-4">Connect</h3>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/arav-sarma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-(--card) hover:bg-(--accent-primary) hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/AravSarma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-(--card) hover:bg-(--accent-primary) hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-(--foreground) mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-(--card) border border-(--border-color) text-(--foreground) placeholder-(--muted-text) focus:outline-none focus:ring-2 focus:ring-(--accent-primary)"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-(--foreground) mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-(--card) border border-(--border-color) text-(--foreground) placeholder-(--muted-text) focus:outline-none focus:ring-2 focus:ring-(--accent-primary)"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-(--foreground) mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-(--card) border border-(--border-color) text-(--foreground) placeholder-(--muted-text) focus:outline-none focus:ring-2 focus:ring-(--accent-primary) resize-none"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
