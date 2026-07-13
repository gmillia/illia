import Fade from '@mui/material/Fade';

// Components
import { Page, AnimateText, Delay } from 'components';
import { Grid } from 'components/Grid';

// Images
import Background from 'assets/abstract.webp';

const Home = () => {
  return (
    <Page background={Background} useBackground={true} darken={false}>
      <Grid
        item
        xs={12}
        sx={{
          display: 'flex',
          flexFlow: 'row',
          flexWrap: 'wrap',
          background: 'linear-gradient(360deg, rgba(0,0,0,0.5) 50%, rgba(255,255,255,0.5) 50%)',
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Grid
            item
            xs={12}
            sx={{
              fontSize: 80,
              display: 'flex',
              color: 'black',
              lineHeight: '0.9',
              alignItems: 'flex-end',
            }}
          >
            <AnimateText textArray={'ILLIA'.split('')} />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              fontSize: 55,
              color: 'white',
            }}
          >
            <Delay delayBy={1300}>
              <AnimateText textArray={'SHERSHUN'.split('')} />
            </Delay>
          </Grid>
        </Grid>
        <Fade in={true} timeout={3500}>
          <Grid item xs={12} sm={6} sx={{ display: 'flex', background: 'rgba(0,0,0,0.5)' }} />
        </Fade>
      </Grid>
    </Page>
  );
};

export default Home;
