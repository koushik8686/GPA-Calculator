import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-800/30 bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-center gap-4 text-gray-400">
          <p className="text-sm sm:text-base font-medium">
            Made by{" "}
            <span className="text-purple-400 font-semibold hover:text-purple-300 transition-colors">Pinnu Koushik</span>
          </p>
          <div className="flex items-center gap-8">
            <a href="mailto:pinnukoushikp@gmail.com" className="group relative" aria-label="Email">
              <div className="absolute -inset-2 rounded-full bg-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Mail className="h-5 w-5 transform transition-all duration-200 group-hover:scale-110 group-hover:text-purple-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/koushik-pinnu-ba0873297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label="LinkedIn"
            >
              <div className="absolute -inset-2 rounded-full bg-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Linkedin className="h-5 w-5 transform transition-all duration-200 group-hover:scale-110 group-hover:text-purple-400" />
            </a>
            <a
              href="https://github.com/koushik8686"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label="GitHub"
            >
              <div className="absolute -inset-2 rounded-full bg-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Github className="h-5 w-5 transform transition-all duration-200 group-hover:scale-110 group-hover:text-purple-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

