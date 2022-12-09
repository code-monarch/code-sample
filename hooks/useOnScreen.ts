import React, { useState, useEffect, RefObject } from "react";

interface IUseOnScreenProps {
  ref: RefObject<HTMLDivElement>;
  rootMargin: string;
}

/** This hook allows you to easily detect when an element is visible on the screen
 *  as well as specify how much of the element should be visible before being considered on screen.
 */
export function useOnScreen({ ref, rootMargin }:IUseOnScreenProps) {
  /** State and setter for storing whether element is visible
   */
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observedNode = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (observedNode) {
      observer.observe(observedNode);
    }
    return () => {
        if (observedNode) {
          observer.unobserve(observedNode);
        };
    };
  }, [ref, rootMargin]); // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting;
}
