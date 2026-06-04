"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  ...props
}) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();

    // safety guard for SSR edge cases
    if (typeof document !== "undefined") {
      document.body.classList.add("page-transition");
    }

    // wait for animation to start
    await sleep(300);

    // trigger navigation (do NOT delay this too much)
    router.push(href);

    // cleanup AFTER navigation starts (non-blocking)
    setTimeout(() => {
      if (typeof document !== "undefined") {
        document.body.classList.remove("page-transition");
      }
    }, 700);
  };

  return (
    <Link href={href} {...props} onClick={handleTransition}>
      {children}
    </Link>
  );
};