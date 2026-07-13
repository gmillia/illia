import Grow from '@mui/material/Grow';
import Fade from '@mui/material/Fade';
import { useTheme } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// Components
import { BackgroundImage, Foreground, Visibility } from 'components';
import { Grid } from 'components/Grid';
import FitText from './FitText';

// Backgrounds
import Analytics from 'assets/about/analytics.webp';
import Leadership from 'assets/about/leadership.webp';
import Organization from 'assets/about/organization.webp';
import Communication from 'assets/about/communication.webp';

const pageHeaderSx = (theme: Theme) =>
  ({
    visibility: 'hidden',
    color: 'white',
    [theme.breakpoints.up('sm')]: {
      visibility: 'visible',
      fontSize: 70,
      lineHeight: 0.95,
    },
  }) as const;

const contentRowSx =
  (align: 'flex-end' | 'flex-start') =>
  (theme: Theme) =>
    ({
      width: '100%',
      display: 'flex',
      alignItems: align,
      justifyContent: 'flex-end',
      flexDirection: 'column',
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
      },
    }) as const;

const Header = ({ text = '' }: { text?: string }) => (
  <Visibility>
    <Fade in={true} timeout={2000}>
      <div style={{ display: 'flex' }}>{text}</div>
    </Fade>
  </Visibility>
);

interface QualityProps {
  background: string;
  text: string;
  dark: boolean;
  offset: number;
}

const Quality = ({ background, text, dark, offset }: QualityProps) => (
  <Visibility>
    <Grow in={true} timeout={offset}>
      <Grid item xs={12} sm={6} sx={{ display: 'flex', flex: 1, width: 'inherit' }}>
        <BackgroundImage background={background} minHeight={200}>
          <Foreground align="center" justify="center" dark={dark}>
            {text}
          </Foreground>
        </BackgroundImage>
      </Grid>
    </Grow>
  </Visibility>
);

const Personality = () => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column' }}>
      <Grid item xs={12} sx={[{ display: 'flex', flex: 0 }, pageHeaderSx]}>
        <Header text="ENVISION" />
      </Grid>
      <Grid
        item
        xs={12}
        sx={(t) => ({
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          [t.breakpoints.up('sm')]: {
            flexWrap: 'nowrap',
          },
        })}
      >
        <Grid
          item
          sx={(t) => ({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontFamily: 'Cinzel, serif',
            fontSize: 24,
            paddingBottom: '20px',
            [t.breakpoints.up('sm')]: {
              fontFamily: 'Nanum Myeongjo, serif',
              fontWeight: 700,
              textOrientation: 'upright',
              writingMode: 'vertical-rl',
              // Text transformation
              background: 'linear-gradient(white 50%, black 50%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              paddingRight: '20px',
              paddingBottom: 0,
            },
          })}
        >
          <Grid
            item
            sx={desktop ? (t) => ({ [t.breakpoints.up('sm')]: { height: 400 } }) : undefined}
          >
            <FitText compressor={1.13}>QUALITIES</FitText>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Grid item xs={12} sx={contentRowSx('flex-end')}>
            <Quality background={Analytics} text="Analytics" dark={false} offset={500} />
            <Quality background={Leadership} text="Leadership" dark={true} offset={1500} />
          </Grid>
          <Grid item xs={12} sx={contentRowSx('flex-start')}>
            <Quality
              background={Organization}
              text="Organization"
              dark={desktop ? true : false}
              offset={2500}
            />
            <Quality
              background={Communication}
              text="Communication"
              dark={desktop ? false : true}
              offset={3500}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sx={[
          {
            flex: 0,
            display: 'flex',
            width: '100%',
            justifyContent: 'flex-end',
          },
          pageHeaderSx,
          { color: 'black' },
        ]}
      >
        <Header text="INNOVATE" />
      </Grid>
    </Grid>
  );
};

export default Personality;
