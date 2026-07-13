import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';

interface DelayProps {
  delayBy?: number;
  children?: ReactNode;
}

/** Renders children only after `delayBy` milliseconds. */
const Delay = ({ delayBy = 0, children }: DelayProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, delayBy);

    return () => clearTimeout(timer);
  }, [delayBy]);

  return show ? children : null;
};

export default Delay;
