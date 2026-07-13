import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const styles = {
  link: {
    textDecoration: 'none',
  },
  button: {
    border: 'none',
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '5px',
    paddingBottom: '5px',
    fontFamily: 'Raleway, sans-serif',
    background: 'none',
    cursor: 'pointer',
    outline: 'none',
  },
  text: {
    color: 'lightgrey',
    fontSize: 14,
    fontWeight: 400,
    paddingBottom: '2px',
  },
  selected: {
    color: 'white',
    fontWeight: 600,
    borderBottom: '1px solid white',
  },
} as const;

interface ButtonContentProps {
  isSelected?: boolean;
  name: string;
}

const Button = ({ isSelected = false, name }: ButtonContentProps) => {
  return (
    <Box component="button" sx={styles.button}>
      <Box component="span" sx={[styles.text, ...(isSelected ? [styles.selected] : [])]}>
        {name}
      </Box>
    </Box>
  );
};

interface NavbarButtonProps {
  /** Link to which user will be taken upon clicking on the button. */
  linkTo: string;
  /** Name displayed in the button. */
  name: string;
  /** Specifies whether this button is currently selected. */
  isSelected?: boolean;
}

/** Button used in the navbar. The RESUME entry opens the PDF in a new tab. */
const NavbarButton = ({ linkTo, name, isSelected = false }: NavbarButtonProps) => {
  return name.toUpperCase() === 'RESUME' ? (
    <Box component="a" sx={styles.link} href={linkTo} target="_blank" rel="noopener noreferrer">
      <Button name={name} />
    </Box>
  ) : (
    <Box component={Link} to={linkTo} sx={styles.link}>
      <Button isSelected={isSelected} name={name} />
    </Box>
  );
};

export default NavbarButton;
