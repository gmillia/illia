import { Grid } from 'components/Grid';

import { One, Two } from './pages';

const About = () => {
  return (
    <Grid
      container
      spacing={0}
      item
      xs={12}
      alignContent="flex-start"
      justify="center"
      sx={{ height: '100%', width: '100%' }}
    >
      <One />
      <Two />
    </Grid>
  );
};

export default About;
