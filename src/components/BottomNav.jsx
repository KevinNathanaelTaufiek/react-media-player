import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import { Link } from "react-router-dom";

const BottomNav = () => {
  const [value, setValue] = useState(0);

  const styles = {
    width: "100%",
    position: "fixed",
    left: 0,
    bottom: 0,
  };

  return (
    <BottomNavigation
      showLabels
      style={styles}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        component={Link}
        to="/"
        label="Home"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/playing"
        label="Playing"
        icon={<PlayArrowIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/playlist"
        label="Playlist"
        icon={<PlaylistPlayIcon />}
      />
    </BottomNavigation>
  );
};

export default BottomNav;
