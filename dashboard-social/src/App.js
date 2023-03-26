import { Box, Stack } from '@mui/material'
import './App.css';
import { Feed } from './components/Feed';
import { Navbar } from './components/Navbar';
import { RightBar } from './components/RightBar';
import { SideBar } from './components/SideBar';

function App() {
  return (
    <Box>
      <Navbar />
      <Stack
      direction='row'
      justifyContent='space-between'
      spacing={2}
      >
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
}

export default App;
