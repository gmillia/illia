import Box from '@mui/material/Box';
import type { ReactNode } from 'react';

interface BackgroundImageProps {
  background?: string;
  children?: ReactNode;
  minHeight?: number | string;
}

const BackgroundImage = ({ background, children, minHeight = 'auto' }: BackgroundImageProps) => {
  return (
    <Box
      sx={{
        background: `url(${background}) no-repeat center`,
        backgroundSize: 'cover !important',
        flex: 'auto',
        display: 'flex',
        width: '100%',
        height: '100%',
        minHeight,
      }}
    >
      {children}
    </Box>
  );
};

export default BackgroundImage;
