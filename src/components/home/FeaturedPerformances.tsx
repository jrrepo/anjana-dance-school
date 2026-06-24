import YouTubeEmbed from '../media/YouTubeEmbed';
import { featuredVideo, highlightedVideos, videos, youtubeChannelUrl } from '../../data/videos';

const performanceCards = [
  ...highlightedVideos.filter((video) => video.videoId !== featuredVideo.videoId),
  ...videos.filter((video) => !video.isHighlight),
].slice(0, 3);

export default function FeaturedPerformances() {
  return (
    <section className="relative overflow-hidden py-18 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,11,33,0.15),rgba(52,16,79,0.5),rgba(7,11,33,0.15))]" />
      <div className="absolute left-[8%] top-12 -z-10 h-56 w-56 rounded-full bg-[#e93675]/16 blur-3xl" />
      <div className="absolute bottom-10 right-[12%] -z-10 h-64 w-64 rounded-full bg-[#f6b64a]/12 blur-3xl" />

      <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#f6b64a]">Featured Performances</p>
            <h2 className="mt-4 font-['Cinzel'] text-4xl font-bold leading-tight text-[#fff8ea] sm:text-5xl">
              Watch the energy come alive.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[#d8cae8] lg:justify-self-end">
            A cinematic glimpse into ADS performance culture: expressive choreography, confident students, and stage-ready movement.
          </p>
        </div>

        <div className="mt-10 grid gap-7 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
          <div>
            <YouTubeEmbed videoId={featuredVideo.videoId} title={featuredVideo.title} />
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-['Cinzel'] text-2xl font-bold text-[#fff8ea]">{featuredVideo.title}</h3>
                <p className="mt-1 text-sm font-semibold text-[#f6b64a]">{featuredVideo.category}</p>
              </div>
              <a
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-gradient-to-r from-[#f6b64a] to-[#e93675] px-5 text-sm font-extrabold text-[#18061f] transition hover:-translate-y-0.5"
                href={youtubeChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch on YouTube
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            {performanceCards.map((video) => (
              <a
                className="group rounded-lg border border-[#fff1d6]/12 bg-white/[0.045] p-5 shadow-[0_18px_48px_rgba(0,0,0,0.2)] transition hover:-translate-y-1 hover:border-[#f6b64a]/45 hover:bg-white/[0.07]"
                href="/gallery"
                key={`${video.category}-${video.videoId}`}
              >
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#e93675]">{video.category}</p>
                <h3 className="mt-4 font-['Cinzel'] text-xl font-bold leading-tight text-[#fff8ea]">{video.title}</h3>
                <div className="mt-5 h-0.5 w-14 bg-gradient-to-r from-[#f6b64a] to-[#e93675] transition group-hover:w-24" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
