import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#131316]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <div>
          <h2 className="font-[var(--font-display)] text-xl font-bold text-[#EDEDEF]">
            RepoMindsAI
          </h2>
          <p className="mt-1.5 text-[13px] text-[#8D8D97]">
            AI-powered GitHub code reviews.
          </p>
        </div>

        <div className="flex gap-7 font-mono text-[13px] text-[#8D8D97]">
          <Link href="#features" className="hover:text-[#F5B942]">
            features
          </Link>
          <Link href="#pricing" className="hover:text-[#F5B942]">
            pricing
          </Link>
          <Link href="#faq" className="hover:text-[#F5B942]">
            faq
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            className="hover:text-[#F5B942]"
          >
            github
          </Link>
        </div>
      </div>

      <div className="border-t border-white/[0.07] py-6 text-center font-mono text-[12px] text-[#5C5C66]">
        © {new Date().getFullYear()} RepoMindsAI. All rights reserved.
      </div>
    </footer>
  );
}