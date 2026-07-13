import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { BackgroundImage, Foreground, Visibility } from 'components';
import { Grid } from 'components/Grid';

import WorkingSkills from 'assets/about/workingSkills.webp';
import OtherSkills from 'assets/about/otherSkills.webp';
import TouchedSkills from 'assets/about/touchedSkills.webp';

const styles = {
  skillLevel: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '10px',
    color: 'white',
    flex: 1,
  },
  skillLevelHeader: {
    width: 'auto',
    display: 'inline-block',
    fontSize: 16,
    color: 'rgba(255,255,255,0.6)',
    paddingBottom: '2px',
    marginBottom: '8px',
    borderBottom: '1px solid gold',
  },
  skillLevelContent: {
    height: '100%',
    width: '100%',
    fontSize: 16,
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
} as const;

interface SkillColumnProps {
  background: string;
  header: string;
  content: string;
  timeout: number;
}

const SkillColumn = ({ background, header, content, timeout }: SkillColumnProps) => (
  <Slide in={true} direction="right" timeout={timeout}>
    <Grid item xs={12} sm={4} sx={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <Box component="span" sx={styles.skillLevelHeader}>
          {header}
        </Box>
      </div>
      <BackgroundImage background={background} minHeight={150}>
        <Foreground>
          <Grid item xs={12} sx={styles.skillLevel}>
            <Box sx={styles.skillLevelContent}>
              <div>{content}</div>
            </Box>
          </Grid>
        </Foreground>
      </BackgroundImage>
    </Grid>
  </Slide>
);

const Skills = () => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Visibility offset={{ top: desktop ? -190 : -450 }}>
      <Grid
        item
        xs={12}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          color: 'white',
        }}
      >
        <Grid item xs={12} sx={{ display: 'flex', flexFlow: 'row wrap' }}>
          <Grid item xs={12} sx={{ fontSize: 24, paddingBottom: '25px' }}>
            Skills
          </Grid>
          <SkillColumn
            background={WorkingSkills}
            header="Working"
            content="JavaScript / Python / C++ / React / HTML5"
            timeout={1500}
          />
          <SkillColumn
            background={OtherSkills}
            header="Other"
            content="MongoDB / SQL / NoSQL / Firebase / Bootstrap / CSS"
            timeout={1000}
          />
          <SkillColumn
            background={TouchedSkills}
            header="Touched"
            content="Java / C / SCSS"
            timeout={500}
          />
        </Grid>
      </Grid>
    </Visibility>
  );
};

export default Skills;
