import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import { itemData } from "./ImgData"


export const RightBar = () => {
  return (
    <Box
    sx={{
        flex: 2,
        p: 2
    }}
    display={{
        xs: 'none',
        sm: 'block'
    }}
    >
      <Box position="fixed" width={300}>
        <Typography variant="h6">Online Friends</Typography>
        <AvatarGroup max={8}>
          <Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/men/20.jpg" />
          <Avatar alt="Travis Howard" src="https://randomuser.me/api/portraits/men/7.jpg" />
          <Avatar alt="Cindy Baker">MK</Avatar>
          <Avatar alt="Agnes Walker" src="https://randomuser.me/api/portraits/men/14.jpg" />
          <Avatar alt="Trevor Henderson" src="https://randomuser.me/api/portraits/women/20.jpg" />
          <Avatar alt="Cindy Baker">KD</Avatar>
          <Avatar alt="Trevor Henderson" src="https://randomuser.me/api/portraits/women/24.jpg" />
          <Avatar alt="Trevor Henderson" src="https://randomuser.me/api/portraits/men/20.jpg" />
          <Avatar alt="Trevor Henderson" src="https://randomuser.me/api/portraits/men/20.jpg" />
        </AvatarGroup>
        <Typography variant="h6">Latest Photos</Typography>
        <ImageList cols={3} rowHeight={100}>
          {
            itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                src={`${item.img}?w=164&h=100&fit=crop&auto=format&dpr=2`}
                alt={item.title}
                loading="lazy"
                />
              </ImageListItem>
            ))
          }
        </ImageList>
        <Typography variant="h6">Latest Convesation</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/men/7.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/women/99.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/men/14.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}
