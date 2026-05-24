import { Users, Heart, MessageCircle } from 'lucide-react'

const friendshipCards = [
  {
    icon: Users,
    title: 'עבודת צוות',
    description: 'למדתי לעבוד יחד עם אחרים, להקשיב לדעות שונות ולבנות משהו גדול יותר ממה שכל אחד יכול לבד.',
  },
  {
    icon: Heart,
    title: 'תמיכה הדדית',
    description: 'גיליתי כמה חשוב לתמוך בחברים ולקבל תמיכה בחזרה, במיוחד ברגעים מאתגרים.',
  },
  {
    icon: MessageCircle,
    title: 'תקשורת',
    description: 'שיפרתי את יכולות התקשורת שלי, הן בהבעת עצמי והן בהקשבה לאחרים.',
  },
]

export default function Friendships() {
  return (
    <section id="friendships" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-widest uppercase mb-4 block">
            חברתית
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            קשרים שבניתי
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            הקשרים שבניתי והמיומנויות החברתיות שפיתחתי לאורך המסע הזה.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {friendshipCards.map((card, index) => (
            <div
              key={index}
              className="p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <card.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-secondary/50 rounded-xl border border-border">
          <blockquote className="text-center">
            <p className="text-xl md:text-2xl font-medium text-balance">
              &quot;החברויות שיצרתי השנה הן הדבר הכי יקר שלקחתי איתי&quot;
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
