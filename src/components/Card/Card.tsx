import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';

import { BackgroundImage, Visibility } from 'components';
import { Grid } from 'components/Grid';
import ExternalIcon from 'assets/portfolio/external.svg';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    padding: '15px',
    fontFamily: 'Cinzel, serif',
    maxWidth: 400,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    background:
      'linear-gradient(20deg, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.2) 35%, rgba(0,0,0,0.2) 65%, rgba(255,255,255,0.1) 65%)',
  },
  divider: {
    minHeight: 350,
    background: 'linear-gradient(160deg, rgba(0,0,0,0.01) 50%, black 50%)',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '150px',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '100px',
  },
  linkBox: {
    height: 100,
    width: 100,
    background: '#1e1f22',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '300ms',
    '&:hover': {
      background: '#282a2e',
    },
  },
  cardContent: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    padding: '10px',
  },
  contentHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
    paddingBottom: '20px',
    textAlign: 'center',
  },
  contentDescription: {
    display: 'flex',
    fontSize: 18,
    textAlign: 'center',
    minHeight: 75,
    color: 'rgba(255,255,255,0.5)',
  },
  stack: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '10px',
    paddingTop: '10px',
  },
  stackIcon: {
    padding: '3px',
  },
} as const;

interface CardProps {
  name?: string;
  linkTo?: string;
  description?: string;
  image?: string;
  stack?: string[];
}

/** Portfolio project card. */
const Card = ({
  name = 'Project Name',
  linkTo = '/',
  description = 'Project Description',
  image,
  stack = [],
}: CardProps) => {
  return (
    <Visibility>
      <Fade in={true} timeout={1000}>
        <Grid item xs={12} sx={styles.root}>
          <BackgroundImage background={image} minHeight={630}>
            <Grid item xs={12} sx={styles.wrapper}>
              <Grid item xs={12} sx={styles.divider}>
                <Grid item xs={12} sx={styles.link}>
                  <a href={linkTo} target="_blank" rel="noopener noreferrer">
                    <Grid item sx={styles.linkBox}>
                      <img src={ExternalIcon} alt=" " width="30" height="30" />
                    </Grid>
                  </a>
                </Grid>
                <Grid item xs={12} sx={styles.cardContent}>
                  <Grid item xs={12} sx={styles.contentHeader}>
                    {name}
                  </Grid>
                  <Grid item xs={12} sx={styles.contentDescription}>
                    {description}
                  </Grid>
                  <Grid item xs={12} sx={styles.stack}>
                    {stack.map((icon, index) => (
                      <Box
                        key={index}
                        component="img"
                        src={icon}
                        alt=" "
                        width="25"
                        height="25"
                        sx={styles.stackIcon}
                      />
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </BackgroundImage>
        </Grid>
      </Fade>
    </Visibility>
  );
};

export default Card;
