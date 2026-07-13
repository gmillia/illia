import { useEffect, useRef, useState } from 'react';
import type { RefObject } from 'react';

export interface UseInViewOptions {
  /** Pause observing (element is reported visible while inactive). */
  active?: boolean;
  /**
   * Expands/shrinks the viewport bounds, mirroring react-visibility-sensor's
   * `offset={{ top: -190 }}` behavior: a negative top made elements count as
   * visible 190px *before* they entered the viewport.
   */
  offsetTop?: number;
}

/**
 * IntersectionObserver-based replacement for `react-visibility-sensor`
 * (unmaintained, incompatible with modern React). Reports whether the
 * element is (partially) visible in the viewport.
 */
const useInView = <T extends Element = HTMLDivElement>({
  active = true,
  offsetTop = 0,
}: UseInViewOptions = {}): [RefObject<T | null>, boolean] => {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!active || !node) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      // offsetTop of -190 -> expand the root's top bound by 190px
      { rootMargin: `${-offsetTop}px 0px 0px 0px`, threshold: 0 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [active, offsetTop]);

  return [ref, inView];
};

export default useInView;
