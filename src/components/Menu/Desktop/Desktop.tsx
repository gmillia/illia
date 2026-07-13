import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

// Components
import { Navbar } from '../../Navbar';
import { NavbarButton } from '../../Buttons';

import type { MenuOptions } from '../Menu';

interface DesktopProps {
  options?: MenuOptions;
  selected?: string;
}

const Desktop = ({ options = [], selected = '' }: DesktopProps) => {
  return (
    <Navbar>
      <Box
        component={Link}
        to="/"
        sx={{
          fontSize: 30,
          color: 'white',
          width: '25%',
          cursor: 'pointer',
          textDecoration: 'none',
        }}
      >
        IS
      </Box>
      {options.map((option, index) => (
        <NavbarButton
          key={index}
          linkTo={option.path}
          name={option.name}
          isSelected={selected === option.path}
        />
      ))}
    </Navbar>
  );
};

export default Desktop;
