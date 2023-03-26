import { AppBar, Badge, IconButton, InputBase, styled, Toolbar, Box, Avatar } from "@mui/material"

import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';


const Search = styled("div")(({theme}) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: '40%'
}))

export const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <IconButton size="large" color="inherit">
          <CatchingPokemonIcon sx={{
            width: 35,
            height: 35
          }} />
        </IconButton>
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Box sx={{
          display: 'flex',
          gap: 2,
          alignItems: 'center'
        }}>
          <Badge badgeContent={3} color='error'>
            <NotificationsIcon />
          </Badge>
          <Badge badgeContent={2} color='error'>
            <EmailIcon />
          </Badge>
          <Avatar sx={{
            width: 40,
            height: 40
          }} alt="Avatar" src="https://randomuser.me/api/portraits/men/20.jpg" />
        </Box>
      </Toolbar>
    </AppBar>
  )
}
