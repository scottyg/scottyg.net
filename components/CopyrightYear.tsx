"use client";

import { useEffect, useState } from "react";

/**
 * Pages are prerendered at build time, so a server-rendered year would freeze
 * at whenever the site was last deployed. Start with the build year (so the
 * markup matches on hydration) and correct it on the client.
 */
export default function CopyrightYear({ buildYear }: { buildYear: number }) {
  const [year, setYear] = useState(buildYear);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return <>{year}</>;
}
