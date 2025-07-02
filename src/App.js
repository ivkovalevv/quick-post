import React, {useEffect, useState} from "react";
import './styles/App.css'
import { BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/UI/appRouter";


function App() {
  const [lightTheme, setLightTheme] = useState(() => {
    const savedTheme = localStorage.getItem('darkTheme');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

   useEffect(() => {
    if (lightTheme) {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    } else {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    }
    
    localStorage.setItem('darkTheme', JSON.stringify(lightTheme));
  }, [lightTheme]);

  return (
    <BrowserRouter basename="/quick-post/">
      <Navbar theme={lightTheme} themeHandler={setLightTheme}></Navbar>
      <AppRouter></AppRouter>
    </BrowserRouter>
  );
}

export default App;
