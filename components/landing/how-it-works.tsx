import { GitBranch, FolderGit2, BrainCircuit, GitMerge } from "lucide-react";

const steps = [
  {
    icon: GitBranch,
    title: "Connect GitHub",
    description:
      "Sign in securely with GitHub and install the RepoMindsAI GitHub App.",
  },
  {
    icon: FolderGit2,
    title: "Sync repository",
    description:
      "Choose repositories to analyze. RepoMindsAI indexes your codebase automatically.",
  },
  {
    icon: BrainCircuit,
    title: "AI reviews",
    description:
      "Every pull request is analyzed by AI for bugs, code quality, security, and best practices.",
  },
  {
    icon: GitMerge,
    title: "Merge with confidence",
    description:
      "Review AI suggestions, resolve issues, and merge higher-quality code faster.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-28">
      <div className="text-center">
        <p className="font-mono text-[13px] text-[#F5B942]">pipeline</p>

        <h2 className="mt-4 font-[var(--font-display)] text-4xl font-bold tracking-tight md:text-5xl">
          From repository
          <span className="block text-[#8D8D97]">to AI review</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-[#8D8D97]">
          RepoMindsAI automates your GitHub review workflow in four steps, run
          in order, every time a PR opens.
        </p>
      </div>

      <div className="relative mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Connecting pipeline line — only meaningful because this is a real sequence */}
        <div className="pointer-events-none absolute left-0 right-0 top-[52px] hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block" />

        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.title}
              className="relative rounded-2xl border border-white/[0.07] bg-[#1B1B20] p-8 transition hover:border-white/15"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.03]">
                  <Icon className="h-5 w-5 text-[#F5B942]" />
                </div>
                <span className="font-mono text-[12px] text-[#5C5C66]">
                  [0{index + 1}]
                </span>
              </div>

              <h3 className="text-lg font-semibold text-[#EDEDEF]">
                {step.title}
              </h3>

              <p className="mt-3 text-[14px] leading-6 text-[#8D8D97]">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
