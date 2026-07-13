import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';

// Components
import { Menu } from 'components';

/** App shell: navbar on top, the routed view below. */
const Desktop = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(#000000, #242424)',
        minHeight: '100vh',
        height: 'auto',
      }}
    >
      <Menu />
      <Outlet />
    </Box>
  );
};

export default Desktop;
