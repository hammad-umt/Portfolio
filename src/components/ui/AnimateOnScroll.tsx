"use client";
import { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export default function ScrollFade({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // fade in
        } else {
          setIsVisible(false); // fade out
        }
      },
      { threshold: 0.4 } // trigger when 30% visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={isVisible ? "fade-in" : "fade-out"}
    >
      {children}
    </div>
  );
}
