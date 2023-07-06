import { Box, Typography } from "@mui/material";

const HomePage = () => {
    return (
    <Box sx = {{
        display : "flex",
        justifyContent : "center",
    }}>
        <Typography fontSize={30} textTransform={"uppercase"}>Home Page</Typography>
    </Box>
    )
}

export default HomePage;