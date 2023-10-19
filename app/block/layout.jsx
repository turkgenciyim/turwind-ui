"use client";
import React from "react";
import Prism from "prismjs";
import "./highlight.css";
import { useEffect } from "react";
export default function BlockLayout({ children }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <section className="container mx-auto">
      <h2 className="my-12 text-4xl font-bold text-white">Navigations</h2>
      {children}
    </section>
  );
}
