interface YouTubeEmbedProps {
  videoId: string;
  title: string;
}

export default function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-[#fff1d6]/14 bg-[#070b21]/70 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition duration-300 hover:-translate-y-1 hover:border-[#f6b64a]/45 hover:shadow-[0_26px_80px_rgba(233,54,117,0.22)]">
      <div className="pointer-events-none absolute -inset-10 -z-10 bg-[radial-gradient(circle_at_25%_20%,rgba(246,182,74,0.18),transparent_32%),radial-gradient(circle_at_78%_70%,rgba(233,54,117,0.18),transparent_34%)] opacity-0 blur-2xl transition duration-300 group-hover:opacity-100" />
      <div className="relative aspect-video overflow-hidden rounded-md bg-[#05071a]">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}
