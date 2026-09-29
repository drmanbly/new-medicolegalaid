import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <div className="flex flex-col w-full z-50">
      {/* ===== UTILITY BAR ===== */}
      <div className="w-full bg-[#16212C] box-border py-[9px] px-8 md:px-[64px] flex justify-center md:justify-end gap-[28px] font-mono text-[12px] tracking-[0.02em] text-[#C9BFA9]">
        <span className="hidden sm:inline">BENGALURU, KARNATAKA</span>
        <span>+91 91106 89797</span>
        <a href="mailto:contact@medicolegalaid.com" className="hover:text-white transition-colors">contact@medicolegalaid.com</a>
      </div>

      {/* ===== HEADER / NAV (sticky) ===== */}
      <header className="w-full box-border py-[14px] px-4 md:px-[56px] flex items-center justify-between gap-[24px] border-b border-primary/15 bg-background sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-[10px] leading-none shrink-0">
          <Image
            src="/logo.png"
            alt="MedicoLegalAid seal logo"
            width={42}
            height={42}
            className="w-[42px] h-[42px] shrink-0"
          />
          <span className="flex flex-col">
            <span className="font-serif text-[20px] font-semibold text-primary">
              Medico<span className="text-accent">LegalAid</span>
            </span>
            <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#7A5A22]">
              Medico-Legal Education
            </span>
          </span>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-[20px]">
          <Link href="/book-course" className="text-[13px] font-medium hover:opacity-65 transition-opacity text-foreground">
            The Book + Course
          </Link>
          <Link href="/webinars" className="flex items-center gap-2 text-[13px] font-medium hover:opacity-65 transition-opacity text-foreground">
            Live Training
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
          </Link>
          <div className="relative group">
            <Link href="/tips" className="flex items-center gap-[6px] text-[12px] font-bold tracking-[0.02em] text-secondary bg-[#8C2F2617] border border-secondary/40 py-[8px] px-[14px] whitespace-nowrap hover:bg-[#8C2F2629] transition-colors">
              <span className="w-[6px] h-[6px] rounded-full bg-secondary inline-block"></span> Free Resources ▾
            </Link>
            <div className="absolute top-full left-0 pt-[16px] hidden group-hover:flex flex-col z-[60]">
              <div className="bg-card border border-primary/30 shadow-[0_12px_28px_rgba(27,42,56,0.16)] min-w-[240px] py-[8px] flex flex-col">
                <Link href="/tips" className="block py-[10px] px-[20px] text-[14px] text-foreground font-semibold hover:text-[#7A5A22]">Free Legal Tips</Link>
                <Link href="/blog" className="block py-[10px] px-[20px] text-[14px] text-foreground border-t border-primary/15 hover:text-[#7A5A22]">Blog</Link>
                <Link href="/news" className="block py-[10px] px-[20px] text-[14px] text-foreground hover:text-[#7A5A22]">Medico-Legal News</Link>
                <Link href="/judgements" className="block py-[10px] px-[20px] text-[14px] text-foreground hover:text-[#7A5A22]">Landmark Judgements</Link>
                <Link href="/about" className="block py-[10px] px-[20px] text-[14px] text-foreground border-t border-primary/15 hover:text-[#7A5A22]">About Us</Link>
              </div>
            </div>
          </div>
          <Link href="/consult" className="text-[13px] font-medium hover:opacity-65 transition-opacity text-foreground">
            1:1 Consult
          </Link>
          <Link href="/seminars" className="text-[13px] font-medium hover:opacity-65 transition-opacity text-foreground">
            Corporate Training
          </Link>
        </nav>

        <div className="flex items-center gap-[14px] shrink-0">
          <Link href="https://learn.medicolegalaid.com/s/authenticate" className="text-[13px] font-semibold text-primary hover:opacity-65 transition-opacity hidden sm:block">
            Sign In
          </Link>
          <Link href="/programs" className="bg-primary text-background text-[13px] font-semibold py-[11px] px-[20px] border border-primary whitespace-nowrap hover:bg-[#16212C] transition-colors">
            See Our Programs
          </Link>
        </div>
      </header>
    </div>
  );
}
