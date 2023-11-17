import { RefObject, useEffect, useState } from 'react';

interface IntersectionOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export function useInViewport(
  elementRef: RefObject<Element>,
  unobserveOnIntersect: boolean,
  options: IntersectionOptions = {},
  shouldObserve = true,
): boolean {
  const [intersect, setIntersect] = useState(false);
  const [isUnobserved, setIsUnobserved] = useState(false);

  useEffect(() => {
    if (!elementRef?.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      const { isIntersecting, target } = entry;

      setIntersect(isIntersecting);

      if (isIntersecting && unobserveOnIntersect) {
        observer.unobserve(target);
        setIsUnobserved(true);
      }
    }, options);

    if (!isUnobserved && shouldObserve) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [elementRef, unobserveOnIntersect, options, isUnobserved, shouldObserve]);

  return intersect;
}
