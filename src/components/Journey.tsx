import { ArrowUp, Sparkles, TrendingUp, Award, Rocket } from 'lucide-react'

const journeySteps = [
  {
    icon: Rocket,
    title: 'ההתחלה',
    period: 'תחילת השנה',
    description: 'התחלתי את המסע עם הרבה שאלות וקצת פחד מהלא נודע',
    highlight: false,
  },
  {
    icon: TrendingUp,
    title: 'האתגרים',
    period: 'אמצע השנה',
    description: 'נתקלתי בקשיים, למדתי להתמודד עם כישלונות ולקום מחדש',
    highlight: false,
  },
  {
    icon: Sparkles,
    title: 'רגעי ההארה',
    period: 'לאורך השנה',
    description: 'הרגעים שבהם הכל התחבר והבנתי דברים בצורה עמוקה',
    highlight: true,
  },
  {
    icon: Award,
    title: 'ההישגים',
    period: 'לקראת הסוף',
    description: 'הצלחתי להגיע ליעדים שהצבתי לעצמי ואפילו להפתיע את עצמי',
    highlight: false,
  },
]

const growthAreas = [
  { area: 'ביטחון עצמי', before: 40, after: 85 },
  { area: 'מיומנויות חברתיות', before: 55, after: 80 },
  { area: 'יכולת למידה', before: 60, after: 90 },
  { area: 'יצירתיות', before: 50, after: 75 },
]

export default function Journey() {
  return (
    <section id="journey" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-widest uppercase mb-4 block">
            התהליך שעברתי
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            המסע שלי
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            השינוי שעברתי והצמיחה שחוויתי השנה.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute right-8 md:right-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {journeySteps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute right-8 md:right-1/2 w-4 h-4 bg-primary rounded-full md:-translate-x-1/2 translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`mr-16 md:mr-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div
                    className={`p-6 rounded-xl border ${
                      step.highlight
                        ? 'bg-primary/10 border-primary/50'
                        : 'bg-card border-border'
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        step.highlight ? 'bg-primary/20' : 'bg-secondary'
                      }`}>
                        <step.icon className={`w-6 h-6 ${step.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{step.period}</p>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Growth Stats */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-center mb-12">
            הצמיחה שלי
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {growthAreas.map((item, index) => (
              <div key={index} className="p-6 bg-card rounded-xl border border-border">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-medium">{item.area}</span>
                  <div className="flex items-center gap-2 text-primary">
                    <ArrowUp size={16} />
                    <span className="font-bold">+{item.after - item.before}%</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground w-12">לפני</span>
                    <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-muted-foreground/50 rounded-full transition-all duration-1000"
                        style={{ width: `${item.before}%` }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground w-10">{item.before}%</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground w-12">אחרי</span>
                    <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-1000"
                        style={{ width: `${item.after}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-primary w-10">{item.after}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Message */}
        <div className="mt-24 text-center p-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            מה לקחתי מהמסע הזה
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            למדתי שהתהליך חשוב לא פחות מהתוצאה. כל אתגר לימד אותי משהו חדש,
            וכל כישלון היה צעד לכיוון ההצלחה. אני יוצא מהשנה הזו חזק יותר,
            חכם יותר, ומוכן לאתגרים הבאים.
          </p>
          <p className="text-lg font-medium text-primary">
            תודה שהייתם חלק מהמסע שלי 💚
          </p>
        </div>
      </div>
    </section>
  )
}
