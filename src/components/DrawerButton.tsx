import { Close, Menu } from '@mui/icons-material';
import {
  Box,
  List,
  SwipeableDrawer,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import { navLinks } from './Navbar';

export default function DrawerButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton
        sx={{
          color: '#fff',
        }}
        edge="end"
        size="large"
        onClick={(e) => setIsOpen(!isOpen)}
      >
        <Menu />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
      >
        <Box
          sx={{
            width: '75vw',
          }}
          role="presentation"
          onClick={() => setIsOpen(false)}
          onKeyDown={() => setIsOpen(false)}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'end',
              padding: '12px',
            }}
          >
            <IconButton onClick={() => setIsOpen(false)} edge="start">
              <Close />
            </IconButton>
          </Box>
          {navLinks.map((link) => {
            return (
              <a
                key={link.name}
                href={link.path}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary={link.name} />
                    </ListItemButton>
                  </ListItem>
                </List>
              </a>
            );
          })}
        </Box>
      </SwipeableDrawer>
    </>
  );
}
