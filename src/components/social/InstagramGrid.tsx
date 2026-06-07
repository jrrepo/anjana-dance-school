import { instagramPosts } from '../../data/instagram';

const typeLabels = {
  reel: 'Reel',
  performance: 'Performance',
  practice: 'Practice',
  event: 'Event',
};

export default function InstagramGrid() {
  return (
    <section className="relative overflow-hidden py-18 sm:py-24">
      <div className="absolute inset-x-0 top-1/3 -z-10 h-80 bg-[radial-gradient(ellipse_at_center,rgba(233,54,117,0.14),transparent_66%)]" />
      <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
        <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#f6b64a]">Instagram Preview</p>
            <h2 className="mt-4 font-['Cinzel'] text-4xl font-bold leading-tight text-[#fff8ea] sm:text-5xl">
              Visual stories from ADS.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-[#d8cae8]">
            Static social previews today, ready to swap with fresh Instagram artwork as ADS grows.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {instagramPosts.map((post) => (
            <a
              className="group relative min-h-[430px] overflow-hidden rounded-lg border border-[#fff1d6]/14 bg-[#070b21]/70 shadow-[0_22px_70px_rgba(0,0,0,0.3)] transition duration-300 hover:-translate-y-1 hover:border-[#f6b64a]/55 hover:shadow-[0_28px_90px_rgba(233,54,117,0.23)]"
              href={post.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open Instagram post preview: ${post.title}`}
              key={post.id}
            >
              <img
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                src={post.image.src}
                width={post.image.width}
                height={post.image.height}
                alt=""
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,11,33,0.12),rgba(7,11,33,0.22)_35%,rgba(7,11,33,0.92)_100%)]" />
              <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5">
                <span className="rounded-full border border-[#fff1d6]/18 bg-[#070b21]/56 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.14em] text-[#f6b64a] backdrop-blur-md">
                  {typeLabels[post.type]}
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#f6b64a] to-[#e93675] text-xs font-black text-[#18061f] shadow-[0_12px_30px_rgba(233,54,117,0.25)]">
                  IG
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#e93675]">ADS Social</p>
                <h3 className="mt-3 font-['Cinzel'] text-2xl font-bold leading-tight text-[#fff8ea]">{post.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#d8cae8]">{post.caption}</p>
                <div className="mt-5 h-0.5 w-14 bg-gradient-to-r from-[#f6b64a] to-[#e93675] transition group-hover:w-24" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
