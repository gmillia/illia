import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';
import type { Breakpoint } from '@mui/material/styles';
import type { CSSProperties, HTMLAttributes, ReactNode, Ref } from 'react';

type Columns = number | undefined;

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  /** Flex container behavior (Material-UI v4 `container`). */
  container?: boolean;
  /** Flex item behavior (Material-UI v4 `item`). */
  item?: boolean;
  /** Gutter between items — the original app always used 0. */
  spacing?: number;
  xs?: Columns;
  sm?: Columns;
  md?: Columns;
  lg?: Columns;
  xl?: Columns;
  alignContent?: CSSProperties['alignContent'];
  /** v4 name for `justifyContent`. */
  justify?: CSSProperties['justifyContent'];
  sx?: SxProps<Theme>;
  ref?: Ref<HTMLDivElement>;
}

const columnSx = (breakpoint: Breakpoint, columns: Columns) => {
  if (columns === undefined) return null;
  const width = `${((columns / 12) * 100).toFixed(6)}%`;
  const styles = {
    flexGrow: 0,
    maxWidth: width,
    flexBasis: width,
  };
  // v4 emitted xs styles without a media query (so later declarations,
  // e.g. an explicit `flex: 1` in a component's styles, can override them
  // by source order) — mirror that exactly.
  if (breakpoint === 'xs') return styles;
  return (theme: Theme) => ({
    [theme.breakpoints.up(breakpoint)]: styles,
  });
};

/**
 * Drop-in replacement for the Material-UI v4 `Grid` (spacing 0) this site was
 * built around. v5+ redesigned the Grid API/CSS, so to keep the layout
 * pixel-identical we reproduce the exact v4 styles on top of `Box`.
 */
const Grid = ({
  container = false,
  item = false,
  spacing: _spacing,
  xs,
  sm,
  md,
  lg,
  xl,
  alignContent,
  justify,
  sx,
  children,
  ...rest
}: GridProps) => {
  const sxList = [
    { boxSizing: 'border-box' as const },
    container && {
      display: 'flex',
      flexWrap: 'wrap' as const,
      width: '100%',
    },
    item && { margin: 0 },
    alignContent !== undefined && { alignContent },
    justify !== undefined && { justifyContent: justify },
    columnSx('xs', xs),
    columnSx('sm', sm),
    columnSx('md', md),
    columnSx('lg', lg),
    columnSx('xl', xl),
    ...(Array.isArray(sx) ? sx : [sx]),
  ].filter(Boolean);

  return (
    <Box sx={sxList as SxProps<Theme>} {...rest}>
      {children}
    </Box>
  );
};

export default Grid;
