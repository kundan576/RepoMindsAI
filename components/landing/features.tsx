import {
  Brain,
  GitBranch,
  GitPullRequest,
  Search,
  ShieldCheck,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Code Reviews",
    description:
      "Automatically review pull requests with AI and receive actionable suggestions before merging.",
  },
  {
    icon: GitPullRequest,
    title: "Pull Request Analysis",
    description:
      "Analyze every pull request to detect bugs, code smells, and maintainability issues before merging.",
  },
  {
    icon: Search,
    title: "Semantic Code Search",
    description:
      "Quickly find relevant code using AI-powered semantic search backed by Pinecone vector embeddings.",
  },
  {
    icon: GitBranch,
    title: "GitHub Integration",
    description:
      "Connect your GitHub repositories with one click and automate your complete review workflow.",
  },
  {
    icon: Zap,
    title: "Background Processing",
    description:
      "Synchronize repositories and process AI reviews asynchronously using Inngest workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Authentication",
    description:
      "Authenticate securely with GitHub OAuth and safely manage your repositories.",
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-28">
      <div className="text-center">
        <p className="font-mono text-[13px] text-[#F5B942]">features</p>

        <h2 className="mt-4 font-[var(--font-display)] text-4xl font-bold tracking-tight md:text-5xl">
          Everything you need for
          <span className="block text-[#8D8D97]">AI code reviews</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-[#8D8D97]">
          RepoMindsAI combines GitHub, AI, vector search, and automated
          workflows into one seamless developer experience.
        </p>
      </div>

      <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="group rounded-2xl border border-white/[0.07] bg-[#1B1B20] p-8 transition-all duration-300 hover:border-[#F5B942]/30 hover:bg-[#1E1E23]"
            >
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.03] transition group-hover:border-[#F5B942]/30">
                <Icon className="h-5 w-5 text-[#F5B942]" />
              </div>

              <h3 className="text-lg font-semibold text-[#EDEDEF]">
                {feature.title}
              </h3>

              <p className="mt-3 text-[14px] leading-6 text-[#8D8D97]">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}