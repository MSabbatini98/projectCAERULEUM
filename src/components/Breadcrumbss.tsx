"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";


export default function Breadcrumbs() {
  const pathname = usePathname(); 

  const segmentedURL = pathname.split("/").filter(Boolean);

  return (
    <nav aria-label="breadcrumb">
      <ol >
        <li>
          <Link href="/">Home</Link>
        </li>
        {segmentedURL.map((segment, index) => {

          const href = "/" + segmentedURL.slice(0, index + 1).join("/");
          const isLast = index === segmentedURL.length - 1;

          const label = segment
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase());

          return (
            <Fragment key={href}>

              <li>›</li>
              <li>
                {isLast ? (
                  <span aria-current="page">{label}</span>
                ) : (
                  <Link href={href}>{label}</Link>
                )}
              </li>
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}