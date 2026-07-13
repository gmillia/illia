import Box from '@mui/material/Box';

import { Grid } from 'components/Grid';

interface WorkProps {
  icon?: string;
  workPlace?: string;
  workDetails?: string;
}

/** Work/experience entry with an icon and details. */
const Work = ({ icon, workPlace = '', workDetails = '' }: WorkProps) => {
  return (
    <Grid
      item
      xs={12}
      sx={(theme) => ({
        display: 'flex',
        color: 'white',
        padding: '15px',
        margin: '0px 0px 15px 0px',
        background: '#11296b',
        minWidth: 345,
        border: '1px solid #ffd100',
        borderRadius: '2%',
        [theme.breakpoints.up('sm')]: {
          margin: '0px 15px 15px 0px',
          '&:nth-child(2)': {
            marginLeft: 0,
          },
          '&:nth-child(3)': {
            marginRight: 0,
          },
        },
      })}
    >
      <Grid
        item
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={icon} alt=" " width="40" height="40" />
      </Grid>
      <Grid
        item
        sx={{
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: '15px',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ fontSize: 16 }}> {workPlace} </Box>
        <Box sx={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}> {workDetails} </Box>
      </Grid>
    </Grid>
  );
};

export default Work;
