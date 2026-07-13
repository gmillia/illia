import Box from '@mui/material/Box';
import type { CSSProperties, ReactNode } from 'react';

interface ForegroundProps {
  children?: ReactNode;
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  dark?: boolean;
}

/** Semi-transparent overlay used on top of background images. */
const Foreground = ({
  children,
  align = 'flex-start',
  justify = 'flex-start',
  dark = true,
}: ForegroundProps) => {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        alignItems: align,
        justifyContent: justify,
        background: dark ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)',
        color: dark ? 'white' : 'black',
        fontFamily: 'Cinzel, serif',
        fontSize: 25,
        fontWeight: 500,
      }}
    >
      {children}
    </Box>
  );
};

export default Foreground;
