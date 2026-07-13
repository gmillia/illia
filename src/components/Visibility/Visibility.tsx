import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

const hiddenStyle = {
  display: 'flex',
  width: '100%',
  height: '100%',
  visibility: 'hidden',
} as const;

const sentinelStyle = {
  width: 0,
  height: 0,
  margin: 0,
  padding: 0,
  border: 'none',
} as const;

interface VisibilityProps {
  children?: ReactNode;
  active?: boolean;
  /**
   * Mirrors react-visibility-sensor's `offset={{ top: -190 }}`: a negative
   * top made elements count as visible before they entered the viewport.
   */
  offset?: { top?: number };
  onChange?: (visible: boolean) => void;
}

/**
 * Hides children component(s) while keeping the space in the page. In Mobile
 * views, elements that are fading in seem to be appearing out of nowhere,
 * thus taking space and shifting elements. Wrapping an element keeps its
 * dimensions on the page, so it just fades in.
 *
 * Previously powered by react-visibility-sensor (unmaintained); now a plain
 * IntersectionObserver. A zero-size sentinel locates the rendered element so
 * no extra wrapper is added around the children (which would change layout).
 */
const Visibility = ({ children, active = true, offset = {}, onChange }: VisibilityProps) => {
  const sentinelRef = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);
  const offsetTop = offset.top ?? 0;

  useEffect(() => {
    if (!active) return;

    // The element right after the sentinel: either the children themselves
    // or the same-size hidden placeholder — both occupy the same box.
    const target = sentinelRef.current?.nextElementSibling;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        if (onChange) onChange(entry.isIntersecting);
      },
      // offset.top of -190 -> expand the viewport's top bound by 190px
      { rootMargin: `${-offsetTop}px 0px 0px 0px`, threshold: 0 },
    );

    observer.observe(target);
    return () => observer.disconnect();
    // Re-observe whenever the rendered sibling swaps (hidden <-> visible).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, offsetTop, visible]);

  return (
    <>
      <span ref={sentinelRef} aria-hidden style={sentinelStyle} />
      {visible ? children : <div style={hiddenStyle}>{children}</div>}
    </>
  );
};

export default Visibility;
