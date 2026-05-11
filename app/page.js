import {
  GarageBandMark,
  JavaWordMark,
  UnityIcon,
  VSCodeIcon,
} from "@/components/SkillIcons";
import {
  CollagePhotoA,
  CollagePhotoC,
} from "@/components/collage/CollageStickers";

const ABOUT_BLOCKS = [
  {
    lines: [
      "はじめまして ☁️",
      "「気になったらまずやってみる！」を大切にしながら、楽しくものづくりをしています。",
    ],
  },
  {
    lines: [
      "新しいことを学ぶのが好きで、デザインやアイデアを考えたり、自分の「好き」を形にする時間が好きです。",
      "まだまだ成長途中ですが、ひとつひとつの経験を大切にしながら、自分らしくスキルを磨いています ✨",
    ],
  },
  {
    lines: [
      "見てくれた人に「なんか好きかも」と思ってもらえるような、やさしくて心地いい制作を目指しています 🫧",
    ],
  },
];

const SKILLS = [
  { id: "java", label: "Java", render: () => <JavaWordMark /> },
  {
    id: "vscode",
    label: "Visual Studio Code",
    render: () => (
      <div
        className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/90 shadow-lg ring-2 ring-skyaccent/40"
        aria-hidden
      >
        <VSCodeIcon className="h-9 w-9" />
      </div>
    ),
  },
  {
    id: "unity",
    label: "Unity",
    render: () => (
      <div
        className="flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-900 text-white shadow-lg ring-2 ring-chartreuse/50"
        aria-hidden
      >
        <UnityIcon className="h-8 w-8" />
      </div>
    ),
  },
  {
    id: "garageband",
    label: "GarageBand",
    render: () => <GarageBandMark />,
  },
];

const WORKS = [
  {
    title: "『Original Track』",
    description: "GarageBandで制作したオリジナル楽曲です。",
    audioSrc: "/ループ作曲.mp3",
  },
  {
    title: "『YOASOBI 怪物 耳コピ』",
    description:
      "GarageBandで制作した、YOASOBIの怪物という曲を耳コピしたものです。",
    audioSrc: "/怪物耳コピ.mp3",
  },
];

