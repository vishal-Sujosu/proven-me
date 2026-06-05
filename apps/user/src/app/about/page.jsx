"use client";

import Footer from "@/components/layout/home/Footer";
import Header from "@/components/layout/home/Header";
import {
  ArrowRight,
  Check,
  Menu,
  Moon,
  Plus,
  GraduationCap,
  BookOpen,
  Shield,
  BadgeCheck,
} from "lucide-react";
import {

  GitBranch,
  Target,

  Eye,
    Trophy,
  Flame,
  Users,
  Share2,
  Zap,

} from "lucide-react";

const journeySteps = [
  {
    id: "01",
    title: "Practice",
    desc: "Domain MCQs, free unlimited",
    icon: Plus,
  },
  {
    id: "02",
    title: "Skill tree",
    desc: "Nodes unlock as you progress",
    icon: GitBranch,
  },
  {
    id: "03",
    title: "Mock exam",
    desc: "Calibrate your readiness",
    icon: Target,
  },
  {
    id: "04",
    title: "Real exam",
    desc: "Proctored • ₹299–999",
    icon: Shield,
  },
  {
    id: "05",
    title: "Human review",
    desc: "48h SLA • senior dev grades",
    icon: Eye,
  },
  {
    id: "06",
    title: "Live credential",
    desc: "Public verify • 2yr cycle",
    icon: BadgeCheck,
  },
];

const highlights = [
  {
    icon: Plus,
    title: "10 MCQs",
    desc: "Free without signup",
  },
  {
    icon: Shield,
    title: "First 50 exams",
    desc: "50% off Founder's Rate",
  },
  {
    icon: GraduationCap,
    title: "Student rate",
    desc: "30–50% off (verified)",
  },
  {
    icon: BadgeCheck,
    title: "Live credential",
    desc: "Public verify page",
  },
];

const featureCards = [
  {
    type: "free",
    title: "Free practice",
    badge: "FREE",
    features: [
      "Unlimited MCQs",
      "XP & streaks",
      "Skill tree progress",
      "Readiness score",
      "Community leaderboard",
    ],
  },
  {
    type: "paid",
    title: "Proctored exam",
    badge: "PAID",
    features: [
      "Identity verification",
      "Browser monitoring",
      "Timed assessment",
      "Human reviewed",
      "Employer-ready credential",
    ],
  },
  {
    type: "paid",
    title: "Verified credential",
    badge: "PAID",
    features: [
      "Public verification page",
      "2-year validity cycle",
      "Employer share link",
      "QR verification",
      "Credential history",
    ],
  },
];

const dedicationItems = [
  {
    icon: Zap,
    title: "Rolling 90-day XP",
    subtitle: "3,840 XP earned",
    score: "+310",
  },
  {
    icon: Flame,
    title: "Streak (current)",
    subtitle: "22-day streak",
    score: "+110",
  },
  {
    icon: Trophy,
    title: "Challenges",
    subtitle: "Top 10 × 2 this month",
    score: "+85",
  },
  {
    icon: Users,
    title: "Referrals (90d)",
    subtitle: "1 exam purchase",
    score: "+120",
  },
  {
    icon: Share2,
    title: "Social actions",
    subtitle: "Cert shared, Discord linked",
    score: "+55",
  },
  {
    icon: BadgeCheck,
    title: "Certification",
    subtitle: "1 active Verified",
    score: "+62",
  },
];



export default function CandidatesPage() {
  return (
    <main className="bg-[var(--bg)] text-[var(--t1)]">
 

      <HeroSection />

   <CandidateJourneySection />
      <FeatureSection />
      <DedicationSection />
      <CandidateCTASection />
   
    </main>
  );
}


