import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NavbarComponent } from "./views/components/navbar/navbar";
import { SoundReaderComponent } from "./views/components/sound-reader/sound-reader";
import { HomePage } from "./views/home-page/home";

function App() {
  return (
    <div>
      <header>
        <NavbarComponent />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <footer>
        <SoundReaderComponent />
      </footer>
    </div>
  );
}

export default App;
