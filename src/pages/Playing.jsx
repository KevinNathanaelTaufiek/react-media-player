import { Box } from "@mui/material";
import { useContext } from "react";
import PlaylistItem from "../components/PlaylistItem";
import { MusicContext } from "../context/MusicContext";

const Playing = () => {
  const { currentPlay } = useContext(MusicContext);

  return (
    <Box sx={{ color: "white" }}>
      {currentPlay ? (
        <>
          <h1>Current Playing...</h1>
          <PlaylistItem music={currentPlay} hidePlayButton />
          <audio controls>
            <source src={currentPlay.previewURL} type="audio/aac" />
          </audio>
        </>
      ) : (
        <h1>No music played. Please choose music first at playlist!</h1>
      )}
    </Box>
  );
};

export default Playing;
