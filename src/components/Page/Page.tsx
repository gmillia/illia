import type { ReactNode } from 'react';

import { Grid } from 'components/Grid';

interface PageProps {
  background?: string;
  useBackground?: boolean;
  wrapperDirection?: string;
  darken?: boolean;
  useGradient?: boolean;
  darkenColor?: string;
  children?: ReactNode;
}

/** Full-height page wrapper with an optional (darkened) background image. */
const Page = ({
  background = '',
  useBackground = false,
  wrapperDirection = 'to right',
  darken = true,
  useGradient = true,
  darkenColor = 'rgba(0,0,0,0.5)',
  children,
}: PageProps) => {
  return (
    <Grid
      container
      spacing={0}
      sx={(theme) => ({
        background: useBackground ? `url(${background}) no-repeat center` : 'transparent',
        backgroundSize: 'cover !important',
        minHeight: theme.page.height,
        flex: 'auto',
        width: '100%',
      })}
    >
      <Grid
        item
        xs={12}
        sx={{
          background: darken
            ? useGradient
              ? `linear-gradient(${wrapperDirection}, rgba(0,0,0,0.1), rgba(0,0,0,0.9))`
              : darkenColor
            : '',
          fontFamily: 'Cinzel, serif',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {children}
      </Grid>
    </Grid>
  );
};

export default Page;
