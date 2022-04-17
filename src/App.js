import { BrowserRouter, Route, Routes } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import Home from "./pages/Home";
import Playing from "./pages/Playing";
import Playlist from "./pages/Playlist";
import { MusicContextProvider } from "./context/MusicContext";
import "./styles.css";

export default function App() {
  return (
    <MusicContextProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/playing" exact element={<Playing />} />
            <Route path="/playlist" exact element={<Playlist />} />
          </Routes>
        </div>
        <BottomNav />
      </BrowserRouter>
    </MusicContextProvider>
  );
}
