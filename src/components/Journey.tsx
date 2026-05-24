'use client'

import { ArrowUp, Sparkles, TrendingUp, Award, Rocket } from 'lucide-react'

const journeySteps = [
  {
    icon: Rocket,
    title: 'הנחת היסודות',
    period: 'כיתה ט׳',
    description: 'שלב זיהוי התשוקה הטכנולוגית והעסקית. צעדים ראשונים בעולם התכנות והבנת חוקי המשחק.',
    highlight: false,
  },
  {
    icon: TrendingUp,
    title: 'בניית הזהות',
    period: 'כיתה י׳',
    description: 'תקופה של למידה אינטנסיבית, ניתוח השטח וגיבוש הכיוון המקצועי. פיתוח מיומנויות קריטיות וניהול זמן.',
    highlight: false,
  },
  {
    icon: Sparkles,
    title: 'פריצת הדרך המעשית',
    period: 'כיתה י״א',
    description: 'הנקודה שבה הידע התיאורטי פגש את הפרקטיקה. מעבר מפיתוח תיאורטי להרצת פרויקט דגל מורכב בסביבה אמיתית.',
    highlight: true,
  },
  {
    icon: Award,
    title: 'בשלות ותוצאות',
    period: 'כיתה י״ב',
    description: 'חיבור כל הקצוות, ניהול עומסים חכם והגעה ליעדים השאפתניים שהצבתי. אני יוצא מהמערכת עם כלים עובדים וחזון ברור להמשך.',
    highlight: false,
  },
]

const growthAreas = [
  { area: 'ביטחון עצמי ונוכחות', before: 40, after: 90 },
  { area: 'ניהול אסטרטגי ויזמות', before: 30, after: 95 },
  { area: 'יכולת למידה עצמאית', before: 60, after: 100 },
  { area: 'חוסן מנטלי (Grit)', before: 50, after: 85 },
]

export default function Journey() {
  return (
    <section id="journey" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-widest uppercase mb-4 block font-semibold">
            רטרוספקטיבה של ארבע שנים
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ציר הזמן והתפתחות המסע
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            ניתוח התהליך שעברתי לאורך התיכון — המעבר מהססנות לביצוע, והצמיחה המקצועית שעיצבה את מי שאני היום.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute right-8 md:right-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {journeySteps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={index}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute right-8 md:right-1/2 w-4 h-4 bg-primary rounded-full md:-translate-x-1/2 translate-x-1/2 z-10 border-4 border-background" />

                  {/* Content Card */}
                  <div className={`mr-16 md:mr-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div
                      className={`p-6 rounded-xl border transition-all duration-300 hover:border-primary/40 ${
                        step.highlight
                          ? 'bg-primary/5 border-primary/30 shadow-lg shadow-primary/5'
                          : 'bg-card border-border'
                      }`}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          step.highlight ? 'bg-primary/20' : 'bg-secondary/50'
                        }`}>
                          <Icon className={`w-6 h-6 ${step.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                        </div>
                        <h3 className="font-bold text-xl">{step.title}</h3>
                      </div>
                      <p className="text-xs font-bold text-primary/70 uppercase tracking-wider mb-2">{step.period}</p>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              )
            })}
          </div>
        </div>

        {/* Growth Stats Section */}
        <div className="mt-24">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            מדדי צמיחה יחסיים
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {growthAreas.map((item, index) => {
              const relativeGrowth = Math.round(((item.after - item.before) / item.before) * 100);
              
              return (
                <div key={index} className="p-8 bg-card rounded-xl border border-border hover:border-primary/20 transition-colors">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-bold text-lg">{item.area}</span>
                    <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full">
                      <ArrowUp size={16} strokeWidth={3} />
                      <span className="font-black">%{relativeGrowth} צמיחה</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-muted-foreground mb-1 font-medium">
                        <span>נקודת פתיחה</span>
                        <span>{item.before}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-muted-foreground/40 rounded-full"
                          style={{ width: `${item.before}%` }}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-primary mb-1 font-bold">
                        <span>מצב נוכחי</span>
                        <span>{item.after}%</span>
                      </div>
                      <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${item.after}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Final Message */}
        <div className="mt-24 text-center p-12 bg-gradient-to-br from-primary/15 to-transparent rounded-2xl border border-primary/20">
          <h3 className="text-2xl md:text-4xl font-black mb-6 uppercase tracking-tight">
            בשורה התחתונה
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-8 text-xl leading-relaxed">
            המסע הזה הוכיח לי שהתמדה, משמעת עצמית וסביבה תומכת הם נוסחה מנצחת. 
            אני מסיים את ארבע השנים הללו לא רק עם ידע מקצועי, אלא עם סט כלים שמאפשר לי 
            לפרק כל בעיה מורכבת ולהפוך אותה להזדמנות.
          </p>
          <div className="space-y-2">
            <p className="text-xl font-bold text-foreground">
              מוכן לפרק הבא.
            </p>
            <p className="text-lg font-medium text-primary">
              אני שמח שהייתם חלק מהמסע שלי 💚
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}