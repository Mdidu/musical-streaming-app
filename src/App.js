import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  DEFINE_HOME_PATH,
  DEFINE_RECOMMENDATION_PATH,
} from "./utilities/constantes-path";
import { NavbarComponent } from "./views/components/navbar/navbar";
import { SoundReaderComponent } from "./views/components/sound-reader/sound-reader";
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
        </Routes>
      </main>
      <footer>
        <SoundReaderComponent />
      </footer>
    </div>
  );
}

export default App;
