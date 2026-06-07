import logo from '../../assets/logo/anjana-dance-school-logo-transparent.png';

const quickLinks = ['About', 'Classes', 'Gallery', 'Events', 'Contact'];
const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'YouTube', href: 'https://www.youtube.com/' },
  { label: 'Facebook', href: 'https://www.facebook.com/' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#fff1d6]/14 bg-[linear-gradient(180deg,rgba(7,11,33,0.35),rgba(7,11,33,0.95)),rgba(9,6,28,0.98)]">
      <div className="mx-auto w-[min(1180px,calc(100%-32px))] py-12 sm:py-16">
        <div className="grid gap-8 border-b border-[#fff1d6]/12 pb-9 lg:grid-cols-[1.2fr_0.8fr_0.9fr_0.9fr]">
          <div>
            <img className="w-40 rounded-lg drop-shadow-[0_0_24px_rgba(246,182,74,0.18)]" src={logo.src} width={logo.width} height={logo.height} alt="Anjana Dance School logo" />
            <p className="mt-5 max-w-sm text-lg font-semibold text-[#fff8ea]">Express yourself through the art of dance</p>
            <p className="mt-3 max-w-sm text-sm leading-7 text-[#d8cae8]">A premium, performance-focused dance school bringing freestyle and cinematic movement training to Central Florida.</p>
          </div>

          <div>
            <h2 className="font-['Cinzel'] text-base font-bold text-[#f6b64a]">Quick Links</h2>
            <ul className="mt-4 grid gap-3 text-sm text-[#d8cae8]">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a className="transition hover:text-[#f6b64a]" href={`/${link.toLowerCase()}`}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-['Cinzel'] text-base font-bold text-[#f6b64a]">Social</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  className="rounded-full border border-[#fff1d6]/15 px-4 py-2 text-sm font-semibold text-[#fff8ea]/84 transition hover:border-[#f6b64a]/60 hover:text-[#f6b64a]"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open Anjana Dance School on ${social.label}`}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-['Cinzel'] text-base font-bold text-[#f6b64a]">Location</h2>
            <p className="mt-4 text-sm leading-7 text-[#d8cae8]">Central Florida</p>
            <p className="mt-2 text-sm leading-7 text-[#d8cae8]">Freestyle and cinematic dance classes for all age groups.</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-sm text-[#d8cae8]/72 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Anjana Dance School. All rights reserved.</p>
          <p>ADS | Cinematic Dance Training</p>
        </div>
      </div>
    </footer>
  );
}
