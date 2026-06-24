import { instagramProfileUrl } from '../../data/instagram';
import dancerIcon from '../../assets/logo/ads-wordmark-variation-1-original-white.png';

export default function InstagramCTA() {
  return (
    <section id="instagram" className="relative scroll-mt-24 overflow-hidden py-18 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(7,11,33,0.1),rgba(52,16,79,0.5),rgba(7,11,33,0.2))]" />
      <div className="absolute left-[12%] top-16 -z-10 h-56 w-56 rounded-full bg-[#e93675]/18 blur-3xl" />
      <div className="absolute bottom-10 right-[10%] -z-10 h-64 w-64 rounded-full bg-[#f6b64a]/14 blur-3xl" />

      <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
        <div className="relative overflow-hidden rounded-lg border border-[#fff1d6]/16 bg-[linear-gradient(135deg,rgba(52,16,79,0.82),rgba(7,11,33,0.94)),radial-gradient(circle_at_82%_20%,rgba(233,54,117,0.22),transparent_24rem)] p-7 shadow-[0_26px_86px_rgba(0,0,0,0.34)] sm:p-10 lg:p-14">
          <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full border border-[#f6b64a]/18 bg-[#f6b64a]/8" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#f6b64a]">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-[#f6b64a] to-[#e93675] text-[#17071e]">IG</span>
                Social Studio
              </p>
              <h2 className="mt-5 font-['Cinzel'] text-4xl font-bold leading-tight text-[#fff8ea] sm:text-5xl">
                Follow Our Dance Journey
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#d8cae8]">
                Watch performances, practice moments, event highlights, and student achievements on Instagram.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-[auto_1fr] sm:items-center lg:block">
              <img
                className="w-32 drop-shadow-[0_18px_40px_rgba(233,54,117,0.28)] lg:mx-auto lg:mb-6 lg:w-40"
                src={dancerIcon.src}
                width={dancerIcon.width}
                height={dancerIcon.height}
                alt="Colorful Anjana Dance School dancer icon"
              />
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-gradient-to-r from-[#f6b64a] via-[#f27b3e] to-[#e93675] px-6 font-extrabold text-[#18061f] shadow-[0_16px_42px_rgba(246,182,74,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(233,54,117,0.28)]"
                href={instagramProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Anjana Dance School on Instagram"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
