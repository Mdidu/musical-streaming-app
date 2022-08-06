import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarComponent from "./views/components/navbar/navbar";
import HomePage from "./views/home-page/home";

function App() {
  return (
    <div>
      <header>
        <NavbarComponent />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
