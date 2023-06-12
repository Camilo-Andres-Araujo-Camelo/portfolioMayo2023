import { useState } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { darkMode, lightMode } from './Componentes/UI/themes';
import Home from './Componentes/Home/Home';
import NavBar from './Componentes/Nav/NavBar';
import GlobalStyle from './GlobalStyle';
import DropdownMenu from './Componentes/DropdownMenu/DropdownMenu';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [theme, setTheme] = useState(true);
  // const toggleTema = () => {
  //   setTema(!tema);
  // };
  const showMenu = useSelector((state) => state.showMenu);

  return (
    <>
      <ThemeProvider theme={theme ? darkMode : lightMode}>
        <GlobalStyle />
        <HashRouter>
          {showMenu && <DropdownMenu />}
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
