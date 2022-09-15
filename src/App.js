import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  DEFINE_ALBUM_PATH,
  DEFINE_HOME_PATH,
  DEFINE_RECOMMENDATION_PATH,
} from "./utilities/constantes-path";
import { NavbarComponent } from "./views/components/navbar/navbar";
import { SoundReaderComponent } from "./views/components/sound-reader/sound-reader";
import AlbumPage from "./views/pages/album-page/album-page";
import { HomePage } from "./views/pages/home-page/home";
import RecommendationPage from "./views/pages/recommendation-page/recommendation-page";

function App() {
  return (
    <div>
      <header>
        <NavbarComponent />
      </header>
      <main>
        <Routes>
          <Route path={DEFINE_HOME_PATH} element={<HomePage />} />
          <Route
            path={DEFINE_RECOMMENDATION_PATH}
            element={<RecommendationPage />}
          />
          <Route path={DEFINE_ALBUM_PATH} element={<AlbumPage />} />
        </Routes>
      </main>
      <footer>
        <SoundReaderComponent />
      </footer>
    </div>
  );
}

export default App;
