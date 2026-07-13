import Fade from '@mui/material/Fade';

// Button
import { Underline as Button, Visibility } from 'components';
import { Grid } from 'components/Grid';

const Projects = () => {
  return (
    <Visibility offset={{ top: -190 }}>
      <Fade in={true} timeout={1500}>
        <Grid
          item
          xs={12}
          sx={(theme) => ({
            display: 'flex',
            flexFlow: 'row wrap',
            height: '100%',
            color: 'white',
            [theme.breakpoints.up('sm')]: {
              paddingLeft: '15px',
              paddingRight: '15px',
            },
          })}
        >
          <Grid
            item
            xs={12}
            sx={(theme) => ({
              display: 'block',
              fontSize: 24,
              paddingBottom: '25px',
              paddingTop: '25px',
              [theme.breakpoints.up('sm')]: {
                paddingTop: 0,
              },
            })}
          >
            Projects
          </Grid>
          <Grid item xs={12} sx={{ flex: 1 }}>
            Using those skills, I have written various projects throughout the years.
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Button linkTo="/portfolio" name="View" />
          </Grid>
        </Grid>
      </Fade>
    </Visibility>
  );
};

export default Projects;
