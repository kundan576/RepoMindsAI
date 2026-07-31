import Image from "next/image";
import type { Metadata } from "next";
import { GithubSignInForm } from "@/components/auth/github-sign-in-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldSet,
} from "@/components/ui/field";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to Chai AI Code Reviewer with your GitHub account.",
};

type SignInPageProps = {
  searchParams: Promise<{ callbackUrl?: string }>;
};

function GraphTile() {
  return (
    <svg
      viewBox="0 0 300 520"
      width={300}
      height="100%"
      preserveAspectRatio="none"
      className="block shrink-0"
    >
      <line x1="80" y1="0" x2="80" y2="520" stroke="#ffffff" strokeOpacity={0.18} strokeWidth={1.5} />
      <line x1="220" y1="0" x2="220" y2="520" stroke="#E8934A" strokeOpacity={0.55} strokeWidth={1.5} className="graph-pulse" />

      <path d="M80,140 Q150,170 220,200" stroke="#ffffff" strokeOpacity={0.2} strokeWidth={1.5} fill="none" />
      <path d="M220,260 Q290,290 300,320" stroke="#ffffff" strokeOpacity={0.2} strokeWidth={1.5} fill="none" />

      <circle cx="80" cy="40" r="3" fill="#ffffff" fillOpacity={0.3} />
      <circle cx="80" cy="140" r="3" fill="#ffffff" fillOpacity={0.3} />
      <circle cx="80" cy="300" r="3" fill="#ffffff" fillOpacity={0.3} />
      <circle cx="80" cy="440" r="3" fill="#ffffff" fillOpacity={0.3} />

      <circle cx="220" cy="60" r="4" fill="#E8934A" fillOpacity={0.85} className="graph-pulse" />
      <circle cx="220" cy="200" r="4" fill="#E8934A" fillOpacity={0.85} className="graph-pulse" />
      <circle cx="220" cy="260" r="4" fill="#E8934A" fillOpacity={0.85} className="graph-pulse" />
      <circle cx="220" cy="380" r="4" fill="#E8934A" fillOpacity={0.85} className="graph-pulse" />
      <circle cx="220" cy="470" r="4" fill="#E8934A" fillOpacity={0.85} className="graph-pulse" />
    </svg>
  );
}

const TICKER_LINES = [
  "reviewing pull request #482",
  "12 files changed, 340 insertions(+)",
  "scanning diff for security issues...",
  "suggestion: extract helper function",
];

export default async function SignInPage({ searchParams }: SignInPageProps) {
  const { callbackUrl } = await searchParams;

  return (
    <>
      {/* fixed, full-viewport background — escapes any parent container's bg/width */}
      <div className="fixed inset-0 -z-10" style={{ background: "#0a0b0d" }}>
        <div className="flex h-full items-center opacity-70">
          <div className="graph-track flex h-full">
            <div className="flex h-full">
              {Array.from({ length: 8 }).map((_, i) => (
                <GraphTile key={`a-${i}`} />
              ))}
            </div>
            <div className="flex h-full">
              {Array.from({ length: 8 }).map((_, i) => (
                <GraphTile key={`b-${i}`} />
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0a0b0d_85%)]" />
        <div className="absolute bottom-6 left-6 hidden font-mono text-[11px] text-white/40 sm:block">
          <span className="mr-2 text-[#E8934A]">$</span>
          <span className="relative inline-block h-4 w-72 align-middle">
            {TICKER_LINES.map((line, i) => (
              <span
                key={line}
                className="ticker-line absolute left-0 top-0 whitespace-nowrap"
                style={{ animationDelay: `${i * 4}s` }}
              >
                {line}
              </span>
            ))}
          </span>
        </div>
      </div>

      <style>{`
        .graph-track { width: max-content; animation: graph-scroll 45s linear infinite; }
        @keyframes graph-scroll { from { transform: translateX(0); } to { transform: translateX(-2400px); } }
        .graph-pulse { animation: graph-pulse 3.2s ease-in-out infinite; }
        @keyframes graph-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        .ticker-line { opacity: 0; animation: ticker-fade 16s infinite; }
        @keyframes ticker-fade { 0% { opacity: 0; } 4% { opacity: 1; } 20% { opacity: 1; } 25% { opacity: 0; } 100% { opacity: 0; } }
        @media (prefers-reduced-motion: reduce) {
          .graph-track, .graph-pulse, .ticker-line { animation: none !important; }
        }
      `}</style>

      <div className="relative flex min-h-screen items-center justify-center px-4">
        <Card
          className="relative z-10 w-full max-w-[340px] rounded-xl border-white/[0.12] shadow-2xl"
          style={{ background: "#141518" }}
        >
          <CardHeader className="items-center text-center">
            <div className="mb-4 flex justify-center pt-2">
              <Image src="/logo.svg" alt="RepoMindsAI" width={48} height={48} priority />
            </div>
            <CardTitle className="text-[15px] text-neutral-100">Welcome back</CardTitle>
            <CardDescription className="text-[13px] text-white/55">
              Sign in with GitHub to review and manage your code.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FieldSet>
              <FieldGroup>
                <Field>
                  <GithubSignInForm callbackUrl={callbackUrl} />
                  <FieldDescription className="text-center text-[11px] text-white/35">
                    We only request the permissions needed to identify your
                    account. You can revoke access anytime from GitHub settings.
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </FieldSet>
          </CardContent>
        </Card>
      </div>
    </>
  );
}