export default function Home() {
  return (
    <>
      {/* --- 1. Hero セクション --- */}
      <section id="hero" className="relative overflow-visible px-4 py-10 md:px-8 lg:py-14">
        <div className="glass-panel collage-tilt-hero mx-auto max-w-5xl border-t-4 border-chartreuse px-8 py-10 shadow-lg shadow-chartreuse/10 md:flex md:items-center md:justify-between md:gap-10 md:px-12 md:py-16">
          <div className="flex-1 text-center md:text-left">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-skyaccent drop-shadow-sm">
              Portfolio
            </p>
            <h1 className="mb-6 bg-gradient-to-r from-hotpink via-chartreuse to-skyaccent bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
              Satsuki Dohi
            </h1>
            <div className="accent-divider-sky mb-8 md:mx-0 mx-auto" />
            <div className="space-y-2 text-lg font-medium text-neutral-800 sm:text-xl">
              <p className="transition-colors hover:text-hotpink">津田塾大学</p>
              <p className="transition-colors hover:text-hotpink">学芸学部</p>
              <p className="transition-colors hover:text-hotpink">情報科学科</p>
            </div>
          </div>
          <div className="mt-10 flex flex-1 justify-center md:mt-0">
            <div className="relative group">
              {/* === 写真1枚だけ！背景のぼんやりした光 === */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-hotpink/20 to-skyaccent/20 blur-xl group-hover:blur-2xl transition-all"></div>
              
              <img 
                src="/kawaiigirl.JPG" 
                alt="Satsuki Dohi" 
                className="relative z-10 h-64 w-64 rounded-full border-4 border-white object-cover shadow-2xl ring-4 ring-hotpink/30"
              />
              
              {/* === 🎀 Hero用ペタペタシール 🎀 === */}
              <div className="absolute -top-4 -left-4 z-20 flex h-10 w-10 cursor-default items-center justify-center rounded-full bg-skyaccent text-xl shadow-lg -rotate-12 border-2 border-white transition-transform hover:scale-125 hover:rotate-0">✨</div>
              <div className="absolute top-6 right-[min(10%,2rem)] z-20 flex h-10 w-10 cursor-default items-center justify-center rounded-full bg-hotpink text-xl shadow-lg rotate-12 border-2 border-white transition-transform hover:scale-125 hover:rotate-0">⭐</div>
              <div className="absolute -left-6 top-1/2 z-20 flex h-10 w-10 cursor-default items-center justify-center rounded-full bg-chartreuse text-xl shadow-lg -rotate-[20deg] border-2 border-white transition-transform hover:scale-125 hover:rotate-0">☁️</div>
              <div className="absolute bottom-6 -left-6 z-20 flex h-12 w-12 cursor-default items-center justify-center rounded-full bg-hotpink text-xl shadow-lg -rotate-[15deg] border-2 border-white transition-transform hover:scale-125 hover:rotate-0">💖</div>
              <div className="absolute bottom-2 left-6 z-20 flex h-9 w-9 cursor-default items-center justify-center rounded-full bg-skyaccent text-lg shadow-lg rotate-[10deg] border-2 border-white transition-transform hover:scale-125 hover:rotate-0">💙</div>
              <div className="absolute top-1/2 -right-8 z-20 flex h-9 w-9 cursor-default items-center justify-center rounded-full bg-chartreuse text-lg shadow-lg -rotate-[10deg] border-2 border-white transition-transform hover:scale-125 hover:rotate-0">💛</div>
              <div className="absolute -top-2 right-12 z-20 cursor-default rounded-full bg-white px-3 py-1 text-[11px] font-black tracking-wider text-skyaccent shadow-lg rotate-[-8deg] border-2 border-skyaccent/20 transition-transform hover:scale-125">It's Me!</div>
              <div className="absolute bottom-0 -right-2 z-20 cursor-default rounded-lg bg-chartreuse px-3 py-1 text-[10px] font-bold text-white shadow-md rotate-12 transition-transform hover:scale-125">KAWAII!</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. About Me セクション --- */}
      <section id="about-me" aria-labelledby="about-me-heading" className="relative overflow-visible px-4 py-8 md:px-8 lg:py-12">
        <div className="relative mx-auto max-w-6xl">
          <div className="glass-panel collage-tilt-about relative overflow-visible px-8 py-12 md:min-h-[min(520px,70vh)] md:px-12 md:py-14 md:pr-[min(380px,38vw)]">
            
            {/* === 🎀 About Me用シール 🎀 === */}
            <div className="absolute -top-5 right-[20%] z-20 flex h-10 w-10 cursor-default items-center justify-center rounded-full bg-white text-xl shadow-lg rotate-12 border-2 border-skyaccent/30 transition-transform hover:scale-125">💡</div>
            <div className="absolute bottom-10 left-[-1rem] z-20 flex h-12 w-12 cursor-default items-center justify-center rounded-full bg-hotpink text-xl shadow-lg -rotate-[15deg] border-2 border-white transition-transform hover:scale-125">🎀</div>
            <div className="absolute top-1/2 left-[-1.5rem] z-20 cursor-default rounded-full bg-white px-3 py-1 text-[11px] font-black tracking-wider text-chartreuse shadow-lg rotate-[-10deg] border-2 border-chartreuse/30 transition-transform hover:scale-125">HELLO!</div>

            <div className="relative z-10 mx-auto max-w-2xl text-center md:mx-0 md:text-left">
              <h2 id="about-me-heading" className="mb-3 text-3xl font-bold tracking-tight text-hotpink">
                About Me
              </h2>
              <div className="accent-divider-sky mx-auto mb-10 md:mx-0" />
              <div className="space-y-8 text-left text-[15px] leading-relaxed text-neutral-800 sm:text-base">
                {ABOUT_BLOCKS.map((block, i) => (
                    <div key={i} className="space-y-3">
                        {block.lines.map((line, j) => (
                            <p key={j}>{line}</p>
                        ))}
                    </div>
                ))}
              </div>
            </div>
            <CollagePhotoA />
          </div>
        </div>
      </section>

      {/* --- 3. Skills セクション --- */}
      <section id="skills" aria-labelledby="skills-heading" className="relative overflow-visible px-4 py-8 md:px-8 lg:py-12">
        <div className="glass-panel-strong collage-tilt-skills relative mx-auto max-w-5xl overflow-visible px-8 pb-12 pt-16 md:px-12 md:pb-14 md:pt-12">
          
          {/* === 🎀 Skills用シール 🎀 === */}
          <div className="absolute -top-4 left-10 z-20 flex h-11 w-11 cursor-default items-center justify-center rounded-full bg-chartreuse text-xl shadow-lg -rotate-12 border-2 border-white transition-transform hover:scale-125">🚀</div>
          <div className="absolute -top-3 right-20 z-20 cursor-default rounded-full bg-white px-3 py-1 text-[11px] font-black tracking-wider text-hotpink shadow-lg rotate-[10deg] border-2 border-hotpink/20 transition-transform hover:scale-125">LEVEL UP!</div>
          <div className="absolute bottom-[-1rem] right-10 z-20 flex h-10 w-10 cursor-default items-center justify-center rounded-full bg-skyaccent text-xl shadow-lg rotate-[20deg] border-2 border-white transition-transform hover:scale-125">💻</div>

          <h2 id="skills-heading" className="relative z-10 mb-3 text-center text-3xl font-bold tracking-tight text-hotpink">
            Skills
          </h2>
          <div className="accent-divider-sky mx-auto mb-12" />
          <ul className="relative z-10 flex flex-wrap items-start justify-center gap-x-10 gap-y-12 sm:gap-x-14">
            {SKILLS.map((item) => (
              <li key={item.id} className="flex w-[min(100%,11rem)] flex-col items-center gap-4 text-center">
                {item.render()}
                <span className="text-sm font-semibold text-neutral-800 transition-colors hover:text-hotpink">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* --- 4. Works セクション --- */}
      <section id="works" aria-labelledby="works-heading" className="relative overflow-visible px-4 py-8 md:px-8 lg:py-12">
        <div className="glass-panel collage-tilt-works relative mx-auto max-w-5xl overflow-visible px-8 pb-14 pt-12 md:px-12 md:pb-16 md:pl-[min(13rem,22vw)]">
          <CollagePhotoC />
          
          {/* === 🎀 Works用シール 🎀 === */}
          <div className="absolute top-10 left-[-1.5rem] z-20 flex h-10 w-10 cursor-default items-center justify-center rounded-full bg-hotpink text-xl shadow-lg -rotate-12 border-2 border-white transition-transform hover:scale-125">🎧</div>
          <div className="absolute -bottom-4 right-1/4 z-20 flex h-11 w-11 cursor-default items-center justify-center rounded-full bg-chartreuse text-xl shadow-lg rotate-12 border-2 border-white transition-transform hover:scale-125">🎵</div>

          <h2 id="works-heading" className="relative z-10 mb-3 text-center text-3xl font-bold tracking-tight text-hotpink">
            Works
          </h2>
          <div className="accent-divider-sky mx-auto mb-12" />
          <ul className="relative z-10 mx-auto grid max-w-4xl gap-8 sm:grid-cols-2">         
            {WORKS.map((work) => (
              <li key={work.audioSrc}>
                <article className="glass-panel-strong flex h-full flex-col rounded-[1.75rem] border-2 border-hotpink/25 bg-white/50 p-6 shadow-lg shadow-hotpink/15 backdrop-blur-xl transition-all hover:border-hotpink/45 hover:shadow-hotpink/25">
                  <h3 className="text-lg font-bold leading-snug text-hotpink">
                    {work.title}
                  </h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-skyaccent">
                    GarageBand
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-700">
                    {work.description}
                  </p>
                  <div className="mt-6 border-t-2 border-chartreuse/50 pt-5">
                    <audio
                      controls
                      className="work-audio w-full rounded-lg border border-hotpink/35 bg-white/60"
                      preload="metadata"
                      aria-label={`${work.title} を再生`}
                    >
                      <source src={work.audioSrc} type="audio/mpeg" />
                    </audio>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* --- 5. イラスト（I like...）セクション --- */}
      <section id="illustrations" className="relative overflow-visible px-4 py-8 md:px-8 lg:py-12">
        <div className="glass-panel collage-tilt-about relative mx-auto max-w-5xl px-8 py-14 md:px-12">
          
          {/* === 🎀 ギャラリー用シール 🎀 === */}
          <div className="absolute -top-6 left-1/2 z-20 flex h-12 w-12 -translate-x-1/2 cursor-default items-center justify-center rounded-full bg-skyaccent text-2xl shadow-lg rotate-12 border-2 border-white transition-transform hover:scale-125">🎨</div>
          <div className="absolute bottom-10 right-[-1rem] z-20 cursor-default rounded-full bg-white px-3 py-1 text-[11px] font-black tracking-wider text-skyaccent shadow-lg rotate-[-15deg] border-2 border-skyaccent/30 transition-transform hover:scale-125">CUTE!</div>

          <h2 className="mb-3 text-center text-3xl font-bold tracking-tight text-hotpink">
            I Like Drawing
          </h2>
          <div className="accent-divider-sky mx-auto mb-6" />
          <p className="mb-12 text-center text-neutral-700">
            絵を描くことが大好きです！これまで描いたお気に入りのイラストたち 🫧
          </p>

          {/* 画像3枚を並べるグリッド */}
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="group relative aspect-square overflow-hidden rounded-2xl border-4 border-white shadow-lg transition-all hover:scale-105 hover:rotate-2 hover:shadow-hotpink/30">
              <img src="/Boom.JPG" alt="Illustration Boom" className="h-full w-full object-cover" />
            </div>
            <div className="group relative aspect-square overflow-hidden rounded-2xl border-4 border-white shadow-lg transition-all hover:scale-105 hover:-rotate-2 hover:shadow-hotpink/30">
              <img src="/Lkawaii.PNG" alt="Illustration Lkawaii" className="h-full w-full object-cover" />
            </div>
            <div className="group relative aspect-square overflow-hidden rounded-2xl border-4 border-white shadow-lg transition-all hover:scale-105 hover:rotate-2 hover:shadow-hotpink/30">
              <img src="/swimkawaii.JPG" alt="Illustration Swim" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* --- 6. Contact セクション --- */}
      <section id="contact" className="relative overflow-visible px-4 py-10 pb-24 md:px-8 lg:py-14">
        <div className="glass-panel collage-tilt-contact mx-auto max-w-xl px-8 py-12 text-center md:px-12">
          
          {/* === 🎀 連絡先用シール 🎀 === */}
          <div className="absolute -top-4 right-10 z-20 flex h-10 w-10 cursor-default items-center justify-center rounded-full bg-hotpink text-xl shadow-lg rotate-12 border-2 border-white transition-transform hover:scale-125">✉️</div>

          <h2 className="mb-3 text-3xl font-bold text-hotpink">お問い合わせ</h2>
          <div className="accent-divider-sky mx-auto mb-8" />
          <p className="leading-relaxed text-neutral-700">
            ご連絡は SNS またはメールにて（準備中）。
          </p>
        </div>
      </section>
    </>
  );
}