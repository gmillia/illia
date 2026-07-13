import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// Button
import { Underline as Button, Visibility } from 'components';
import { Grid } from 'components/Grid';

const headerSx = (theme: import('@mui/material/styles').Theme) =>
  ({
    display: 'flex',
    paddingTop: '20px',
    paddingBottom: '20px',
    [theme.breakpoints.up('sm')]: {
      fontWeight: 700,
      paddingTop: 0,
      paddingBottom: 0,
      writingMode: 'vertical-rl',
    },
  }) as const;

const Soccer = () => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Visibility>
      <Fade in={true} timeout={1000}>
        <Grid
          item
          xs={12}
          sx={(t) => ({
            display: 'flex',
            justifyContent: 'flex-end',
            color: 'white',
            [t.breakpoints.up('sm')]: {
              paddingLeft: '15px',
            },
          })}
        >
          <Grid
            item
            xs={12}
            sx={(t) => ({
              display: 'flex',
              flexFlow: 'row wrap',
              [t.breakpoints.up('sm')]: {
                flexFlow: 'row',
              },
            })}
          >
            {desktop ? <div></div> : <Box sx={headerSx}>SOCCER</Box>}
            <Box
              sx={{
                paddingRight: '10px',
                color: 'rgb(220,220,220)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              Due to my ACL injury, my passion for this game transformed into coaching positions at
              a David Douglas High School and Portland State University.
              <Button linkTo="/resume" name="Resume" />
            </Box>
            {desktop ? <Box sx={headerSx}>SOCCER</Box> : null}
          </Grid>
        </Grid>
      </Fade>
    </Visibility>
  );
};

export default Soccer;
