import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "0",
    description: "Perfect for students and personal projects.",
    features: [
      "1 GitHub repository",
      "50 AI reviews / month",
      "Basic code analysis",
      "GitHub integration",
    ],
    button: "Get started",
    popular: false,
  },
  {
    name: "Pro",
    price: "199",
    period: "/month",
    description: "For developers and growing teams.",
    features: [
      "Unlimited repositories",
      "Unlimited AI reviews",
      "Semantic code search",
      "Priority processing",
      "Pull request insights",
      "Email support",
    ],
    button: "Start Pro",
    popular: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-28">
      <div className="text-center">
        <p className="font-mono text-[13px] text-[#F5B942]">pricing</p>

        <h2 className="mt-4 font-[var(--font-display)] text-4xl font-bold tracking-tight md:text-5xl">
          Simple &amp;
          <span className="block text-[#8D8D97]">transparent pricing</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-[#8D8D97]">
          Start for free and upgrade whenever your team grows.
        </p>
      </div>

      <div className="mx-auto mt-20 grid max-w-4xl gap-6 md:grid-cols-2">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl border p-10 ${
              plan.popular
                ? "border-[#F5B942]/30 bg-[#1E1E23]"
                : "border-white/[0.07] bg-[#1B1B20]"
            }`}
          >
            {plan.popular && (
              <span className="absolute right-6 top-6 rounded-full bg-[#F5B942]/15 px-3 py-1 font-mono text-[11px] text-[#F5B942]">
                MOST POPULAR
              </span>
            )}

            <h3 className="text-2xl font-semibold text-[#EDEDEF]">
              {plan.name}
            </h3>

            <p className="mt-2 text-[14px] text-[#8D8D97]">
              {plan.description}
            </p>

            <div className="mt-8 flex items-end">
              <span className="font-[var(--font-display)] text-5xl font-bold text-[#EDEDEF]">
                {plan.price}
              </span>

              {plan.period && (
                <span className="ml-2 mb-1.5 text-[14px] text-[#8D8D97]">
                  {plan.period}
                </span>
              )}
            </div>

            <div className="mt-10 space-y-3.5">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <Check
                    className={`h-4 w-4 shrink-0 ${
                      plan.popular ? "text-[#F5B942]" : "text-[#3FB950]"
                    }`}
                  />
                  <span className="text-[14px] text-[#C4C4CA]">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              href="/sign-in"
              className={`mt-10 block rounded-xl py-3.5 text-center text-[14px] font-semibold transition ${
                plan.popular
                  ? "bg-[#F5B942] text-[#131316] hover:bg-[#f7c665]"
                  : "border border-white/10 text-[#EDEDEF] hover:bg-white/[0.04]"
              }`}
            >
              {plan.button}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}