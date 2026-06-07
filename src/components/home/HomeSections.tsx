import performanceImage from '../../assets/gallery/img_3_1778599900424.jpg';
import achievementImage from '../../assets/gallery/IMG-20260301-WA0045.jpg';

const classes = [
  'Freestyle Dance',
  'Cinematic Dance',
  'Kids Performance Training',
  'Competition Preparation',
];

const highlights = [
  { value: 'All ages', label: 'Welcoming classes for growing dancers' },
  { value: 'Stage ready', label: 'Performance confidence and expression' },
  { value: 'Creative', label: 'Freestyle, cinematic, and cultural movement' },
];

export default function HomeSections() {
  return (
    <>
      <section id="about" className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-10 py-18 sm:py-24 lg:grid-cols-[0.9fr_1fr] lg:items-center">
        <div className="ads-fade-up">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#f6b64a]">About ADS</p>
          <h2 className="mt-4 font-['Cinzel'] text-4xl font-bold leading-tight text-[#fff8ea] sm:text-6xl">A studio built for feeling, rhythm, and stage presence.</h2>
        </div>
        <div className="rounded-lg border border-[#fff1d6]/14 bg-white/[0.055] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-md sm:p-8">
          <p className="text-lg leading-8 text-[#d8cae8]">
            Anjana Dance School blends disciplined training with expressive performance. Students learn musicality, choreography, storytelling, and confidence in a vibrant environment shaped by cinematic energy.
          </p>
        </div>
      </section>

      <section id="classes" className="relative py-18 sm:py-24">
        <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(ellipse_at_center,rgba(233,54,117,0.16),transparent_65%)]" />
        <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#f6b64a]">Featured Classes</p>
              <h2 className="mt-4 font-['Cinzel'] text-4xl font-bold text-[#fff8ea] sm:text-5xl">Train with purpose.</h2>
            </div>
            <a className="text-sm font-bold text-[#f6b64a] transition hover:text-[#fff8ea]" href="/classes">View all classes</a>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {classes.map((className, index) => (
              <article
                className="group min-h-64 rounded-lg border border-[#fff1d6]/14 bg-[linear-gradient(145deg,rgba(255,255,255,0.09),rgba(255,255,255,0.025))] p-6 shadow-[0_18px_48px_rgba(0,0,0,0.22)] transition hover:-translate-y-1 hover:border-[#f6b64a]/50 hover:shadow-[0_22px_64px_rgba(233,54,117,0.18)]"
                key={className}
              >
                <span className="text-sm font-black text-[#e93675]">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-16 font-['Cinzel'] text-2xl font-bold text-[#fff8ea]">{className}</h3>
                <p className="mt-4 text-sm leading-7 text-[#d8cae8]">Technique, confidence, expression, and performance detail for dancers ready to grow.</p>
                <div className="mt-6 h-0.5 w-14 bg-gradient-to-r from-[#f6b64a] to-[#e93675] transition group-hover:w-24" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-8 py-18 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="overflow-hidden rounded-lg border border-[#fff1d6]/14 bg-[#070b21]/50 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.32)]">
          <img className="aspect-[16/10] w-full rounded-md object-cover object-center" src={performanceImage.src} width={performanceImage.width} height={performanceImage.height} alt="Anjana Dance School performance highlight" />
        </div>
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#f6b64a]">Performance Highlights</p>
          <h2 className="mt-4 font-['Cinzel'] text-4xl font-bold leading-tight text-[#fff8ea] sm:text-5xl">Movement that feels alive on stage.</h2>
          <p className="mt-5 text-lg leading-8 text-[#d8cae8]">From formation work to expressive solos, students develop the presence and polish to make every performance memorable.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div className="rounded-lg border border-[#fff1d6]/12 bg-white/[0.045] p-4" key={item.value}>
                <strong className="block text-[#f6b64a]">{item.value}</strong>
                <span className="mt-2 block text-sm leading-6 text-[#d8cae8]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-8 py-18 sm:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#f6b64a]">Student Achievement</p>
          <h2 className="mt-4 font-['Cinzel'] text-4xl font-bold leading-tight text-[#fff8ea] sm:text-5xl">Confidence students can carry anywhere.</h2>
          <p className="mt-5 text-lg leading-8 text-[#d8cae8]">ADS students build discipline, creativity, teamwork, and stage courage through a joyful performance culture.</p>
        </div>
        <div className="overflow-hidden rounded-lg border border-[#fff1d6]/14 bg-[#070b21]/50 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.32)]">
          <img className="aspect-[16/10] w-full rounded-md object-cover object-center" src={achievementImage.src} width={achievementImage.width} height={achievementImage.height} alt="Anjana Dance School student achievement moment" />
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%-32px))] py-18 sm:py-24">
        <div className="relative overflow-hidden rounded-lg border border-[#fff1d6]/16 bg-[linear-gradient(135deg,rgba(52,16,79,0.86),rgba(7,11,33,0.9)),radial-gradient(circle_at_78%_24%,rgba(246,182,74,0.24),transparent_22rem)] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.34)] sm:p-10 lg:p-14">
          <div className="absolute right-8 top-8 h-32 w-32 rounded-full bg-[#e93675]/20 blur-3xl" />
          <div className="relative grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#f6b64a]">Join ADS</p>
              <h2 className="mt-4 max-w-3xl font-['Cinzel'] text-4xl font-bold leading-tight text-[#fff8ea] sm:text-5xl">Ready to step into the light?</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#d8cae8]">Start classes, prepare for a performance, or explore the right path for your dancer.</p>
            </div>
            <a className="inline-flex min-h-12 items-center justify-center rounded-lg bg-gradient-to-r from-[#f6b64a] to-[#e93675] px-7 font-extrabold text-[#18061f] transition hover:-translate-y-0.5" href="/contact">
              Join Classes
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
