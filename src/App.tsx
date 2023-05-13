import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { useState } from 'react';
import { themeDark, themeLight } from './themes/theme';

function App() {
  const [changeTheme, setChangeTheme] = useState(themeLight);

  const handleTheme = () => {
    setChangeTheme(changeTheme.name === 'Light' ? themeDark : themeLight);
  };

  return (
    <>
      <ThemeProvider theme={changeTheme}>
        <Header handleTheme={handleTheme} />
      </ThemeProvider>
    </>
  );
}

export default App;
