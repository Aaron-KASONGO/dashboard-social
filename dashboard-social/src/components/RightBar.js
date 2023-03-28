import { Box, ImageList, ImageListItem, Typography } from "@mui/material"
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
      <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
      <Typography variant="h6" fontWeight={100}>Latest Photos</Typography>
      <ImageList cols={3} rowHeight={130}>
        {
          itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
              src={`${item.img}??w=164&h=164&fit=crop&auto=format&dpr=2`}
              alt={item.title}
              loading="lazy"
              />
            </ImageListItem>
          ))
        }
      </ImageList>
    </Box>
  )
}
