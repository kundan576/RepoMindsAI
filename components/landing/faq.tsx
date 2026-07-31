"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "How does RepoMindsAI review my code?",
    answer:
      "RepoMindsAI analyzes every pull request using AI to detect bugs, improve readability, and suggest best practices before merging.",
  },
  {
    question: "Do I need to install anything?",
    answer:
      "Simply connect your GitHub account and install the RepoMindsAI GitHub App. Everything else is handled automatically.",
  },
  {
    question: "Is my source code secure?",
    answer:
      "Yes. Your repositories are accessed only with your permission, and authentication is handled securely using GitHub OAuth.",
  },
  {
    question: "Can I use RepoMindsAI for private repositories?",
    answer:
      "Yes. Both public and private repositories are supported based on the permissions you grant.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Absolutely. You can upgrade, downgrade, or cancel your subscription whenever you want.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-4xl px-6 py-28">
      <div className="text-center">
        <p className="font-mono text-[13px] text-[#F5B942]"> faq</p>

        <h2 className="mt-4 font-[var(--font-display)] text-4xl font-bold tracking-tight md:text-5xl">
          Frequently asked
          <span className="block text-[#8D8D97]">questions</span>
        </h2>
      </div>

      <div className="mt-16 divide-y divide-white/[0.07] rounded-2xl border border-white/[0.07] bg-[#1B1B20]">
        {faqs.map((faq, index) => {
          const isOpen = open === index;

          return (
            <div key={faq.question} className="px-6">
              <button
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-[15px] font-medium text-[#EDEDEF]">
                  {faq.question}
                </span>
                <Plus
                  size={18}
                  className={`shrink-0 text-[#F5B942] transition-transform duration-200 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-200 ease-out ${
                  isOpen
                    ? "grid-rows-[1fr] pb-5 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <p className="overflow-hidden text-[14px] leading-6 text-[#8D8D97]">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}