import { Box } from '@mui/material';
import { Container, Stack } from '@mui/system';
import Header from '../components/Header';

export default function About() {
  return (
    <Box id="about" paddingY="1rem">
      <Header header="About Me" />
      <Container
        maxWidth="lg"
        sx={{
          minHeight: '100vh',
        }}
      >
        <Stack direction="row"></Stack>
      </Container>
    </Box>
  );
}
