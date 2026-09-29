"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Small timeout to ensure DOM is updated after navigation
    const timeoutId = setTimeout(() => {
      const observerCallback: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      };

      const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, 
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);
      
      const elements = document.querySelectorAll(".scroll-reveal, .scroll-fade");
      elements.forEach((el) => observer.observe(el));

      return () => {
        elements.forEach((el) => observer.unobserve(el));
        observer.disconnect();
      };
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}
