import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

// Components
import { Navbar } from 'components';

// Icons
import MenuIcon from 'assets/menu.svg';
import HomeIcon from 'assets/home.svg';
import AboutIcon from 'assets/about.svg';
import PortfolioIcon from 'assets/portfolio.svg';
import ContactIcon from 'assets/email.svg';

import type { MenuOptions } from '../Menu';

const iconFor = (name: string) => {
  if (name.toUpperCase() === 'HOME') return HomeIcon;
  if (name.toUpperCase() === 'ABOUT') return AboutIcon;
  if (name.toUpperCase() === 'PORTFOLIO') return PortfolioIcon;
  if (name.toUpperCase() === 'CONTACT') return ContactIcon;
  return MenuIcon;
};

interface MobileProps {
  options?: MenuOptions;
  selected?: string;
}

const Mobile = ({ options = [], selected = '' }: MobileProps) => {
  const [opened, setOpened] = useState(false);

  const toggleDrawer = () => {
    setOpened(!opened);
  };

  return (
    <Navbar isDesktop={false}>
      <Box
        component={Link}
        to="/"
        sx={{
          fontSize: 30,
          color: 'white',
          textDecoration: 'none',
          cursor: 'pointer',
        }}
      >
        IS
      </Box>
      <img
        src={MenuIcon}
        alt=" "
        width="25"
        height="25"
        onClick={() => {
          toggleDrawer();
        }}
      />
      <Drawer
        anchor={'right'}
        open={opened}
        onClose={() => {
          toggleDrawer();
        }}
      >
        <Box
          sx={{
            width: 250,
            height: '100%',
            background: 'rgba(0,0,0,0.8)',
            display: 'flex',
            flexDirection: 'column',
          }}
          onClick={() => {
            toggleDrawer();
          }}
        >
          {options.map((option, index) => (
            <Box
              key={index}
              component={Link}
              to={option.path}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                padding: '15px',
                color: 'white',
                fontSize: 14,
                textDecoration: 'none',
                '&:nth-child(1)': {
                  marginTop: '30px',
                },
                ...(selected === option.path && {
                  background: 'rgba(255,255,255,0.1)',
                }),
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={iconFor(option.name)} alt=" " width="15" height="15" />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', paddingLeft: '15px' }}>
                {option.name}
              </Box>
            </Box>
          ))}
          <Divider sx={{ background: 'rgba(255,255,255,0.5)' }} />
        </Box>
      </Drawer>
    </Navbar>
  );
};

export default Mobile;
