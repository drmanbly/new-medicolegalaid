import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full box-border py-[72px] px-8 md:px-[64px] pb-[32px] bg-[#16212C] font-sans">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-[56px]">
        <div className="grid lg:grid-cols-[1.2fr_1fr_1fr_1fr] gap-[40px]">
          <div className="flex flex-col gap-[14px]">
            <div className="flex items-center gap-[10px]">
              <Image src="/logo.png" alt="MedicoLegalAid seal logo" width={34} height={34} className="w-[34px] h-[34px] brightness-0 invert" />
              <span className="font-serif text-[22px] font-semibold text-background">
                Medico<span className="text-accent">LegalAid</span>
              </span>
            </div>
            <p className="m-0 text-[14px] leading-[1.6] text-[#8D8875] max-w-[32ch]">
              Empowering Indian doctors with practical, case-based medicolegal knowledge to protect their practice and reputation.
            </p>
          </div>
          
          <div className="flex flex-col gap-[12px]">
            <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#6B6350]">Programs</span>
            <Link href="/book-course" className="text-[14px] color-[#C9BFA9] text-[#C9BFA9] hover:text-white transition-colors">The Book + Masterclass</Link>
            <Link href="/webinars" className="text-[14px] color-[#C9BFA9] text-[#C9BFA9] hover:text-white transition-colors">Monthly Live Training</Link>
            <Link href="/consult" className="text-[14px] color-[#C9BFA9] text-[#C9BFA9] hover:text-white transition-colors">1:1 Consultation</Link>
            <Link href="/seminars" className="text-[14px] color-[#C9BFA9] text-[#C9BFA9] hover:text-white transition-colors">Corporate Training</Link>
          </div>

          <div className="flex flex-col gap-[12px]">
            <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#6B6350]">Knowledge Hub</span>
            <Link href="/tips" className="text-[14px] color-[#C9BFA9] text-[#C9BFA9] hover:text-white transition-colors">Free Legal Tips</Link>
            <Link href="/blog" className="text-[14px] color-[#C9BFA9] text-[#C9BFA9] hover:text-white transition-colors">Blog</Link>
            <Link href="/news" className="text-[14px] color-[#C9BFA9] text-[#C9BFA9] hover:text-white transition-colors">Medico-Legal News</Link>
            <Link href="/judgements" className="text-[14px] color-[#C9BFA9] text-[#C9BFA9] hover:text-white transition-colors">Landmark Judgements</Link>
            <Link href="/about" className="text-[14px] color-[#C9BFA9] text-[#C9BFA9] hover:text-white transition-colors">About Us</Link>
          </div>

          <div className="flex flex-col gap-[12px]">
            <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#6B6350]">Contact</span>
            <span className="text-[14px] color-[#C9BFA9] text-[#C9BFA9]">+91 91106 89797</span>
            <span className="text-[14px] color-[#C9BFA9] text-[#C9BFA9]">contact@medicolegalaid.com</span>
            <span className="text-[14px] color-[#C9BFA9] text-[#C9BFA9]">Bengaluru, Karnataka</span>
          </div>
        </div>

        <div className="flex justify-between flex-wrap gap-[16px] pt-[28px] border-t border-background/10">
          <div className="flex gap-[20px] text-[13px] text-[#6B6350] flex-wrap items-center">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#8D8875]">Locations:</span>
            <Link href="/consult/delhi" className="hover:text-white transition-colors">Delhi</Link>
            <Link href="/consult/mumbai" className="hover:text-white transition-colors">Mumbai</Link>
            <Link href="/consult/bangalore" className="hover:text-white transition-colors">Bangalore</Link>
            <Link href="/consult/chennai" className="hover:text-white transition-colors">Chennai</Link>
            <Link href="/consult/hyderabad" className="hover:text-white transition-colors">Hyderabad</Link>
            <Link href="/consult/pune" className="hover:text-white transition-colors">Pune</Link>
            <Link href="/consult/kolkata" className="hover:text-white transition-colors">Kolkata</Link>
          </div>
          <div className="flex gap-[20px] font-mono text-[13px]">
            <a href="https://www.facebook.com/profile.php?id=61584397403289" target="_blank" rel="noopener noreferrer" className="text-[#C9BFA9] hover:text-white transition-colors">Facebook</a>
            <a href="https://www.instagram.com/medicolegalaid/" target="_blank" rel="noopener noreferrer" className="text-[#C9BFA9] hover:text-white transition-colors">Instagram</a>
            <a href="https://www.linkedin.com/in/medicolegalaid/" target="_blank" rel="noopener noreferrer" className="text-[#C9BFA9] hover:text-white transition-colors">LinkedIn</a>
            <a href="https://www.youtube.com/@Dr.VinayKumarS" target="_blank" rel="noopener noreferrer" className="text-[#C9BFA9] hover:text-white transition-colors">YouTube</a>
          </div>
        </div>

        <div className="flex justify-between flex-wrap gap-[12px] text-[12px] text-[#545045]">
          <span>© 2026 MedicoLegalAid. All rights reserved.</span>
          <div className="flex gap-[20px]">
            <Link href="/termsofuse" className="text-[#545045] hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/privacypolicy" className="text-[#545045] hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/refunds" className="text-[#545045] hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
