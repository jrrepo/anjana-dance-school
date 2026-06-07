import bannerImage from '../../assets/hero/IMG-20251018-WA0193.jpg';

interface PageBannerProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function PageBanner({ eyebrow, title, description }: PageBannerProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#070b21] py-20 sm:py-24">
      <img
        className="absolute inset-0 -z-30 h-full w-full object-cover object-center brightness-[0.48] saturate-[1.12]"
        src={bannerImage.src}
        width={bannerImage.width}
        height={bannerImage.height}
        alt="Anjana Dance School stage performance"
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(7,11,33,0.96),rgba(52,16,79,0.74),rgba(7,11,33,0.66)),radial-gradient(circle_at_75%_18%,rgba(246,182,74,0.2),transparent_24rem)]" />
      <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#f6b64a]">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-['Cinzel'] text-5xl font-bold leading-none text-[#fff8ea] sm:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d8cae8]">{description}</p>
      </div>
    </section>
  );
}
