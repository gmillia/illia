import { keyframes } from '@emotion/react';
import Box from '@mui/material/Box';

const LETTER_DURATION = 0.2;

const dropIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

interface AnimateTextProps {
  /** Array of letters. */
  textArray?: string[];
  delay?: number;
}

/**
 * Animates text one letter at a time, each letter dropping in from the top.
 * (Previously powered by react-simple-animate's AnimateGroup; now pure CSS
 * keyframes with a staggered animation-delay.)
 */
const AnimateText = ({ textArray = [], delay = 0 }: AnimateTextProps) => {
  return (
    <>
      {textArray.map((item, index) => (
        <Box
          key={index}
          component="span"
          sx={{
            display: 'inline-block',
            opacity: 0,
            animation: `${dropIn} ${LETTER_DURATION}s ease-out forwards`,
            animationDelay: `${delay + index * LETTER_DURATION}s`,
          }}
        >
          {item}
        </Box>
      ))}
    </>
  );
};

export default AnimateText;
