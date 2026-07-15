"use client";
import { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  animation?: "fade" | "slide-up" | "slide-left" | "slide-right" | "scale";
  delay?: number;
}

export default function AnimateOnScroll({
  children,
  animation = "fade",
  delay = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [delay]);

  const animationClass = {
    fade: "reveal-fade",
    "slide-up": "reveal-up",
    "slide-left": "reveal-left",
    "slide-right": "reveal-right",
    scale: "reveal-scale",
  }[animation];

  return (
    <div
      ref={ref}
      className={isVisible ? animationClass : "opacity-0"}
      style={{
        transitionProperty: isVisible ? "none" : "opacity",
        transitionDuration: "0.7s",
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {children}
    </div>
  );
}
