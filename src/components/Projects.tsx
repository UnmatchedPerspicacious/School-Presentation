import { ExternalLink, Code2, Cpu, GraduationCap } from 'lucide-react'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-card/50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Section Tag */}
        <span className="text-primary text-sm tracking-widest uppercase mb-4 block font-semibold">
          פרוייקטים ועשייה מעשית
        </span>
        
        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-foreground">
          מתיאוריה למוצרים אמיתיים
        </h2>
        
        {/* The Broad Project Ecosystem Narrative */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          לאורך ארבע השנים האחרונות לא הסתפקתי רק בלמידה עיונית. תרגמתי את הידע שלי להמון פרויקטים מעשיים – החל מפיתוח מערכות Full-Stack מורכבות, דרך מחקרי דאטה ועד לבניית סימולציות ומודלים מתמטיים מעולמות הפיננסים. 
        </p>

        {/* Highlighted Tech Stack/Tools Grid */}
        <div className="flex flex-wrap justify-center gap-3 max-w-xl mx-auto mb-12">
          {['React', 'Python', 'Data Science', 'Financial Math', 'Full-Stack', 'Automation', 'Tailwind CSS', 'SQL'].map((tool, i) => (
            <span 
              key={i} 
              className="px-3.5 py-1.5 bg-background border border-border/80 rounded-lg text-sm font-medium text-muted-foreground shadow-sm"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Centralized High-Impact Call to Action Gateway */}
        <div className="p-8 md:p-10 bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl max-w-2xl mx-auto shadow-sm backdrop-blur-sm">
          <div className="flex justify-center mb-4 text-primary">
            <Code2 size={40} className="animate-pulse" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-3">
            טעימה מהעבודות הנבחרות שלי
          </h3>
          <p className="text-muted-foreground text-sm md:text-base mb-6 max-w-md mx-auto">
            כדי לראות את קוד המקור, הארכיטקטורה, הממשקים החיים והעשייה המלאה שלי בשנים האחרונות, אתם מוזמנים לבקר באתר הפורטפוליו האישי שלי.
          </p>
          
          <a 
            href="https://portfolio-eshels-projects.vercel.app/#projects" // Replace with your actual portfolio URL
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-all shadow-md shadow-primary/20 hover:scale-[1.02] transform duration-200"
          >
            <span>כניסה לפורטפוליו המלא</span>
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      {/* Subtle Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none z-0" />
    </section>
  )
}