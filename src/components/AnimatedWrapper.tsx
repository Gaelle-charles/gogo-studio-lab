
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedWrapperProps {
  children: React.ReactNode;
  className?: string;
  animation?: 
    | "fade-in" 
    | "slide-up" 
    | "slide-in-left" 
    | "slide-in-right" 
    | "scale" 
    | "none";
  delay?: number;
  threshold?: number;
  once?: boolean;
}

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
  children,
  className = "",
  animation = "fade-in",
  delay = 0,
  threshold = 0.1,
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) observer.unobserve(ref.current);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [once, threshold]);

  const animationClass = animation === "none" ? "" : `animate-${animation}`;

  return (
    <div
      ref={ref}
      className={cn(
        className,
        isVisible && animation !== "none" ? animationClass : "opacity-0",
        "transition-all duration-700"
      )}
      style={{
        transitionDelay: `${delay}ms`,
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedWrapper;
