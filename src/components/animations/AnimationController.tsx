"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AnimationController() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      document.documentElement.dataset.motionReady = "true";
      return;
    }

    document.documentElement.dataset.motionReady = "true";

    const context = gsap.context(() => {
      gsap.set("[data-animate-hero='background']", { scale: 1.06, autoAlpha: 0.72 });
      gsap.set("[data-animate-hero='kicker'], [data-animate-hero='host'], [data-animate-hero='lead']", {
        y: 28,
        autoAlpha: 0,
      });
      gsap.set("[data-animate-hero='band-character']", {
        y: 42,
        rotateX: -64,
        autoAlpha: 0,
        transformOrigin: "50% 70%",
      });

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .to("[data-animate-hero='background']", { scale: 1.02, autoAlpha: 1, duration: 1.35 })
        .to("[data-animate-hero='kicker']", { y: 0, autoAlpha: 1, duration: 0.58 }, "-=0.82")
        .to("[data-animate-hero='host']", { y: 0, autoAlpha: 1, duration: 0.58 }, "-=0.32")
        .to(
          "[data-animate-hero='band-character']",
          { y: 0, rotateX: 0, autoAlpha: 1, duration: 0.68, stagger: 0.045 },
          "-=0.22",
        )
        .to("[data-animate-hero='lead']", { y: 0, autoAlpha: 1, duration: 0.62 }, "-=0.28");

      gsap.utils.toArray<HTMLElement>("[data-animate-section]").forEach((section) => {
        const heading = section.querySelector<HTMLElement>("[data-animate-heading]");
        const items = gsap.utils.toArray<HTMLElement>(section.querySelectorAll("[data-animate-item]"));
        const targets = [heading, ...items].filter(Boolean) as HTMLElement[];

        if (targets.length === 0) {
          return;
        }

        gsap.set(targets, { y: 34, autoAlpha: 0 });

        gsap.to(targets, {
          y: 0,
          autoAlpha: 1,
          duration: 0.72,
          ease: "power3.out",
          stagger: 0.09,
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true,
          },
        });
      });
    });

    return () => context.revert();
  }, []);

  return null;
}
