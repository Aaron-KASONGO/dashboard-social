import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material"

import { CardFeed } from "./CardFeed";
import { imgData } from "./ImgData";


export const Feed = () => {
  return (
    <Box
    sx={{
        flex: 4,
        p: 2
    }}
    >
      {
        imgData.map((e, index) => (
          <CardFeed imgData={e} />
        ))
      }
    </Box>
  )
}
