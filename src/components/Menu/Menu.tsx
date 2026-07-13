import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useLocation } from 'react-router-dom';

import Resume from 'assets/resume/Resume.pdf';

// Components
import Desktop from './Desktop';
import Mobile from './Mobile';

const options = [
  {
    path: '/',
    name: 'HOME',
  },
  {
    path: '/about',
    name: 'ABOUT',
  },
  {
    path: '/portfolio',
    name: 'PORTFOLIO',
  },
  {
    path: Resume,
    name: 'RESUME',
  },
  {
    path: '/contact',
    name: 'CONTACT',
  },
];

export type MenuOptions = typeof options;

const Menu = () => {
  const location = useLocation();
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('sm'));
  const selected = location.pathname;

  return desktop ? (
    <Desktop options={options} selected={selected} />
  ) : (
    <Mobile options={options} selected={selected} />
  );
};

export default Menu;
