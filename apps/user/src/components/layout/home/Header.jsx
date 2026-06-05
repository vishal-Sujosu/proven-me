'use client';

import { ChevronDown } from "lucide-react";
import { Check } from "lucide-react";
import { Button } from "../../../../../../packages/ui";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useProvenMeTheme } from "@/styles/theme/ThemeProvider";


const navItems = [
  {key:1 ,label:"Home" ,link:'/'},
  {key :2 ,label:"Candidates" ,link:'candidate'},
  {key :3 ,label:"Companies" ,link:'company'},
  {key :4 ,label:"Colleges" ,link:'college'},
  {key :5 ,label:"Tests" ,link:'test'},
  {key :6 ,label:"Challenges" ,link:'challenge'},
  {key :7 ,label:"Community" ,link:'community'},
  {key :8 ,label:"Pulse" ,link:'pulse'},
  {key :9 ,label:"Pricing" ,link:'pricing'},  

];

const Header = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => setIsLoaded(true), []);

  const { theme, setTheme } = useProvenMeTheme();

  if (!isLoaded) {
    return (
      <div className="flex h-screen items-center justify-center">
        loadingg...
        {/* <loader className="size-16 animate-spin rounded-full border-4 border-t-violet-500 border-gray-200" /> */}
      </div>
    );
  }
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--l2)] bg-[var(--s1)]/90 backdrop-blur-xl">
      <div className="container flex h-16 items-center gap-3">
        <a href="/" className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl bg-[var(--acc)] text-white shadow-[var(--sh)]">
            <Check className="size-5" strokeWidth={3} />
          </span>

          <span className="text-lg font-black brand-text">ProvenMe</span>
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item?.link || ""}
              className={`sb-item ${item.label === "Home" ? "on" : ""}`}
            >
              {item?.label || ""}
            </a>
          ))}

          <a href="#" className="sb-item">
            Apps
            <ChevronDown className="size-3.5" />
          </a>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="surface-2 px-3 py-2 text-sm font-semibold outline-none"
          >
            <option value="dark">🌙 Dark</option>
            <option value="light">☀️ Light</option>
          </select>

          <Button className="btn btn-ghost hidden sm:inline-flex">
            Log in
          </Button>

          <Button className="btn btn-primary">Start free</Button>

          <button
            type="button"
            className="surface-2 flex size-10 items-center justify-center lg:hidden"
            aria-label="Open navigation"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
