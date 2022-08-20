import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Stack } from '@mui/system';
import { RefObject, useRef } from 'react';
import { Link } from 'react-router-dom';
import DrawerButton from './DrawerButton';

export enum NavTypes {
  About,
  Projects,
  Contacts,
}

export const navLinks = [
  {
    type: NavTypes.About,
    name: 'About Me',
    path: '/about',
  },
  {
    type: NavTypes.Projects,
    name: 'My Projects',
    path: '/projects',
  },
  {
    type: NavTypes.Contacts,
    name: 'Contact Me',
    path: '/contact',
  },
];

export default function Navbar({
  isBgActive,
  selected,
}: {
  isBgActive: Boolean;
  selected?: NavTypes | null;
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const appbar = useRef<HTMLDivElement>();

  return (
    <>
      <AppBar
        ref={appbar as RefObject<HTMLDivElement>}
        sx={{
          bgcolor: isBgActive ? 'primary.main' : 'transparent',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
        }}
        elevation={0}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            variant="h5"
            sx={{ cursor: 'pointer', textDecoration: 'none', color: 'white' }}
            component={Link}
            to="/"
          >
            N. Nasrullah
          </Typography>
          {!isMobile ? (
            <Stack direction="row" gap="1.5rem" alignItems="center">
              {navLinks.map((link) => {
                return (
                  <Button
                    key={link.name}
                    variant="text"
                    sx={{
                      textTransform: 'none',
                      color: 'white',
                      opacity: link.type === selected ? '1' : '0.7',
                      transition: 'all 0.3s',
                      ':hover': {
                        backgroundColor: 'transparent',
                        opacity: '1',
                      },
                    }}
                    href={link.path}
                  >
                    {link.name}
                  </Button>
                );
              })}
            </Stack>
          ) : (
            <DrawerButton />
          )}
        </Toolbar>
      </AppBar>
      <Box
        height={`${appbar.current?.clientHeight || 70}px`}
        display={isBgActive ? 'block' : 'none'}
      />
    </>
  );
}
