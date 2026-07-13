import Box from '@mui/material/Box';
import type { ReactNode } from 'react';

interface NavbarProps {
  children?: ReactNode;
  isDesktop?: boolean;
}

const Navbar = ({ children, isDesktop = true }: NavbarProps) => {
  return (
    <Box
      sx={{
        paddingLeft: '15px',
        paddingRight: '15px',
        height: 50,
        minHeight: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: isDesktop ? 'space-evenly' : 'space-between',
        background: 'black',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      {children}
    </Box>
  );
};

export default Navbar;
