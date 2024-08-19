"use client";

import React from "react";

export default function ToursPageError({ error }: { error: Error }) {
  console.log(error);
  return <div className="text-xl font-bold">Something went wrong...</div>;
}
