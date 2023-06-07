import { useTranslation } from "react-i18next";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";
import "./I18n";

function App() {
  const { t, i18n } = useTranslation();
  const changelanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <Navbar changelanguage={changelanguage} t={t} />
      <Home t={t} />
      <About t={t} />
      <Skills t={t} />
      <Works t={t} />
    </div>
  );
}

export default App;
