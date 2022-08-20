import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './themes';
import { Home, About, Contact, Project } from './pages';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Project />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
