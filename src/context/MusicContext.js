import { createContext, useState } from "react";

export const MusicContext = createContext();

export const MusicContextProvider = ({ children }) => {
  const [currentPlay, setCurrentPlay] = useState();

  return (
    <MusicContext.Provider value={{ currentPlay, setCurrentPlay }}>
      {children}
    </MusicContext.Provider>
  );
};
