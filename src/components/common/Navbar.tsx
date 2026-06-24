import { useState } from 'react';
import dancerIcon from '../../assets/logo/ads-wordmark-variation-1-original-white.png';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/classes', label: 'Classes' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/events', label: 'Events' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#fff1d6]/15 bg-[#070b21]/82 shadow-[0_18px_55px_rgba(0,0,0,0.32)] backdrop-blur-xl">
      <nav className="mx-auto flex min-h-20 w-[min(1180px,calc(100%-32px))] items-center gap-5" aria-label="Main navigation">
        <a className="flex h-16 shrink-0 items-center gap-3" href="/" aria-label="Anjana Dance School home">
          <img
            className="h-14 w-14 object-contain drop-shadow-[0_0_18px_rgba(246,182,74,0.28)] sm:h-16 sm:w-16"
            src={dancerIcon.src}
            width={dancerIcon.width}
            height={dancerIcon.height}
            alt="Anjana Dance School dancer icon"
          />
          <span className="hidden min-w-[190px] flex-col leading-none md:flex">
            <span className="font-['Cinzel'] text-[1.05rem] font-bold tracking-[0.08em] text-[#fff8ea] drop-shadow-[0_0_14px_rgba(246,182,74,0.18)]">
              Anjana Dance School
            </span>
            <span className="mt-1 text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-[#f6b64a]/86">
              Freestyle & Cinematic Dance
            </span>
          </span>
        </a>

        <div className="ml-7 hidden items-center gap-6 lg:flex xl:ml-9 xl:gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              className="relative py-2 text-[0.96rem] font-semibold text-[#fff8ea]/82 transition hover:text-[#f6b64a] focus-visible:text-[#f6b64a] focus-visible:outline-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-center after:scale-x-0 after:bg-gradient-to-r after:from-[#f6b64a] after:to-[#e93675] after:transition after:content-[''] hover:after:scale-x-100 focus-visible:after:scale-x-100 xl:text-base"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          className="ml-auto hidden rounded-lg bg-gradient-to-r from-[#f6b64a] via-[#f27b3e] to-[#e93675] px-5 py-3 text-sm font-extrabold text-[#18061f] shadow-[0_12px_34px_rgba(246,182,74,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_42px_rgba(233,54,117,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f6b64a] lg:inline-flex"
          href="/contact"
        >
          Join Classes
        </a>

        <button
          className="grid h-11 w-11 place-items-center rounded-lg border border-[#fff1d6]/20 bg-white/6 lg:hidden"
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="grid gap-1.5">
            <span className={`block h-0.5 w-5 rounded-full bg-[#fff8ea] transition ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-[#fff8ea] transition ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-[#fff8ea] transition ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </span>
        </button>
      </nav>

      <div
        className={`grid overflow-hidden border-t border-[#fff1d6]/10 bg-[#0b0825]/96 transition-[grid-template-rows,opacity] duration-300 lg:hidden ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0">
          <div className="mx-auto grid w-[min(100%-32px,420px)] gap-2 py-5">
            <img className="mb-3 w-24 drop-shadow-[0_0_28px_rgba(246,182,74,0.18)]" src={dancerIcon.src} width={dancerIcon.width} height={dancerIcon.height} alt="Anjana Dance School dancer icon" />
            {links.map((link) => (
              <a
                key={link.href}
                className="border-b border-[#fff1d6]/10 py-3 text-base font-semibold text-[#fff8ea]/90 transition hover:text-[#f6b64a]"
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="mt-3 rounded-lg bg-gradient-to-r from-[#f6b64a] to-[#e93675] px-5 py-3 text-center font-extrabold text-[#18061f]"
              href="/contact"
              onClick={() => setIsOpen(false)}
            >
              Join Classes
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
