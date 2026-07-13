import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { useTheme } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Grid } from 'components/Grid';

import EmailIcon from 'assets/email.svg';
import PhoneIcon from 'assets/phone.svg';

const rowSx = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
} as const;

const inputRowSx = (theme: Theme) =>
  ({
    paddingBottom: '35px',
    [theme.breakpoints.up('sm')]: {
      paddingBottom: 0,
      '&:nth-child(3)': {
        paddingTop: '15px',
      },
    },
  }) as const;

interface ContactLinkProps {
  icon: string;
  text: string;
  link: string;
}

const ContactLink = ({ icon, text, link }: ContactLinkProps) => (
  <Box
    component="a"
    href={link}
    sx={{
      display: 'flex',
      flexDirection: 'row',
      padding: '10px 0px 0px 0px',
      textDecoration: 'none',
      color: 'white',
    }}
  >
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: '10px',
      }}
    >
      <img src={icon} alt=" " width="15" height="15" />
    </Box>
    {text}
  </Box>
);

interface FormInputProps {
  id: string;
  name: string;
  placeholder: string;
}

const FormInput = ({ id, name, placeholder }: FormInputProps) => (
  <Grid item xs={12}>
    {/* lineHeight 1 matches Material-UI v4's FormLabel (v5+ uses 1.4375em) */}
    <InputLabel htmlFor={id} sx={{ fontWeight: 700, color: 'white', lineHeight: 1 }}>
      {name}
    </InputLabel>

    <Input
      name={id}
      placeholder={placeholder}
      id={id}
      inputProps={{ 'aria-label': placeholder, maxLength: 500 }}
      required={true}
      type={id === 'email' ? id : 'text'}
      fullWidth={true}
      sx={{
        // v4 only added this margin inside a FormControl; these inputs are
        // standalone, so cancel v5+'s unconditional "label + input" margin.
        'label + &': {
          marginTop: 0,
        },
        '& .MuiInput-input': {
          paddingBottom: '6px',
          paddingTop: '10px',
          fontSize: 14,
          color: 'white',
          // v4 input height (v5+ grew to 1.4375em)
          height: '1.1875em',
        },
        '&::before': {
          // underline color when textfield is inactive
          borderBottom: '1px solid white',
        },
        '&:hover:not(.Mui-disabled)::before': {
          // underline color when hovered
          borderBottom: '2px solid white',
        },
      }}
    />
  </Grid>
);

const Contact = () => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('sm'));

  const contacts = (
    <Grid
      item
      xs={12}
      sm={5}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        paddingTop: desktop ? 0 : '15px',
        fontSize: 14,
      }}
    >
      <ContactLink icon={EmailIcon} text="illiashershun@gmail.com" link="mailto:illiashershun@gmail.com" />
      <ContactLink icon={PhoneIcon} text="(503)-995-1757" link="tel:15039951757" />
    </Grid>
  );

  const send = (
    <Grid item xs={12} sm={7} sx={{ display: 'flex', alignSelf: 'flex-end' }}>
      <Button
        variant="contained"
        type="submit"
        color="primary"
        sx={{ width: desktop ? 'auto' : '100%' }}
      >
        {desktop ? 'Send' : 'Send Message'}
      </Button>
    </Grid>
  );

  return (
    <Grid
      item
      xs={12}
      sx={(t) => ({
        display: 'flex',
        alignItems: 'initial',
        justifyContent: 'center',
        minHeight: t.page.height,
        color: 'white',
        [t.breakpoints.up('sm')]: {
          alignItems: 'center',
        },
      })}
    >
      <Grid
        item
        xs={12}
        sx={(t) => ({
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          padding: '30px',
          background: 'rgba(255,255,255,0.1)',
          [t.breakpoints.up('lg')]: {
            maxWidth: '70%',
            minHeight: 600,
            padding: '25px 100px 25px 100px',
            alignItems: 'center',
          },
        })}
      >
        <Box
          component="form"
          action="https://usebasin.com/f/0c583a97953c"
          method="POST"
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          <Grid item xs={12} sx={rowSx}>
            <Grid
              item
              xs={12}
              sm={5}
              sx={(t) => ({
                paddingBottom: '50px',
                [t.breakpoints.up('sm')]: {
                  paddingBottom: 0,
                  paddingRight: '25px',
                },
              })}
            >
              <Box sx={{ fontSize: 35, lineHeight: 0.9 }}>Let's collaborate</Box>
              <Box sx={{ paddingTop: '10px' }}>Get in touch with me</Box>
            </Grid>
            <Grid item xs={12} sm={7} sx={rowSx}>
              <Grid
                item
                xs={12}
                sm={4}
                sx={[
                  (t) => ({
                    [t.breakpoints.up('sm')]: {
                      paddingRight: '15px',
                    },
                  }),
                  inputRowSx,
                ]}
              >
                <FormInput id="name" name="Name" placeholder="Your name" />
              </Grid>
              <Grid item xs={12} sm={8} sx={inputRowSx}>
                <FormInput id="email" name="Email" placeholder="Email address" />
              </Grid>
              <Grid item xs={12} sx={inputRowSx}>
                <FormInput id="message" name="Message" placeholder="Start typing here" />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sx={(t) => ({
              paddingTop: '15px',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              [t.breakpoints.up('sm')]: {
                paddingTop: '50px',
              },
            })}
          >
            {desktop ? (
              <>
                {contacts}
                {send}
              </>
            ) : (
              send
            )}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Contact;
