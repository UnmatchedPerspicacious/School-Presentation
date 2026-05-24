import { Menu, X } from 'lucide-react'
import { useState } from 'react'

interface HeaderProps {
  activeSection: string
}

// Ordered from right-to-left for natural Hebrew reading hierarchy
const navItems = [
  { id: 'journey', label: 'התהליך שעברתי' },
  { id: 'projects', label: 'פרוייקטים' },
  { id: 'learning', label: 'לימודית' },
  { id: 'friendships', label: 'חברתית' },
]

export default function Header({ activeSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold text-primary hover:text-primary/80 transition-colors cursor-pointer"
          >
            POL
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm transition-colors hover:text-primary cursor-pointer ${
                    activeSection === item.id 
                      ? 'text-primary font-medium' 
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-foreground cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 pb-4 space-y-4 border-t border-border pt-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-right py-2 transition-colors hover:text-primary cursor-pointer ${
                    activeSection === item.id 
                      ? 'text-primary font-medium' 
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}