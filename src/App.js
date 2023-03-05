import { BrowserRouter, Routes, Route } from "react-router-dom";
import Songs from "./pages/Songs";
import Genres from "./pages/Genres";
import Artists from "./pages/Artists";
import Stats from "./pages/Stats";
import Albums from "./pages/Albums";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Stats />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/albums" element={<Albums />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
