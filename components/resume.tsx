import Link from "next/link"
import { Download } from "lucide-react"

export default function Resume() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white bg-opacity-30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-(--foreground) mb-12 text-balance">Resume</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Resume Preview */}
          <div className="md:col-span-2 bg-(--card) rounded-xl p-12 shadow-sm border border-(--border-color) min-h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl font-bold text-(--accent-primary) mb-4">Arav Sarma</div>
              <p className="text-lg text-(--muted-text) mb-8">Computer Science Student & Developer</p>
              <p className="text-sm text-(--muted-text)">Resume Preview • San Jose, CA</p>
            </div>
          </div>

          {/* Download Section */}
          <div className="flex flex-col justify-center gap-6">
            <div>
              <h3 className="text-sm font-bold text-(--accent-primary) uppercase tracking-wide mb-2">Get My Resume</h3>
              <Link href="/Arav_resume.pdf" className="btn-primary flex items-center justify-center gap-2 w-full" download>
                <Download size={20} />
                Download PDF
              </Link>
            </div>
            <p className="text-xs text-(--muted-text)">Last updated: November 2025</p>
          </div>
        </div>
      </div>
    </section>
  )
}
