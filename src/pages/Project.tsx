import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { Box } from '@mui/system';
import Header from '../components/Header';
import SpotifunesImage from '../assets/spotifunes.png';
import ClickToEatImage from '../assets/clicktoeat.png';
import ClickToRunImage from '../assets/clicktorun.png';
import ClickToRunImageFlutter from '../assets/clicktorun-flutter.png';
import TEFImage from '../assets/flutter.png';

export default function Project() {
  const isLesserThan600px = useMediaQuery('(max-width: 600px)');
  const isLesserThan450px = useMediaQuery('(max-width: 450px)');
  const projects = [
    {
      image: SpotifunesImage,
      name: 'Spotifunes',
      description: 'A native Android music player Application built using Java',
      githubLink: 'https://github.com/Coeeter/Spotifunes',
    },
    {
      image: ClickToEatImage,
      name: 'ClickToEat',
      description: 'A full-stack Web Application built using Node.js',
      githubLink: 'https://github.com/Coeeter/ClickToEat',
    },
    {
      image: ClickToEatImage,
      name: 'Android ClickToEat',
      description:
        'A native Android client of ClickToEat API, built using Kotlin',
      githubLink: 'https://github.com/Coeeter/Android_ClickToEat',
    },
    {
      image: ClickToRunImage,
      name: 'ClickToRun',
      description:
        'A native Android Running tracker Application, built using Kotlin',
      githubLink: 'https://github.com/Coeeter/ClickToRun',
    },
    {
      image: ClickToRunImageFlutter,
      name: 'Flutter ClickToRun',
      description:
        'A Running Tracker Application, built using the Flutter framework',
      githubLink: 'https://github.com/Coeeter/flutter-clicktorun',
    },
    {
      image: TEFImage,
      name: 'TET Flutter',
      description: 'A Flutter application to track transport expenses',
      githubLink: 'https://github.com/Coeeter/TransportExpenseFlutter',
    },
  ];

  return (
    <Box id="projects" paddingY="1rem">
      <Header header="My Projects" />
      <Grid
        container
        maxWidth={'lg'}
        marginX="auto"
        justifyContent="center"
        minHeight={'100vh'}
      >
        {projects.map((project) => {
          return (
            <a
              key={project.name}
              href={project.githubLink}
              style={{ textDecoration: 'none' }}
            >
              <Grid item padding="1rem">
                <Card
                  sx={{
                    width: isLesserThan600px
                      ? isLesserThan450px
                        ? '95%'
                        : '75%'
                      : '260px',
                    marginInline: 'auto',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': isLesserThan450px
                      ? {}
                      : {
                          transform: 'scale(1.05)',
                        },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={project.image}
                    sx={{ backgroundColor: 'primary.main' }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {project.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </a>
          );
        })}
      </Grid>
    </Box>
  );
}
