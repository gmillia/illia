// Local components
import { Personality } from './Personality';
import { Soccer } from './Soccer';

// Global components
import { Page } from 'components';
import { Grid } from 'components/Grid';

// Background image
import Background from 'assets/about/backgroundTwo.webp';

/**
 * Page two of the about page.
 */
const Two = () => {
  return (
    <Page background={Background} useBackground={true} wrapperDirection="to left">
      <Grid
        item
        xs={12}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 50%, rgba(255,255,255,0.5) 50%)',
        }}
      >
        <Grid
          item
          xs={12}
          sx={(theme) => ({
            display: 'flex',
            flexFlow: 'row wrap',
            padding: '30px',
            [theme.breakpoints.up('sm')]: {
              paddingLeft: '130px',
            },
          })}
        >
          <Grid item xs={12} sm={8} sx={{ display: 'flex' }}>
            <Personality />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Soccer />
          </Grid>
        </Grid>
      </Grid>
    </Page>
  );
};

export default Two;
