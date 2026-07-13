import Grow from '@mui/material/Grow';
import Box from '@mui/material/Box';

import { Visibility } from 'components';
import { Grid } from 'components/Grid';

const Personal = () => {
  return (
    <Visibility>
      <Grow in={true} timeout={1500}>
        <Grid
          item
          xs={12}
          sx={(theme) => ({
            color: 'white',
            padding: '30px',
            [theme.breakpoints.up('sm')]: {
              padding: 0,
              paddingLeft: '15px',
              borderLeft: '2px solid rgba(0,0,0,0.5)',
            },
          })}
        >
          <Grid
            item
            sx={(theme) => ({
              display: 'flex',
              flexDirection: 'column',
              fontSize: 45,
              lineHeight: 0.8,
              paddingBottom: '15px',
              [theme.breakpoints.up('sm')]: {
                fontSize: 75,
              },
            })}
          >
            <Box component="span" sx={{ color: 'black' }}>
              Kiev
            </Box>
            <span>Portland</span>
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            sx={{
              display: 'flex',
              flexFlow: 'row wrap',
              fontSize: 18,
              color: 'rgb(220,220,220)',
            }}
          >
            Having moved from Ukraine to USA, I have graduated Portland State University with a
            Bachelor of Computer Science degree.
          </Grid>
        </Grid>
      </Grow>
    </Visibility>
  );
};

export default Personal;
