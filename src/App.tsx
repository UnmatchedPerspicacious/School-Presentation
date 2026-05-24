import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Friendships from './components/Friendships'
import Learning from './components/Learning'
import Projects from './components/Projects'
import Journey from './components/Journey'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'friendships', 'learning', 'projects', 'journey']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <Friendships />
        <Learning />
        <Projects />
        <Journey />
      </main>
      <Footer />
    </div>
  )
}

export default App
