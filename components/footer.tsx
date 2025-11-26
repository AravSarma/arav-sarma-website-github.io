export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-(--accent-primary) text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm opacity-90">© {currentYear} Arav Sarma. Designed & built by Arav Sarma.</p>
      </div>
    </footer>
  )
}
