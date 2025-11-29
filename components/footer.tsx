import { Sparkles } from "lucide-react"

const links = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="bg-[#0a0a12] border-t border-white/5">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">SOMYA</span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mb-8">
            {links.map((link, index) => (
              <a key={index} href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

          {/* Copyright */}
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Somya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
