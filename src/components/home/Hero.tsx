import dancerIcon from '../../assets/logo/ads-wordmark-variation-1-original-white.png';
import heroImage from '../../assets/hero/IMG-20251018-WA0193.jpg';

export default function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100svh-80px)] overflow-hidden bg-[#070b21] py-10 sm:py-14 lg:py-14">
      <img
        className="absolute inset-0 -z-40 h-full w-full max-w-none scale-[1.015] object-cover object-[54%_center] brightness-[0.78] contrast-[1.06] saturate-[1.12] sm:object-center"
        src={heroImage.src}
        width={heroImage.width}
        height={heroImage.height}
        alt="Anjana Dance School students performing on stage"
      />
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(90deg,rgba(7,11,33,0.97)_0%,rgba(7,11,33,0.9)_34%,rgba(52,16,79,0.5)_58%,rgba(7,11,33,0.46)_100%),linear-gradient(180deg,rgba(7,11,33,0.72),rgba(7,11,33,0.18)_42%,rgba(7,11,33,0.9)),radial-gradient(ellipse_at_58%_70%,rgba(246,182,74,0.22),transparent_34rem),radial-gradient(ellipse_at_24%_36%,rgba(233,54,117,0.22),transparent_30rem)]" />
      <div className="absolute left-[4%] top-[18%] -z-20 h-64 w-64 rounded-full bg-[#e93675]/24 blur-3xl" />
      <div className="absolute right-[12%] top-[12%] -z-20 h-72 w-72 rounded-full bg-[#f6b64a]/18 blur-3xl" />
      <div className="absolute -right-[14%] bottom-[-28%] -z-10 aspect-square w-[72vw] max-w-[920px] rounded-full border border-[#f6b64a]/16 bg-[#e93675]/10 backdrop-blur-[1px]" />

      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] items-center gap-10 lg:grid-cols-[0.9fr_0.74fr]">
        <div className="ads-fade-up max-w-3xl py-6">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#f6b64a] sm:text-sm">Freestyle & Cinematic Dance</p>
          <h1 className="mt-4 max-w-[14ch] font-['Cinzel'] text-[clamp(2.8rem,5.3vw,4rem)] font-bold leading-[0.96] text-[#fff8ea] drop-shadow-[0_10px_34px_rgba(0,0,0,0.55)]">
            Express Yourself Through The Art Of Dance
          </h1>
          <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-[#fff8ea]/92 drop-shadow-[0_3px_18px_rgba(0,0,0,0.64)] sm:text-lg">
            Freestyle & cinematic dance classes for kids and adults in Central Florida
          </p>
          <p className="mt-3 max-w-2xl text-base leading-7 text-[#d8cae8]">
            A performance-focused studio where rhythm, confidence, culture, and creativity meet under the lights.
          </p>
          <div className="mt-7 grid gap-4 sm:flex sm:flex-wrap">
            <a className="inline-flex min-h-12 items-center justify-center rounded-lg bg-gradient-to-r from-[#f6b64a] via-[#f27b3e] to-[#e93675] px-6 font-extrabold text-[#18061f] shadow-[0_16px_42px_rgba(246,182,74,0.25)] transition hover:-translate-y-0.5" href="/contact">
              Join Classes
            </a>
            <a className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#fff1d6]/22 bg-[#070b21]/36 px-6 font-extrabold text-[#fff8ea] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[#f6b64a]/60 hover:text-[#f6b64a]" href="/gallery">
              Watch Performances
            </a>
          </div>
        </div>

        <div className="ads-float relative hidden lg:block">
          <div className="absolute -inset-8 rounded-full bg-[radial-gradient(circle,rgba(246,182,74,0.2),rgba(233,54,117,0.12),transparent_64%)] blur-xl" />
          <div className="relative overflow-hidden rounded-lg border border-[#fff1d6]/16 bg-[#070b21]/42 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.38)] backdrop-blur-sm">
            <img className="aspect-[16/10] w-full rounded-md object-cover object-center" src={heroImage.src} width={heroImage.width} height={heroImage.height} alt="Stage performance by Anjana Dance School students" />
            <div className="pointer-events-none absolute inset-x-3 bottom-3 h-28 rounded-b-md bg-gradient-to-t from-[#070b21]/68 via-[#070b21]/16 to-transparent" />
            <img
              className="pointer-events-none absolute bottom-5 right-6 w-28 opacity-55 drop-shadow-[0_14px_34px_rgba(0,0,0,0.5)]"
              src={dancerIcon.src}
              width={dancerIcon.width}
              height={dancerIcon.height}
              alt=""
              aria-hidden="true"
            />
          </div>
        </div>

        <img className="w-24 opacity-80 drop-shadow-[0_18px_45px_rgba(0,0,0,0.42)] lg:hidden" src={dancerIcon.src} width={dancerIcon.width} height={dancerIcon.height} alt="Anjana Dance School dancer icon" />
      </div>
    </section>
  );
}
