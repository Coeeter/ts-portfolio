import { useEffect, useState } from 'react';
import { Box, Fab, Typography, useMediaQuery, useTheme } from '@mui/material';
import { ArrowUpward } from '@mui/icons-material';
import { Stack } from '@mui/system';
import TypewriterComponent from 'typewriter-effect';
import SittingImage from '../assets/header.jpeg';

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const secondMediaQuery = useMediaQuery('(max-width: 380px)');
  const nameSize = isMobile ? (secondMediaQuery ? 'h3' : 'h2') : 'h1';
  const descriptionSize = isMobile ? (secondMediaQuery ? 'h6' : 'h5') : 'h4';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const items = [
    'an Android developer',
    'a web developer',
    'a Flutter developer',
    'a Node.js developer',
    'a TP student',
  ];

  const checkScroll = () => {
    setIsScrolling(window.scrollY > 70);
  };

  useEffect(checkScroll, []);

  window.addEventListener('scroll', checkScroll);

  return (
    <Box
      id="home"
      component="div"
      sx={{ overflow: 'hidden', position: 'relative' }}
    >
      <Box
        component="div"
        sx={{
          display: isMobile ? 'none' : 'block',
          width: '100%',
          height: '100vh',
          backgroundColor: 'white',
          opacity: '0.2',
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'rotate(-30deg)',
        }}
      />
      <Box
        component="div"
        sx={{
          backgroundImage: `url('${SittingImage}')`,
          width: '100%',
          height: '100vh',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
      <Stack
        sx={{
          position: 'absolute',
          top: '50vh',
          right: '10vw',
          transform: 'translate(0, -50%)',
          userSelect: 'none',
          textShadow: '2px 2px black',
        }}
      >
        <Typography variant={nameSize}>N. Nasrullah</Typography>
        <Typography variant={descriptionSize} textAlign="center">
          <TypewriterComponent
            key={currentIndex}
            onInit={(typewriter) => {
              typewriter
                .changeDelay(100)
                .typeString(items[currentIndex])
                .pauseFor(1000)
                .deleteAll()
                .callFunction(() => {
                  let nextIndex = currentIndex + 1;
                  if (nextIndex === items.length) nextIndex = 0;
                  setCurrentIndex(nextIndex);
                })
                .start();
            }}
          />
        </Typography>
      </Stack>
      <Fab
        sx={{
          opacity: isScrolling ? 1 : 0,
          zIndex: isScrolling ? '99' : '-99',
          position: 'fixed',
          bottom: '1rem',
          right: '1rem',
          bgcolor: 'primary.main',
          color: 'white',
          padding: '1rem',
          transition: 'opacity 0.3s',
          '&:hover': {
            bgcolor: '#0d7a7a',
          },
        }}
        onClick={() => window.scrollTo(0, 0)}
      >
        <ArrowUpward />
      </Fab>
    </Box>
  );
}
