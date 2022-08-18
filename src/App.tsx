import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './themes';
import { Home, About, Contact, Project } from './pages';
import Navbar from './components/Navbar';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
