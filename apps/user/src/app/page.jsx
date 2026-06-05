"use client";

import {
  ArrowRight,
  ArrowLeftRight,
  Building2,
  Check,
  ChevronDown,
  GraduationCap,
  Menu,
  Moon,
    Plus,
  Target,
  Shield,
  Eye,

  UserRound,
  User,
  BriefcaseBusiness,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProvenMeTheme } from "@/styles/theme/ThemeProvider";
import { useEffect, useState } from "react";
import Header from "@/components/layout/home/Header";
import Footer from "@/components/layout/home/Footer";

const problemRows = [
  {
    icon: User,
    iconBg: "#DCFCE7",
    iconColor: "#22C55E",
    role: "Candidate",
    problem:
      '"I know JavaScript deeply but can’t prove it without a 90-minute interview."',
    workaround:
      "GitHub. Leetcode rank. Self-declared resume.",
    fails:
      "Activity, not comprehension.",
  },
  {
    icon: Building2,
    iconBg: "#EDE9FE",
    iconColor: "#7C3AED",
    role: "Employer",
    problem:
      '"30% of candidates who pass first round clearly don’t know what they claimed."',
    workaround:
      "Screening interviews. Paid testing platforms.",
    fails:
      "Expensive per candidate. No shared credential.",
  },
  {
    icon: GraduationCap,
    iconBg: "#F3E8FF",
    iconColor: "#9333EA",
    role: "College",
    problem:
      '"We have no per-student, per-skill benchmark our graduates can carry."',
    workaround:
      "Placement rates. Internship conversion.",
    fails:
      "Lagging indicators. No skill-level data.",
  },
  {
    icon: BriefcaseBusiness,
    iconBg: "#FEF3C7",
    iconColor: "#D97706",
    role: "L&D",
    problem:
      '"₹5L training program. No way to verify retention."',
    workaround:
      "End-of-course tests. Attendance.",
    fails:
      "Self-administered. Attendance ≠ learning.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Practice",
    badge: "Free, unlimited",
    description:
      "Domain-tagged MCQs across difficulty. Skill tree progression with mini-checkpoints. Weakness detection runs nightly and surfaces what you keep missing.",
    icon: Plus,
    cta: "Try the practice engine",
    ctaBtnRequired: true,
    btntext : "Try the practice engine"
  },
  {
    step: "02",
    title: "Mock exam",
    badge: "Calibrate",
    description:
      "Same format and timer as the real exam, different question pool. Immediate per-question breakdown, time vs community, readiness score before you commit.",
    icon: Target,
    cta: "Take a mock exam",
    ctaBtnRequired: false,
  },
  {
    step: "03",
    title: "Verify",
    badge: "Proctored • ₹299–999",
    description:
      "Camera, fullscreen, tab logging. MCQ, coding (Monaco), theory, optional diagram. 15-minute disconnect recovery. Server-authoritative timer.",
    icon: Shield,
    ctaBtnRequired: false,
  },
  {
    step: "04",
    title: "Human review",
    badge: "48h SLA",
    description:
      "A senior developer scores the theory and code, reviews proctoring events, applies the rubric. AI suggests; humans decide. Every decision is auditable.",
    icon: Eye,
    ctaBtnRequired: false,
  },
  {
    step: "05",
    title: "Certificate",
    badge: "Live for 2 years",
    icon: Eye,
    ctaBtnRequired: true,
     btntext : "See a live certificate",
    description:"A breathing credential at /verify/:id. Live status, employer views counter, days remaining. Embeddable widget. Public verification with no login."
  }
];

const profileViews = [
  {
    title: "Candidate",
    label: "Personal Profile",
    icon: UserRound,
    className: "border-emerald-200 bg-emerald-50 text-emerald-500",
    iconClassName: "bg-emerald-100",
  },
  {
    title: "Corporate",
    label: "Employer Profile",
    icon: Building2,
    className: "border-violet-200 bg-violet-50 text-violet-600",
    iconClassName: "bg-violet-200",
  },
  {
    title: "College",
    label: "Institution Profile",
    icon: GraduationCap,
    className: "border-violet-100 bg-violet-50/70 text-violet-400",
    iconClassName: "bg-violet-100",
  },
];

