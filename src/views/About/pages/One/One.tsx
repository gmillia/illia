import Box from '@mui/material/Box';

// Local components
import { Languages } from './Languages';
import { Personal } from './Personal';
import { Skills } from './Skills';
import { Projects } from './Projects';

// Global components
import { Page } from 'components';
import { Grid } from 'components/Grid';

// Background image
import Background from 'assets/about/backgroundOne.webp';

const contentWrapperSx = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%',
} as const;

/**
 * Page one of the about page.
 */
const One = () => {
  const topContent = (
    <Grid
      item
      xs={12}
      sx={{
        display: 'flex',
        flexFlow: 'row wrap',
        height: 'auto',
        width: '100%',
      }}
    >
      <Grid item xs={12} sm={6} sx={contentWrapperSx}>
        <Languages />
      </Grid>
      <Grid item xs={12} sm={6} sx={contentWrapperSx}>
        <Personal />
      </Grid>
    </Grid>
  );

  const bottomContent = (
    <Grid
      item
      xs={12}
      sx={(theme) => ({
        display: 'flex',
        flexFlow: 'row wrap',
        height: 'auto',
        width: '100%',
        background: 'rgba(0,0,0,0.5)',
        padding: '30px',
        flex: 1,
        [theme.breakpoints.up('sm')]: {
          height: 'auto',
          paddingLeft: '130px',
        },
      })}
    >
      <Grid item xs={12} sm={8}>
        <Skills />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Projects />
      </Grid>
    </Grid>
  );

  return (
    <Page background={Background} useBackground={true}>
      <Grid item xs={12} sx={{ display: 'flex' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
          }}
        >
          {topContent}
          {bottomContent}
        </Box>
      </Grid>
    </Page>
  );
};

export default One;
