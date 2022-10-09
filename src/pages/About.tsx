import {
  Box,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Header from '../components/Header';
import ProfileImage from '../assets/profile.jpeg';

const technologies = [
  'Kotlin (For native android development)',
  'Node.js (For backend development)',
  'HTML, CSS, JavaScript (Frontend development for web)',
  'Flutter using Dart (For android and IOS development)',
  'Firebase (For backend)',
  'MySQL (For SQL database)',
  'React (Frontend development for web)',
  'TypeScript (For React and Node.js)',
  'Python using Jupyter Notebook (For Data Structures and Algorithms)',
];

export default function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const textStyle = isMobile ? 'body2' : 'body1';
  const justifyContentProp = isMobile
    ? {
        justifyContent: 'center',
      }
    : {};

  return (
    <Box id="about" paddingY="1rem" display="flex" flexDirection="column">
      <Header header="About Me" />
      <Grid
        container
        maxWidth="lg"
        marginX="auto"
        flexGrow={1}
        {...justifyContentProp}
      >
        <Grid item xs={5} md={3} mb={isMobile ? 3 : 0}>
          <Box
            component="div"
            sx={{
              backgroundImage: `url('${ProfileImage}')`,
              width: '100%',
              aspectRatio: '1',
              backgroundPosition: 'top',
              backgroundSize: 'cover',
              borderRadius: '50%',
              position: 'sticky',
              top: '30px',
            }}
          />
        </Grid>
        <Grid item md={9} px={isMobile ? 3 : 5}>
          <Box
            sx={{
              backgroundColor: 'background.paper',
              boxShadow:
                '0px 3px 5px -1px rgb(0 0 0 / 20%), ' +
                '0px 5px 8px 0px rgb(0 0 0 / 14%), ' +
                '0px 1px 14px 0px rgb(0 0 0 / 12%)',
            }}
            p={2}
          >
            <Header header="Intro" variant="sub" />
            <Stack mb={2} gap={1}>
              <Typography variant={textStyle}>
                I am Noorullah Nasrullah and I am from Singapore. a student at
                Temasek Polytechnic (TP), pursuing a diploma in Information
                Technology
              </Typography>
              <Typography variant={textStyle}>
                I am currently a second year student at Temasek Polytechnic
                (TP), pursuing a diploma in Information Technology
              </Typography>
              <Typography variant={textStyle}>
                I hope to continue to learn more new technologies and broaden my
                understanding of the ever-changing Tech world to make myself
                relevant in the future
              </Typography>
            </Stack>
            <Header header="Interests" variant="sub" />
            <Stack mb={2} gap={1}>
              <Typography variant={textStyle}>
                My passion for programming ignited during my secondary school
                years, when I learned how to create a simple IOS application
                using Swift
              </Typography>
              <Typography variant={textStyle}>
                That small experience, sparked an interest in me, and made me to
                pursue the Information Technology course at TP after my O levels
              </Typography>
              <Typography variant={textStyle}>
                I enjoy Mobile and Web Development as well as learning new
                frameworks in my free time
              </Typography>
            </Stack>
            <Header header="Education" variant="sub" />
            <Stack mb={2} gap={1}>
              <Typography variant={textStyle}>
                I completed my GCE O Level examinations with a grade of{' '}
                <b>9(L1R5)</b> at Bowen Secondary in the year 2020
              </Typography>
              <Typography variant={textStyle}>
                I am currently pursuing a Diploma in Information Technology at
                Temasek Polytechnic and as of now(2022), I am currently in my
                second year with a Cumulative Grade Point Average of <b>3.85</b>
              </Typography>
            </Stack>
            <Header header="Achievements" variant="sub" />
            <Typography mb={2} variant={textStyle}>
              AY21/22 Director's List
            </Typography>
            <Typography mb={2} variant={textStyle}>
              Won top 8 of hackathon(PSA CodeSprint) in a team of 4
            </Typography>
            <Header header="Skills" variant="sub" />
            <Stack mb={2}>
              {technologies.map((tech) => (
                <Typography key={tech} variant={textStyle}>
                  {tech}
                </Typography>
              ))}
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
