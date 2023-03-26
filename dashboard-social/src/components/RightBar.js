import { Box } from "@mui/material"


export const RightBar = () => {
  return (
    <Box
    sx={{
        bgcolor: 'error.light',
        flex: 2,
        p: 2
    }}
    display={{
        xs: 'none',
        sm: 'block'
    }}
    >SideBar</Box>
  )
}
