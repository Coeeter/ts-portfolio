import { Box, Card, Grid } from '@mui/material';
import Header from '../components/Header';
import ProfileImage from '../assets/profile.jpeg';

export default function About() {
  return (
    <Box
      id="about"
      paddingY="1rem"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
    >
      <Header header="About Me" />
      <Grid container maxWidth="lg" marginX="auto" flexGrow={1}>
        <Grid item xs={8} md={3}>
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
        <Grid item md={9} px={5}>
          <Card sx={{ width: '100%', height: '100%' }}></Card>
        </Grid>
      </Grid>
    </Box>
  );
}
