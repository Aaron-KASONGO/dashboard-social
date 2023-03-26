import { Box } from "@mui/material"


export const SideBar = () => {
  return (
    <Box
    sx={{
        bgcolor: 'primary.light',
        flex: 1,
        p: 2
    }}
    display={{
        xs: 'none',
        sm: 'block'
    }}
    >SideBar</Box>
  )
}
