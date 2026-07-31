import Link from "next/link";
import { ArrowRight, Bot } from "lucide-react";

import Navbar from "@/components/landing/navbar";
import Features from "@/components/landing/features";
import HowItWorks from "@/components/landing/how-it-works";
import Pricing from "@/components/landing/pricing";
import FAQ from "@/components/landing/faq";
import Footer from "@/components/landing/footer";
import { Brain } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#131316] text-[#EDEDEF]">
      {/* Subtle single-accent glow + faint editor grid, no violet/cyan blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(245,185,66,0.08),transparent)]" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#EDEDEF 1px, transparent 1px), linear-gradient(90deg, #EDEDEF 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <Navbar />

      {/* Hero Section */}
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-24 text-center">
        {/* Badge — terminal prompt, not an emoji pill */}
        <span className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-[13px] text-[#8D8D97]">
          <span className="mr-2 text-[#F5B942]">$</span>
          repominds connect
        </span>

        {/* Heading */}
        <h1 className="max-w-5xl font-[var(--font-display)] text-6xl font-bold leading-[1.05] tracking-tight md:text-7xl">
          Every pull request,
          <span className="mt-2 block">
            reviewed before you{" "}
            <span className="relative whitespace-nowrap">
              ask
              <svg
                className="absolute -bottom-1 left-0 w-full"
                height="10"
                viewBox="0 0 200 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,6 Q50,0 100,5 T200,4"
                  fill="none"
                  stroke="#F5B942"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#8D8D97]">
          RepoMindsAI reads every diff the moment it lands, flags the bugs and
          smells worth flagging, and leaves the kind of comment a senior
          engineer would — so your team merges with confidence, not hope.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/sign-in"
            className="flex items-center justify-center gap-2 rounded-xl bg-[#EDEDEF] px-7 py-3.5 text-[15px] font-semibold text-[#131316] transition hover:bg-white"
          >
            Get started
            <ArrowRight size={18} />
          </Link>

          <Link
            href="https://github.com"
            target="_blank"
            className="rounded-xl border border-white/10 px-7 py-3.5 text-[15px] font-semibold text-[#EDEDEF] transition hover:border-white/25 hover:bg-white/[0.03]"
          >
            View on GitHub
          </Link>
        </div>

        {/* Signature element: a real annotated diff with an AI review comment,
            instead of a generic grey-bar dashboard mockup */}
{/* Product Preview */}
<div className="mt-24 flex w-full max-w-6xl items-stretch gap-8">
  {/* Code Diff */}
  <div className="flex-1 overflow-hidden rounded-2xl border border-white/10 bg-[#18181C] text-left shadow-[0_0_60px_rgba(0,0,0,0.4)]">
    {/* Header */}
    <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3">
      <span className="font-mono text-[13px] text-[#8D8D97]">
        src/lib/get-user.ts
      </span>

      <span className="rounded-md bg-[#3FB950]/10 px-2 py-0.5 font-mono text-[11px] text-[#3FB950]">
        +1 -1
      </span>
    </div>

    {/* Diff */}
    <div className="font-mono text-[13px] leading-7">
      <div className="flex px-5 py-3 text-[#5C5C66]">
        <span className="w-6">11</span>
        <span className="pl-4">
          function getUser(id: string) {"{"}
        </span>
      </div>

      <div className="flex bg-[#F85149]/10 px-5 py-3">
        <span className="w-6 text-[#F85149]">12</span>
        <span className="pl-4 text-[#F85149]">
          - return users.find((u) =&gt; u.id == id);
        </span>
      </div>

      <div className="flex bg-[#3FB950]/10 px-5 py-3">
        <span className="w-6 text-[#3FB950]">12</span>
        <span className="pl-4 text-[#3FB950]">
          + return users.find((u) =&gt; u.id === id);
        </span>
      </div>

      <div className="flex px-5 py-3 text-[#5C5C66]">
        <span className="w-6">13</span>
        <span className="pl-4">{"}"}</span>
      </div>
    </div>
  </div>

  {/* AI Review */}
  <div className="flex w-[330px] flex-col rounded-2xl border border-[#F5B942]/25 bg-[#1B1B20] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5B942]/15">
        <Brain className="h-5 w-5 text-[#F5B942]" />
      </span>

      <span className="text-xl font-bold text-[#F5B942]">
        RepoMindsAI
      </span>
    </div>

    <div className="mt-6 flex-1">
      <p className="text-[14px] leading-8 text-[#C4C4CA]">
        <code className="text-white">==</code> coerces types before
        comparing.
      </p>

      <p className="mt-5 text-[14px] leading-8 text-[#C4C4CA]">
        Switched to <code className="text-white">===</code> to
        avoid a subtle bug when{" "}
        <code className="text-white">id</code> arrives as a number.
      </p>
    </div>

    <div className="rounded-lg border border-green-500/20 bg-green-500/10 px-4 py-3">
      <span className="text-sm font-medium text-green-400">
        ✓ AI suggestion ready
      </span>
    </div>
  </div>
</div>
      </section>

      {/* Features Section */}
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}