function HeroSection() {
  return (
    <section className="section relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
          linear-gradient(to right, rgba(124,58,237,.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(124,58,237,.05) 1px, transparent 1px)
        `,
          backgroundSize: "42px 42px",
        }}
      />

      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT */}

          <div>
            <div className="eyebrow">
              For Candidates
            </div>

            <h1 className="mt-6 h-display">
              Test. Learn.
              <br />
              <em>Prove.</em>
              <br />
              Carry one
              <br />
              credential.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 muted">
              Practice free. Earn XP from your first
              question. Take a real exam when your
              readiness score says you're ready. The
              certificate you earn is the same whether
              you're an independent professional or a
              student under a college cohort.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="btn btn-primary btn-lg">
                Start free practice
                <ArrowRight size={16} />
              </button>

              <button className="btn btn-ghost btn-lg">
                Browse tests
              </button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-3"
                  >
                    <div className="surface-2 flex h-10 w-10 items-center justify-center">
                      <Icon
                        size={16}
                        className="text-[var(--acc)]"
                      />
                    </div>

                    <div>
                      <div className="font-bold">
                        {item.title}
                      </div>

                      <div className="text-sm muted">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT */}

          <div className="surface overflow-hidden">
            <div
              className="p-8 text-white"
              style={{
                background:
                  "linear-gradient(180deg,#081529 0%,#0f2341 100%)",
              }}
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="pill pill-green">
                  VERIFIED CREDENTIAL
                </span>

                <span className="pill pill-green">
                  LIVE
                </span>
              </div>

              <h3 className="text-3xl font-black">
                Arjun Mehta
              </h3>

              <p className="mt-2 text-white/70">
                JavaScript · Intermediate
              </p>

              <div className="mt-10 grid grid-cols-4 gap-6 text-sm">
                <div>
                  <div className="text-white/50">
                    Score
                  </div>
                  <div className="mt-1 font-black">
                    High Distinction
                  </div>
                </div>

                <div>
                  <div className="text-white/50">
                    Range
                  </div>
                  <div className="mt-1 font-black">
                    85–100%
                  </div>
                </div>

                <div>
                  <div className="text-white/50">
                    Issued
                  </div>
                  <div className="mt-1 font-black">
                    Jan 2026
                  </div>
                </div>

                <div>
                  <div className="text-white/50">
                    Valid
                  </div>
                  <div className="mt-1 font-black">
                    2028
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 p-6 text-center">
              <div>
                <div className="text-2xl font-black text-[var(--green)]">
                  68
                </div>

                <div className="text-xs muted">
                  Days Active
                </div>
              </div>

              <div>
                <div className="text-2xl font-black">
                  12
                </div>

                <div className="text-xs muted">
                  Employer Views
                </div>
              </div>

              <div>
                <div className="text-2xl font-black">
                  662
                </div>

                <div className="text-xs muted">
                  Days Left
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

function CandidateJourneySection() {
  return (
    <section className="section">
      <div className="container">
        <div className="eyebrow">
          The Candidate Journey
        </div>

        <h2 className="h-1 mt-6 max-w-5xl">
          From <em>"I think I know this"</em>
          <br />
          to a credential
          <em> employers trust.</em>
        </h2>

        <div className="mt-32 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {journeySteps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="surface-2 card-lift p-6"
              >
                <div className="text-xs font-black text-[var(--t3)]">
                  {step.id}
                </div>

                <div className="mt-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--acc-tint)] text-[var(--acc)]">
                  <Icon size={18} />
                </div>

                <h3 className="mt-5 h-4">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm muted">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeatureSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="eyebrow">
          Everything in the candidate product
        </div>

        <h2 className="h-1 mt-6">
          Free builds the skill.
          <br />
          <em>Paid proves it.</em>
        </h2>

        {/* <p className="mt-6 max-w-2xl muted">
          Everyone can learn for free. The paid exam is
          where trust is created through proctoring,
          review and verification.
        </p> */}

        <div className="mt-32 grid gap-6 lg:grid-cols-3">
          {featureCards.map((card) => (
            <div
              key={card.title}
              className="surface card-lift overflow-hidden"
            >
              <div
                className={`h-1 ${
                  card.type === "free"
                    ? "bg-[var(--green)]"
                    : "bg-[var(--acc)]"
                }`}
              />

              <div className="p-6">
                <div className="mb-5">
                  <span
                    className={
                      card.type === "free"
                        ? "pill pill-green"
                        : "pill pill-acc"
                    }
                  >
                    {card.badge}
                  </span>
                </div>

                <h3 className="h-3">
                  {card.title}
                </h3>

                <ul className="mt-6 space-y-4">
                  {card.features.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--acc-tint)] text-[var(--acc)]">
                        <Check size={12} />
                      </span>

                      <span className="text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className="btn btn-ghost mt-8 w-full">
                  Learn more
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Comparison Grid */}

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="surface-2 p-5">
            <div className="pill pill-green">
              FREE
            </div>

            <h4 className="mt-4 h-4">
              First 10 questions
            </h4>

            <p className="mt-2 text-sm muted">
              No account required. Start immediately.
            </p>
          </div>

          <div className="surface-2 p-5">
            <div className="pill pill-green">
              FREE
            </div>

            <h4 className="mt-4 h-4">
              Skill tree
            </h4>

            <p className="mt-2 text-sm muted">
              Build XP and unlock new nodes.
            </p>
          </div>

          <div className="surface-2 p-5">
            <div className="pill pill-acc">
              PAID
            </div>

            <h4 className="mt-4 h-4">
              Real exam
            </h4>

            <p className="mt-2 text-sm muted">
              Timed and proctored certification.
            </p>
          </div>

          <div className="surface-2 p-5">
            <div className="pill pill-acc">
              PAID
            </div>

            <h4 className="mt-4 h-4">
              Verified credential
            </h4>

            <p className="mt-2 text-sm muted">
              Public verification and employer trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DedicationSection() {
  return (
    <section className="section bg-[var(--s1)]">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT */}

          <div>
            <div className="eyebrow">
              The Hardest Thing To Earn
            </div>

            <h2 className="h-1 mt-6">
              Reach <em>Legend</em>
              <br />
              and a complete
              <br />
              proctored exam
              <em> unlocks.</em>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 muted">
              A free proctored exam is worth ₹299–999 in
              real money — and it's not a discount.
              It's the entire exam with full review.
              Earning it requires months of demonstrated
              dedication across practice, social and
              community contribution.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              <span className="pill pill-gold">
                Bronze
              </span>

              <span className="pill">
                Silver
              </span>

              <span className="pill pill-gold">
                Gold
              </span>

              <span className="pill">
                Diamond
              </span>

              <span className="pill pill-acc">
                Legend
              </span>
            </div>
          </div>

          {/* RIGHT */}

          <div className="surface overflow-hidden">
            <div className="border-b border-[var(--l2)] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="eyebrow">
                    Dedication Score
                  </div>

                  <p className="mt-2 text-sm muted">
                    Rolling 90-day composite · tier Diamond
                  </p>
                </div>

                <div className="text-right">
                  <div
                    className="font-serif text-5xl italic"
                    style={{
                      color: "var(--sky)",
                    }}
                  >
                    742
                  </div>

                  <div className="text-sm muted">
                    /1000
                  </div>
                </div>
              </div>
            </div>

            {/* Progress */}

            <div className="p-6">
              <div className="h-2 overflow-hidden rounded-full bg-[var(--l1)]">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: "74%",
                    background:
                      "linear-gradient(90deg,var(--acc),var(--mint))",
                  }}
                />
              </div>

              <div className="mt-3 flex justify-between text-xs font-semibold muted">
                <span>0 Inactive</span>
                <span>500 Gold</span>
                <span>700+ Diamond</span>
                <span>900+ Legend</span>
              </div>

              {/* Score Breakdown */}

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {dedicationItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-center gap-3"
                    >
                      <div className="surface-2 flex h-10 w-10 items-center justify-center">
                        <Icon
                          size={16}
                          className="text-[var(--acc)]"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="font-semibold">
                          {item.title}
                        </div>

                        <div className="text-xs muted">
                          {item.subtitle}
                        </div>
                      </div>

                      <div className="font-bold text-[var(--gold)]">
                        {item.score}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CandidateCTASection() {
  return (
    <section className="section border-t border-[var(--l2)]">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="h-1">
            Your skills
            <em> deserve </em>
            a
            <br />
            credential that says so.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 muted">
            10 free MCQs, no signup. Start now and the
            next time someone asks if you really know
            your stuff — you'll have an answer.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button className="btn btn-primary btn-lg w-full sm:w-auto">
              Open the candidate dashboard
              <ArrowRight size={16} />
            </button>

            <button className="btn btn-ghost btn-lg w-full sm:w-auto">
              See pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

