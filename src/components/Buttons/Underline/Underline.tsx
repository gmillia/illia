import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

// Icon
import RightArrow from 'assets/rightArrow.svg';

interface UnderlineProps {
  linkTo?: string;
  name?: string;
}

/** Underlined text button with a right arrow. */
const Underline = ({ linkTo = '', name = '' }: UnderlineProps) => {
  return (
    <Box component={Link} to={linkTo} sx={{ textDecoration: 'none' }}>
      <Box
        sx={(theme) => ({
          display: 'flex',
          flexDirection: 'row wrap',
          paddingBottom: '1px',
          paddingTop: '15px',
          [theme.breakpoints.up('sm')]: {
            paddingTop: 'auto',
          },
        })}
      >
        <Box
          component="span"
          sx={{
            color: 'white',
            background: 'transparent',
            width: 'auto',
            border: 'none',
            outline: 'none',
            fontSize: 16,
            cursor: 'pointer',
            paddingBottom: '2px',
            borderBottom: '1px solid white',
            display: 'flex',
            flexDirection: 'row wrap',
          }}
        >
          {name}
          <Box
            sx={{
              paddingLeft: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <img src={RightArrow} alt=" " width="15" height="15" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Underline;
