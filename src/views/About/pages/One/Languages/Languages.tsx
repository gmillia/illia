import Fade from '@mui/material/Fade';

import { Visibility } from 'components';
import { Grid } from 'components/Grid';

const Languages = () => {
  return (
    <Visibility>
      <Fade in={true} timeout={1500}>
        <Grid
          item
          xs={12}
          sx={(theme) => ({
            display: 'flex',
            flexDirection: 'column',
            color: 'white',
            padding: '30px',
            [theme.breakpoints.up('sm')]: {
              flexDirection: 'row',
              paddingLeft: '130px',
            },
          })}
        >
          <Grid
            sx={(theme) => ({
              display: 'table',
              fontSize: 20,
              width: 'auto',
              fontWeight: 700,
              letterSpacing: 2,
              borderBottom: '1px solid gold',
              [theme.breakpoints.up('sm')]: {
                borderBottom: 'none',
                borderLeft: '1px solid gold',
                display: 'inline-block',
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
              },
            })}
          >
            /03/Languages
          </Grid>
          <Grid
            item
            sx={(theme) => ({
              display: 'flex',
              flexDirection: 'column',
              paddingTop: '5px',
              [theme.breakpoints.up('sm')]: {
                paddingTop: 0,
                paddingLeft: '5px',
              },
            })}
          >
            <div>English</div>
            <div>Russian</div>
            <div>Ukrainian</div>
          </Grid>
        </Grid>
      </Fade>
    </Visibility>
  );
};

export default Languages;
