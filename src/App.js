import React, { useState, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import { ThemeProvider } from "@material-ui/styles";

import LightTheme from "./themes/LightTheme";
import DarkTheme from "./themes/DarkTheme";
import Header from "./components/Header/Header";
import Landing from "./content/Landing/Landing";
import About from "./content/About/About";
import EducationSkills from "./content/EducationSkills/EducationSkills";
import Muses from "./content/Muses/Muses";
import Contact from "./content/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
      <Header toggler={toggleTheme} />
      <Grid item id="landing">
        <Landing />
      </Grid>
      <Grid item id="about">
        <About />
      </Grid>
      <Grid item id="education">
        <EducationSkills />
      </Grid>
      <Grid item id="muses">
        <Muses />
      </Grid>
      <Grid item id="contact">
        <Contact />
      </Grid>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
