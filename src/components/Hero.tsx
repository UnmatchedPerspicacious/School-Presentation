import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <span className="text-primary text-sm tracking-widest uppercase font-semibold">
            Presentation of Learning
          </span>
        </div>
        
        {/* Title & Presenter */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-2 leading-tight text-balance">
          מצגת למידה
        </h1>
        <p className="text-xl md:text-2xl font-bold text-primary mb-8 tracking-wide">
          מציג: אשל נגר
        </p>
        
        {/* The 4-Year Journey Narrative */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed text-pretty">
          ארבע שנים, אינספור חוויות, ונקודת סיום אחת. מסע שהתחיל בכיתה ט׳ ומסתיים ממש עוד מעט, כשהוא משלב בתוכו פרויקטים מורכבים, למידה עמוקה, חברויות לחיים וכל מה שעיצב את מי שאני היום. מוזמנים לצלול איתי לסיכום התקופה המשמעותית ביותר בחיי.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => scrollToSection('friendships')}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/10 cursor-pointer"
          >
            בואו נתחיל
          </button>
          <button
            onClick={() => scrollToSection('journey')}
            className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-colors cursor-pointer"
          >
            לתהליך המלא
          </button>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('friendships')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl pointer-events-none" />
    </section>
  )
}