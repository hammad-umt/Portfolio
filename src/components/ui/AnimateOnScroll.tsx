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
  delay = 0 
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
    fade: "fade-in",
    "slide-up": "slide-up",
    "slide-left": "slide-left",
    "slide-right": "slide-right",
    scale: "scale-in"
  }[animation];

  return (
    <div
      ref={ref}
      className={isVisible ? animationClass : "opacity-0"}
      style={{
        transitionProperty: isVisible ? "none" : "opacity",
        transitionDuration: "0.8s",
        transitionTimingFunction: "ease-out"
      }}
    >
      {children}
    </div>
  );
}
