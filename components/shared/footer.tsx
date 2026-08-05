"use client";
import Link from "next/link";
import {
  ArrowUpRight,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Users,
} from "lucide-react";

import { Separator } from "@/components/ui/separator";

const serviceLinks = [
  { label: "Home cleaning", href: "#services" },
  { label: "Handyman help", href: "#services" },
  { label: "Lawn care", href: "#services" },
  { label: "Moving support", href: "#services" },
];

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Become a pro", href: "#professionals" },
  { label: "Help center", href: "#help" },
];

function SocialLink({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      aria-label={label}
      className="inline-flex size-9 items-center justify-center rounded-full border border-primary-foreground/15 text-primary-foreground/70 transition-colors hover:border-primary-foreground/40 hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      href={href}
    >
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-10 lg:grid-cols-[1.35fr_1fr_1fr_1.15fr] lg:gap-8">
          <div className="col-span-2 max-w-sm lg:col-span-1">
            <Link
              className="inline-flex items-center gap-2 font-mono text-lg font-semibold tracking-tight"
              href="#top"
            >
              FixItNow
            </Link>
            <p className="mt-5 text-pretty text-sm leading-6 text-primary-foreground/65">
              Trusted help for the homes, spaces, and everyday projects that
              matter most.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <SocialLink label="Fixly community" href="#community">
                <Users aria-hidden="true" />
              </SocialLink>
              <SocialLink label="Fixly updates" href="#updates">
                <MessageCircle aria-hidden="true" />
              </SocialLink>
              <SocialLink label="Fixly website" href="#website">
                <Globe2 aria-hidden="true" />
              </SocialLink>
            </div>
          </div>

          <nav aria-label="Services">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/50">
              Services
            </h2>
            <ul className="mt-5 flex flex-col items-start gap-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/50">
              Company
            </h2>
            <ul className="mt-5 flex flex-col items-start gap-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-2 sm:col-span-1 lg:col-span-1">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/50">
              Get in touch
            </h2>
            <div className="mt-5 flex flex-col gap-3 text-sm text-primary-foreground/75">
              <a
                className="flex min-w-0 items-center gap-3 break-words transition-colors hover:text-primary-foreground"
                href="tel:+18005550142"
              >
                <Phone aria-hidden="true" /> (800) 555-0142
              </a>
              <a
                className="flex min-w-0 items-center gap-3 break-all transition-colors hover:text-primary-foreground"
                href="mailto:hello@fixly.com"
              >
                <Mail aria-hidden="true" /> hello@fixitnow.com
              </a>
              <span className="flex min-w-0 items-center gap-3">
                <MapPin aria-hidden="true" /> Serving your neighborhood
              </span>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-primary-foreground/15" />

        <div className="flex flex-col gap-4 text-xs text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 FixItNow, Inc. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link
              className="transition-colors hover:text-primary-foreground"
              href="#privacy"
            >
              Privacy
            </Link>
            <Link
              className="transition-colors hover:text-primary-foreground"
              href="#terms"
            >
              Terms
            </Link>
            <Link
              className="transition-colors hover:text-primary-foreground"
              href="#accessibility"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
