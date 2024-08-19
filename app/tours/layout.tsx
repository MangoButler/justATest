import Link from "next/link";
import React from "react";

export default function ToursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header className="py-2 w-1/2 bg-slate-500 rounded mb-4">
        <Link href="/tours">
          <h1 className="text-3xl text-white text-center">
            Explore our Tours!
          </h1>
        </Link>
      </header>
      {children}
    </div>
  );
}
