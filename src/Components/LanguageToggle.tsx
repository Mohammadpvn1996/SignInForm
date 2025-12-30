"use client";

import * as React from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = React.useTransition();

  const handleLocaleChange = React.useCallback(
    (newLocale: Locale) => {
      if (newLocale === locale) return;

      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const navigate = () => {
        startTransition(() => {
          router.replace(pathname, { locale: newLocale });
        });
      };

      const canUseViewTransitions =
        !prefersReducedMotion &&
        typeof document !== "undefined" &&
        "startViewTransition" in document;

      if (canUseViewTransitions) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (document as any).startViewTransition(navigate);
        return;
      }

      navigate();
    },
    [locale, pathname, router]
  );

  const isEnglish = locale === "en";

  return (
    <div className="flex items-center gap-3">
      <span
        className={cn(
          "text-sm font-medium text-muted-foreground cursor-pointer select-none transition-colors hover:text-foreground",
          isPending && "opacity-70 pointer-events-none"
        )}
        onClick={() => handleLocaleChange("fa")}
      >
        FA
      </span>
      <button
        type="button"
        onClick={() => handleLocaleChange(isEnglish ? "fa" : "en")}
        disabled={isPending}
        className={cn(
          "relative inline-flex h-6 w-11 items-center rounded-full bg-black dark:bg-white/20 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-ring",
          isPending && "opacity-80 cursor-not-allowed"
        )}
        role="switch"
        aria-checked={isEnglish}
        aria-label="Toggle language"
        aria-disabled={isPending}
      >
        <span
          className={cn(
            "inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-200 ease-in-out",
            isEnglish ? "translate-x-6" : "translate-x-0.5"
          )}
        />
      </button>
      <span
        className={cn(
          "text-sm font-medium text-muted-foreground cursor-pointer select-none transition-colors hover:text-foreground",
          isPending && "opacity-70 pointer-events-none"
        )}
        onClick={() => handleLocaleChange("en")}
      >
        EN
      </span>
    </div>
  );
}
