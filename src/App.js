import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#EDEAEB",
    },
    secondary: {
      main: "#3B3B3B",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        className="App"
        backgroundColor={theme.palette.primary.main}
        color={theme.palette.secondary.main}
      >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;
