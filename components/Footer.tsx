import { SITE } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-10 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display font-bold text-[var(--color-charcoal)]">{SITE.name}</p>
          <p className="mt-0.5 text-sm text-[color-mix(in_srgb,var(--color-charcoal)_55%,white)]">
            {SITE.nameJa}
          </p>
          <p className="mt-1 text-sm text-[color-mix(in_srgb,var(--color-charcoal)_55%,white)]">
            {SITE.tagline}
          </p>
          <p className="mt-2 text-xs text-[color-mix(in_srgb,var(--color-charcoal)_40%,white)]">
            {SITE.owner}
          </p>
          <p className="mt-2 text-xs">
            <a
              href="/about"
              className="text-[color-mix(in_srgb,var(--color-charcoal)_55%,white)] hover:text-[var(--color-deep)]"
            >
              代表プロフィール
            </a>
          </p>
          <p className="mt-1 text-xs text-[color-mix(in_srgb,var(--color-charcoal)_40%,white)]">
            <a href={`mailto:${SITE.email}`} className="hover:text-[var(--color-deep)]">
              {SITE.email}
            </a>
            {" · "}
            <a href={`tel:${SITE.phone}`} className="hover:text-[var(--color-deep)]">
              {SITE.phoneDisplay}
            </a>
          </p>
        </div>
        <p className="text-xs text-[color-mix(in_srgb,var(--color-charcoal)_40%,white)]">
          © {new Date().getFullYear()} {SITE.name}
        </p>
      </div>
    </footer>
  );
}
