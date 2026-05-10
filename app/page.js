import {
  GarageBandMark,
  JavaWordMark,
  UnityIcon,
  VSCodeIcon,
} from "@/components/SkillIcons";
import {
  CollagePhotoA,
  CollagePhotoB,
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
      <section id="hero" className="relative overflow-visible px-4 py-10 md:px-8 lg:py-14">
        <div className="glass-panel collage-tilt-hero mx-auto max-w-4xl border-t-4 border-chartreuse px-8 py-14 shadow-lg shadow-chartreuse/10 md:px-12 md:py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-skyaccent drop-shadow-sm">
            Portfolio
          </p>
          <h1 className="mb-8 bg-gradient-to-r from-hotpink via-chartreuse to-skyaccent bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            Satsuki Dohi
          </h1>
          <div className="accent-divider-sky mx-auto mb-8" />
          <div className="mx-auto max-w-xl space-y-2 text-lg font-medium text-neutral-800 sm:text-xl">
            <p className="transition-colors hover:text-hotpink">津田塾大学</p>
            <p className="transition-colors hover:text-hotpink">学芸学部</p>
            <p className="transition-colors hover:text-hotpink">情報科学科</p>
          </div>
        </div>
      </section>

      <section
        id="about-me"
        aria-labelledby="about-me-heading"
        className="relative overflow-visible px-4 py-8 md:px-8 lg:py-12"
      >
        <div className="relative mx-auto max-w-6xl">
          <div className="glass-panel collage-tilt-about relative overflow-visible px-8 py-12 md:min-h-[min(520px,70vh)] md:px-12 md:py-14 md:pr-[min(380px,38vw)]">
            <div className="relative z-10 mx-auto max-w-2xl text-center md:mx-0 md:text-left">
              <h2
                id="about-me-heading"
                className="mb-3 text-3xl font-bold tracking-tight text-hotpink"
              >
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

      <section
        id="skills"
        aria-labelledby="skills-heading"
        className="relative overflow-visible px-4 py-8 md:px-8 lg:py-12"
      >
        <div className="glass-panel-strong collage-tilt-skills relative mx-auto max-w-5xl overflow-visible px-8 pb-12 pt-16 md:px-12 md:pb-14 md:pt-12 md:pl-[min(9rem,14vw)]">
          <CollagePhotoB />
          <h2
            id="skills-heading"
            className="relative z-10 mb-3 text-center text-3xl font-bold tracking-tight text-hotpink"
          >
            Skills
          </h2>
          <div className="accent-divider-sky mx-auto mb-12" />
          <ul className="relative z-10 flex flex-wrap items-start justify-center gap-x-10 gap-y-12 sm:gap-x-14">
            {SKILLS.map((item) => (
              <li
                key={item.id}
                className="flex w-[min(100%,11rem)] flex-col items-center gap-4 text-center"
              >
                {item.render()}
                <span className="text-sm font-semibold text-neutral-800 transition-colors hover:text-hotpink">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="works"
        aria-labelledby="works-heading"
        className="relative overflow-visible px-4 py-8 md:px-8 lg:py-12"
      >
        <div className="glass-panel collage-tilt-works relative mx-auto max-w-5xl overflow-visible px-8 pb-14 pt-12 md:px-12 md:pb-16 md:pl-[min(13rem,22vw)]">
          <CollagePhotoC />
          <h2
            id="works-heading"
            className="relative z-10 mb-3 text-center text-3xl font-bold tracking-tight text-hotpink"
          >
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

      <section
        id="contact"
        className="relative overflow-visible px-4 py-10 pb-24 md:px-8 lg:py-14"
      >
        <div className="glass-panel collage-tilt-contact mx-auto max-w-xl px-8 py-12 text-center md:px-12">
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
