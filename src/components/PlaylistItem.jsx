import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MusicContext } from "../context/MusicContext";
import { imgSource } from "../properties.json";

const PlaylistItem = ({ music, hidePlayButton = false }) => {
  const { setCurrentPlay } = useContext(MusicContext);
  const navigate = useNavigate();

  const handlePlay = () => {
    setCurrentPlay(music);
    navigate("/playing");
  };

  return (
    <Card sx={{ display: "flex", my: 2 }}>
      <Box sx={{ display: "flex", flex: "75%", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {music.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {music.artistName}
          </Typography>
        </CardContent>
        {!hidePlayButton && <Button onClick={handlePlay}>Play</Button>}
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={`${imgSource}${music.albumId}/images/300x300.jpg`}
        alt="Live from space album cover"
      />
    </Card>
  );
};

export default PlaylistItem;