const hiringPartners = [
  "Microsoft",
  "Google",
  "TCS",
  "Infosys",
  "Wipro",
  "IBM",
  "Razorpay",
  "Swiggy",
];

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => setIsLoaded(true), []);

  const { theme, setTheme } = useProvenMeTheme();

  if (!isLoaded) {
    return (
      <div className="flex h-screen items-center justify-center">
        <loader className="size-16 animate-spin rounded-full border-4 border-t-violet-500 border-gray-200" />
      </div>
    );
  }
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--t1)]">
      <section className="section relative overflow-hidden border-b border-[var(--l2)]">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
          linear-gradient(to right, rgba(124,58,237,.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(124,58,237,.08) 1px, transparent 1px)
        `,
            backgroundSize: "48px 48px",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(124,58,237,.12), transparent 35%)",
          }}
        />

        <div className="container relative flex flex-col py-10 sm:py-14 lg:py-20">
          <div className="max-w-[700px]">
            <div className="eyebrow mb-6">The linked profile</div>

            <h1 className="h-display">One human.</h1>

            <p className="mt-2 font-serif text-3xl sm:text-5xl lg:text-7xl font-light italic text-[var(--acc)]">
              Three contextual views.
            </p>

            <p className="mt-6 max-w-[640px] text-base sm:text-lg leading-7 muted">
              The certificate is always the same. It&apos;s not re-issued per
              context — it&apos;s the same credential viewed through
              permission-gated lenses. The candidate controls what each side can
              see.
            </p>
          </div>

          <div className="surface card-lift mt-8 p-4 sm:p-6 lg:p-10">
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {profileViews.map((profile) => {
                const Icon = profile.icon;

                return (
                  <div
                    key={profile.title}
                    className="surface-2 card-lift flex h-28 sm:h-36 lg:h-40 w-full flex-col items-center justify-center"
                  >
                    <span className="mb-3 flex size-10 sm:size-12 items-center justify-center rounded-xl bg-[var(--acc-tint)] text-[var(--acc)]">
                      <Icon className="size-4 sm:size-5" />
                    </span>

                    <h2 className="text-center text-xs sm:text-sm font-extrabold">
                      {profile.title}
                    </h2>

                    <p className="mt-1 text-center text-[10px] sm:text-xs muted">
                      {profile.label}
                    </p>
                  </div>
                );
              })}
            </div>

            <p className="mx-auto mt-6 max-w-[620px] text-center text-xs sm:text-sm leading-6 muted">
              <span className="font-serif text-base sm:text-lg italic text-[var(--acc)]">
                One certificate.
              </span>{" "}
              Three permission-gated lenses. The candidate controls what each
              context can see — separated at the data model, not just the UI.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button className="btn btn-primary btn-lg w-full sm:w-auto">
              I&apos;m a candidate
              <ArrowRight className="size-4" />
            </Button>

            <Button className="btn btn-ghost btn-lg w-full sm:w-auto">
              For companies
            </Button>

            <Button className="btn btn-ghost btn-lg w-full sm:w-auto">
              For colleges
            </Button>
          </div>
        </div>
      </section>

      <section className=" bg-[var(--bg)]">
        <div className="container py-16 lg:py-20">
          <div className="text-center">
            <div className="eyebrow justify-center">
              Recognised By Hiring Teams At
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 text-center sm:grid-cols-4 lg:grid-cols-8">
              {hiringPartners.map((company) => (
                <div
                  key={company}
                  className="text-lg font-bold text-[var(--t3)] transition hover:text-[var(--t2)]"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

       <section className="section">
      <div className="container">
        <div className="max-w-3xl">
          <div className="eyebrow">
            The Problem
          </div>

          <h2 className="mt-6 text-[clamp(3rem,6vw,5rem)] font-black leading-[0.95] tracking-tight">
            Everyone has credentials.
            <br />
            <span className="font-serif font-light italic text-[var(--acc)]">
              Nobody trusts them.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-9 muted">
            Every stakeholder has the same problem framed
            differently. LinkedIn skill badges are
            self-assessed. Coursera certifies course
            completion, not competency. HackerRank tests
            candidates the employer doesn&apos;t know.
            <span className="font-bold text-[var(--t1)]">
              {" "}
              What&apos;s missing is a shared layer all
              three can trust at once.
            </span>
          </p>
        </div>

        {/* TABLE */}

        <div className="surface mt-14 overflow-hidden">
          {/* Header */}

          <div className="grid grid-cols-[170px_1.5fr_1.3fr_1.1fr] border-b border-[var(--l2)] bg-[var(--s2)]">
            <div className="px-6 py-5 text-xs font-black uppercase tracking-[0.12em] text-[var(--t3)]">
              Who
            </div>

            <div className="px-6 py-5 text-xs font-black uppercase tracking-[0.12em] text-[var(--t3)]">
              Their Problem
            </div>

            <div className="px-6 py-5 text-xs font-black uppercase tracking-[0.12em] text-[var(--t3)]">
              Today&apos;s Workaround
            </div>

            <div className="px-6 py-5 text-xs font-black uppercase tracking-[0.12em] text-[var(--t3)]">
              Why It Fails
            </div>
          </div>

          {problemRows.map((row) => {
            const Icon = row.icon;

            return (
              <div
                key={row.role}
                className="grid grid-cols-[170px_1.5fr_1.3fr_1.1fr] border-b border-[var(--l2)] last:border-b-0"
              >
                {/* WHO */}

                <div className="flex items-center gap-4 px-6 py-8">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{
                      background: row.iconBg,
                    }}
                  >
                    <Icon
                      size={18}
                      style={{
                        color: row.iconColor,
                      }}
                    />
                  </div>

                  <span className="font-bold">
                    {row.role}
                  </span>
                </div>

                {/* PROBLEM */}

                <div className="px-6 py-8">
                  <p className="font-serif text-[15px] italic leading-[1.4] text-[var(--t1)]">
                    {row.problem}
                  </p>
                </div>

                {/* WORKAROUND */}

                <div className="px-6 py-8">
                  <p className="leading-8 muted">
                    {row.workaround}
                  </p>
                </div>

                {/* FAIL */}

                <div className="px-6 py-8">
                  <p className="font-medium text-[var(--danger)]">
                    {row.fails}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

     <section className="section">
      <div className="container">
        <div className="eyebrow">
          How It Works
        </div>

        <h2 className="mt-6 max-w-5xl text-[clamp(3rem,5vw,5rem)] font-black leading-[0.95]">
          <span className="font-serif font-light italic text-[var(--acc)]">
            Free
          </span>{" "}
          builds skill.
          <br />

          <span className="font-serif font-light italic text-[var(--acc)]">
            Paid
          </span>{" "}
          proves skill.
          <br />

          <span className="font-serif font-light italic text-[var(--acc)]">
            Human review
          </span>{" "}
          ensures trust.
        </h2>

        {/* Process Card */}

        <div className="surface mt-14 overflow-hidden">
          {processSteps.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.step}
                className={`grid items-center gap-6 px-8 py-8 lg:grid-cols-[60px_72px_1fr_auto]
                  ${
                    index !== processSteps.length - 1
                      ? "border-b border-[var(--l2)]"
                      : ""
                  }`}
              >
                {/* Step */}

                <div className="text-md font-black text-[var(--t3)]">
                  {item.step}
                </div>

                {/* Icon */}

                <div className="flex h-[56px] w-[56px] items-center justify-center rounded-2xl bg-[var(--acc-tint)] text-[var(--acc)]">
                  <Icon size={24} />
                </div>

                {/* Content */}

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-3xl font-black">
                      {item.title}
                    </h3>

                    <span className="pill pill-acc">
                      {item.badge}
                    </span>
                  </div>

                  <p className="mt-3 max-w-4xl text-lg leading-8 muted">
                    {item.description}
                  </p>
                </div>

                {/* CTA only first row */}

                {item.ctaBtnRequired ? (
                  <button className="btn btn-ghost whitespace-nowrap">
                    {item.btntext}
                    <ArrowRight size={16} />
                  </button>
                ) : (
                  <div />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
    </main>
  );
}
