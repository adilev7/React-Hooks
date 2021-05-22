import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import React, { useState } from "react";

export const ThemeContext = React.createContext();

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    setDarkTheme((prev) => !prev);
  };
  return (
    <div className='App'>
      <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
        <Header></Header>
        <List></List>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
