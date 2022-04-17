import { Box } from "@mui/material";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";

const Home = () => {
  return (
    <Box sx={{ color: "white", textAlign: "center" }}>
      <AudiotrackIcon sx={{ width: 100, height: 100, mb: 2 }} />
      <h1>Welcome to MyPlayer</h1>
      <p>Play your favourite music here.</p>
    </Box>
  );
};

export default Home;
