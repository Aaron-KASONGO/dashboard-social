import { Box, createTheme, Stack, ThemeProvider } from '@mui/material'
import './App.css';
import { Feed } from './components/Feed';
import { Navbar } from './components/Navbar';
import { RightBar } from './components/RightBar';
import { SideBar } from './components/SideBar';

import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');
  const themeValue = createTheme({
    palette: {
      mode: theme
    }
  })

  return (
    <ThemeProvider theme={themeValue}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack
        direction='row'
        justifyContent='space-between'
        spacing={2}
        >
          <SideBar theme={theme} setTheme={setTheme} />
          <Feed />
          <RightBar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
