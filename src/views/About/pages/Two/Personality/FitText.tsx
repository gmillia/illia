import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

interface FitTextProps {
  /** Higher compressor -> smaller text (react-fittext convention). */
  compressor?: number;
  children?: ReactNode;
}

/**
 * Minimal replacement for @kennethormandy/react-fittext (unmaintained,
 * incompatible with modern React). Mirrors the original's vertical mode:
 * fontSize = textRunHeight / (compressor * 10), measured once on mount.
 * Inside the desktop vertical-writing header this settles at ~23px,
 * exactly like the original site.
 */
const FitText = ({ compressor = 1, children }: FitTextProps) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const [fontSize, setFontSize] = useState<number | undefined>(undefined);

  useEffect(() => {
    const el = spanRef.current;
    if (el && fontSize === undefined) {
      setFontSize(el.offsetHeight / (compressor * 10));
    }
  }, [compressor, fontSize]);

  return (
    <div style={fontSize !== undefined ? { fontSize } : undefined}>
      <span ref={spanRef}>{children}</span>
    </div>
  );
};

export default FitText;
