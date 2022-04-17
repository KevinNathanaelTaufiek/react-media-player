import { Box, CircularProgress } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import PlaylistItem from "../components/PlaylistItem";
import { baseURL, apikey } from "../properties.json";

const Playlist = () => {
  const [playList, setPlayList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`${baseURL}playlists/pp.179829496/tracks?apikey=${apikey}&limit=10`)
      .then((res) => setPlayList(res.data.tracks))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Box sx={{ color: "white" }}>
      <h1>Playlist</h1>
      {isLoading && <CircularProgress />}
      <div style={{ textAlign: "center" }}></div>
      {playList.map((item) => {
        return <PlaylistItem key={item.id} music={item} />;
      })}
    </Box>
  );
};

export default Playlist;
