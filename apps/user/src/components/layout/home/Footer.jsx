import { Check } from "lucide-react";

const footerLinks = {
  product: [
    "For Candidates",
    "For Companies",
    "For Colleges",
    "Tests Catalogue",
    "Pricing",
    "Live Pulse",
  ],

  platform: [
    "Candidate Dashboard",
    "Corporate Workspace",
    "College Dashboard",
    "Verify a Credential",
  ],

  company: [
    "About",
    "Why ProvenMe",
    "Reviewer Network",
    "Press & Brand",
    "Contact",
  ],

  resources: [
    "Blog",
    "Exam Insights",
    "Discord Community",
    "College Workshops",
    "Ambassador Program",
    "Status",
  ],
};

function Footer() {
  return (
    <footer className="border-t border-[var(--l2)] bg-[var(--s1)]">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          {/* Brand */}

          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--acc)] text-white">
                <Check size={18} />
              </div>

              <span className="brand-text text-xl font-black">
                ProvenMe
              </span>
            </div>

            <p className="mt-5 max-w-xs leading-7 muted">
              The infrastructure that makes
              <em className="text-[var(--acc)]">
                {" "}
                "I know this"
              </em>{" "}
              mean something provable to anyone
              who asks.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="pill pill-green">
                Platform Live
              </span>

              <span className="pill">
                India · Global
              </span>
            </div>
          </div>

          {/* Product */}

          <FooterColumn
            title="Product"
            links={footerLinks.product}
          />

          {/* Platform */}

          <FooterColumn
            title="Platform"
            links={footerLinks.platform}
          />

          {/* Company */}

          <FooterColumn
            title="Company"
            links={footerLinks.company}
          />

          {/* Resources */}

          <FooterColumn
            title="Resources"
            links={footerLinks.resources}
          />
        </div>

        {/* Bottom Bar */}

        <div className="mt-16 flex flex-col gap-4 border-t border-[var(--l2)] pt-8 text-sm muted lg:flex-row lg:items-center lg:justify-between">
          <p>
            © 2026 ProvenMe Technologies Pvt. Ltd.
            Built by humans who review every exam.
          </p>

          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-[var(--acc)]">
              Privacy
            </a>

            <a href="#" className="hover:text-[var(--acc)]">
              Terms
            </a>

            <a href="#" className="hover:text-[var(--acc)]">
              Trust Centre
            </a>

            <a href="#" className="hover:text-[var(--acc)]">
              DPA
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


export default Footer;

function FooterColumn({ title, links }) {
  return (
    <div>
      <div className="mb-5 text-xs font-black uppercase tracking-[0.18em] text-[var(--t3)]">
        {title}
      </div>

      <div className="space-y-4">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="block text-sm transition hover:text-[var(--acc)]"
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}