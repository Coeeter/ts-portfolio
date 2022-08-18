import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Stack } from '@mui/system';
import DrawerButton from './DrawerButton';

export const navLinks = [
  {
    name: 'About Me',
    path: '#about',
  },
  {
    name: 'My Projects',
    path: '#projects',
  },
  {
    name: 'Contact Me',
    path: '#contact',
  },
];

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <AppBar
        sx={{
          bgcolor: 'transparent',
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
          <Typography variant="h5" sx={{ cursor: 'pointer' }}>
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
                      opacity: '0.7',
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
    </>
  );
}
