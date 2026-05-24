import { BookOpen, Brain, Lightbulb, Target, BarChart3, Shield, Sparkles } from 'lucide-react'

const learningAreas = [
  {
    icon: BookOpen,
    title: 'פיתוח מקצועי וטכנולוגי',
    items: [
      'פיננסים ומתמטיקה פיננסית',
      'מדעי המחשב ותכנות (Programming)',
      'פיתוח אתרים ואפליקציות (Web Development)',
      'ניתוח נתונים (Data Science)',
      'אנגלית ברמה אקדמית'
    ],
  },
  {
    icon: Brain,
    title: 'מיומנויות וכישורי חיים',
    items: [
      'תקשורת בין-אישית והעברת מסרים',
      'עבודה בצוות ושיתוף פעולה',
      'פתרון בעיות מורכבות בזמן אמת',
      'ניהול זמן עצמי',
      'חשיבה ביקורתית וקבלת החלטות מבוססת נתונים' 
    ],
  },
  {
    icon: Lightbulb,
    title: 'גילויים ותובנות',
    items: [
      'איך להתמודד ולתפקד במצבי לחץ (Stress Management)',
      'היכולת ללמוד דברים חדשים לחלוטין לגמרי בעצמי',
      'לדעת לשחרר ולקבל תקלות וטעויות כחלק מהתהליך',
      'מה באמת מעניין אותי ואיפה התשוקה שלי נמצאת',
      'למידה היא לא קו ישר – לפעמים הצעד הכי משמעותי קדימה מגיע דווקא מתוך קושי' 
    ],
  },
  {
    icon: Target,
    title: 'אבני דרך והישגים',
    items: [
      'בניית פרויקטי קצה מאפס',
      'שליטה בשפות תכנות וכלי פיתוח מתקדמים',
      'שיפור מתמיד ביכולת הריכוז וההתמדה',
      'חיבור בין תיאוריה כלכלית לעשייה טכנולוגית בשטח',
      'מעבר מפאסיביות של תלמיד ליוזמה של מפתח עצמאי' 
    ],
  },
  {
    icon: BarChart3,
    title: 'חשיבה עסקית ואסטרטגיה',
    items: [
      'הבנת מחזור החיים של מוצר (Product Lifecycle)',
      'ניתוח שוק, זיהוי הזדמנויות והגדרת קהלי יעד',
      'תעדוף משימות קריטיות (Prioritization) וניהול משאבים',
      'הסתכלות על התמונה הגדולה – טכנולוגיה ומשתמשים',
      'קבלת החלטות תחת תנאי אי-ודאות וסיכון מחושב'
    ],
  },
  {
    icon: Shield,
    title: 'חוסן מנטלי ומשמעת עצמית',
    items: [
      'פיתוח "אורך רוח" והתמדה גם ללא תוצאות מיידיות',
      'מעבר ממוטיבציה חולפת לביצוע מבוסס משמעת יומיומית',
      'יכולת התאוששות מהירה ממשברים ותקלות קריטיות',
      'ניהול אנרגיה אישית ושמירה על פוקוס בסביבה דינמית',
      'הבנה שההצלחה של מיזם תלויה בעקביות מאחורי הקלעים'
    ],
  },
  {
    icon: Sparkles,
    title: 'יצירתיות, תחביבים והרגלים',
    items: [
      'אימוץ הרגלים של אורח חיים בריא, כושר וספורט קבוע',
      'שחמט (חשיבה טקטית, תכנון מהלכים קדימה וסבלנות)',
      'חקר וניסוי של כלי בינה מלאכותית (AI) מתקדמים ליצירה',
      'עיצוב ממשקים (UI/UX) לפרויקטים אישיים בשביל הכיף',
      'פיתוח פרויקטים קטנים (Side Projects) - כי היי, למה לא?'
    ],
  }
]

export default function Learning() {
  return (
    <section id="learning" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-widest uppercase mb-4 block font-semibold">
            התפתחות לימודית ואישית
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ארבע שנים של למידה
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed text-pretty">
            ארבע שנים של מסע שבו למדתי שאין דבר שהוא בלתי אפשרי אם יש לך את המשמעת, הכלים והאנשים הנכונים לצידך. הפכתי מרעיון למעשה, מאתגר להזדמנות, ומנער שמחפש את הכיוון ליזם ומפתח בעל חזון ברור — מישהו שמבין בדיוק איך לקחת מטרות שאפתניות, להניע אותן קדימה ויודע איך להשאיר חותם בעולם האמיתי.
          </p>
        </div>

        {/* גריד רספונסיבי עם כרטיס שביעי ממורכז */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningAreas.map((area, index) => {
            const isLastItem = index === learningAreas.length - 1;

            return (
              <div
                key={index}
                className={`p-8 bg-card rounded-xl border border-border hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col justify-between ${
                  isLastItem ? 'lg:col-start-2' : ''
                }`}
              >
                <div className="flex flex-col items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <area.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="w-full">
                    <h3 className="text-xl font-bold mb-4 text-foreground leading-tight">{area.title}</h3>
                    <ul className="space-y-3">
                      {area.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-muted-foreground text-sm md:text-base leading-snug">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* חלק הסטטיסטיקות בתחתית */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center border-t border-border/60 pt-16">
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">4 השנים</div>
            <p className="text-muted-foreground font-medium">של קפיצת מדרגה משמעותית</p>
          </div>
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">25+</div>
            <p className="text-muted-foreground font-medium">דברים שלמדתי (מקצועי, לימודי, תחומי עניין ועוד)</p>
          </div>
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">100%</div>
            <p className="text-muted-foreground font-medium">מוכנות לאתגר הבא</p>
          </div>
        </div>
      </div>
    </section>
  )
}