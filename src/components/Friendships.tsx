import { Users, Heart, MessageCircle, Briefcase, ShieldCheck, Shuffle } from 'lucide-react'

const friendshipCards = [
  {
    icon: Users,
    title: 'עבודת צוות',
    description: 'בכיתה ט׳ העדפתי לעבוד לבד כדי לא להוביל, אך עם השנים למדתי להקשיב, להוביל משימות ולמנף כוח קבוצתי.',
    period: 'שנים 1-2',
    stage: 'צעדים ראשונים'
  },
  {
    icon: Heart,
    title: 'תמיכה הדדית',
    description: 'הבנתי שחלק מיציאה מחוסר הביטחון זה היכולת לשתף קשיים, לתמוך בחברים וליצור רשת ביטחון חברתית אמיתית.',
    period: 'שנים 1-2',
    stage: 'צעדים ראשונים'
  },
  {
    icon: MessageCircle,
    title: 'תקשורת והבעה עצמית',
    description: 'מילד שנמנע מלהרים את היד או להשמיע קול, פיתחתי יכולת ביטוי חדה, הקשבה פעילה ועמידה מול קהל.',
    period: 'שנים 1-2',
    stage: 'צעדים ראשונים'
  },
  {
    icon: Briefcase,
    title: 'נטוורקינג ונוכחות',
    description: 'חוסר הביטחון התחלף בנוכחות בולטת. למדתי ליזום קשרים מקצועיים חזקים, להציג פרויקטים בביטחון ולפתוח דלתות.',
    period: 'שנים 3-4',
    stage: 'בשלות וביטחון עצמי'
  },
  {
    icon: ShieldCheck,
    title: 'אחריות והובלה',
    description: 'לקחתי בעלות על הפרויקטים שלי ועל מקומי בצוות. הפכתי לעוגן שחברי הקבוצה סומכים עליו ומעריכים את דעתו.',
    period: 'שנים 3-4',
    stage: 'בשלות וביטחון עצמי'
  },
  {
    icon: Shuffle,
    title: 'גמישות ועמידות',
    description: 'למדתי לשחרר את הצורך בשליטה שנובע מחשש, להתמודד עם שינויים, לקבל ביקורת בונה ולצמוח מכל אתגר.',
    period: 'שנים 3-4',
    stage: 'בשלות וביטחון עצמי'
  },
]

export default function Friendships() {
  return (
    <section id="friendships" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-widest uppercase mb-4 block">
            התפתחות חברתית ואישית
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            קשרים שבניתי לאורך השנים
          </h2>
          
          {/* פסקת הסיפור האישי - המעבר מחוסר ביטחון לנוכחות */}
          <div className="max-w-3xl mx-auto bg-primary/5 border border-primary/10 p-6 md:p-8 rounded-2xl mb-12 text-right">
            <h3 className="text-xl font-bold mb-3 text-primary">המהפך האישי שלי: מבניית הביטחון ועד להפגנת נוכחות</h3>
            <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
              כשנכנסתי בשערי בית הספר בכיתה ט׳, עוד לא ממש ידעתי מי אני או מה המקום שלי, והגעתי עם פחות ביטחון עצמי. העדפתי להישאר בשוליים, לא לקחת סיכונים ולשמור על פרופיל נמוך. במהלך ארבע השנים האחרונות, דרך האתגרים, העבודה בקבוצות והאנשים שלצידי, עברתי תהליך של התבגרות משמעותית. למדתי להשמיע את הקול שלי, להאמין בערך שיש לי להציע, והפכתי לגבר בעל ביטחון עצמי שמפגין נוכחות, יוזם ומוביל קשרים חברתיים ומקצועיים כאחד.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {friendshipCards.map((card, index) => (
            <div
              key={index}
              className="p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group relative flex flex-col pt-14"
            >
              {/* תגיות ציר הזמן והשלב */}
              <div className="absolute top-4 right-8 flex gap-2">
                <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                  card.period === 'שנים 1-2' 
                    ? 'bg-secondary text-secondary-foreground' 
                    : 'bg-primary/10 text-primary'
                }`}>
                  {card.period}
                </span>
                <span className="text-[11px] text-muted-foreground bg-muted/50 px-2.5 py-0.5 rounded-full">
                  {card.stage}
                </span>
              </div>

              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <card.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty text-sm md:text-base">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* בלוק הציטוט המשודרג עם החתימה של מנכ"ל Tradewave */}
        <div className="mt-16 p-8 bg-secondary/50 rounded-xl border border-border text-center">
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl font-medium text-balance mb-4 italic text-foreground">
              &quot;החברויות והקשרים שצמחו פה הם לא רק חלק מהחוויה שלי בבית הספר, אלא הכלים האמיתיים שאני לוקח איתי להמשך החיים.&quot;
            </p>
            <cite className="not-italic block mt-4">
              <span className="font-bold text-primary text-lg block">אשל נגר</span>
              <span className="text-sm text-muted-foreground font-medium tracking-wide uppercase">
                CEO, Tradewave
              </span>
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  )
}