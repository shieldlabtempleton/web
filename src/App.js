import SiteHeader from "./components/SiteHeader";
import NavBar from "./components/NavBar";
import "./App.css";
import Wave from "./styles/Waves";
import HomePage from "./components/HomePage";
import PublicationsPage from "./components/PublicationsPage";
import PeoplePage from "./components/PeoplePage";
import { useContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import BackgroundEffects from "./components/BackgroundEffects";
import ScrollToTop from "./components/ScrollToTop";
import PersonProfile from "./components/PersonProfile";
import ResearchPage from "./components/ResearchPage";
import Collaborators from "./components/Collaborators";
import Contact from "./components/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResearchTopicsPage from "./components/ResearchTopicsPage";
import NewsFullPage from "./components/NewsFullPage";
import "animate.css/animate.min.css";
import { PeopleProvider } from "./context/PeopleContext";
import { ResearchProvider } from "./context/ResearchContext";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import SiteFooterAlt from "./components/SiteFooterAlt";
// import NewsFullPage from "./components/NewsFullPage";
// import SiteFooter from "./components/SiteFooter";

function App() {
  const [isOverWhite, setIsOverWhite] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    const root = document.documentElement; // <html>

    root.classList.remove("light", "dark");
    root.classList.add(theme !== "light" ? "dark" : "light");
  }, [theme]);
  return (
    <div className={`App ${theme === "light" ? "" : "dark"}`}>
      {/* <ThemeToggle /> */}
      <ScrollToTop />
      <BackgroundEffects />
      <Wave isOverWhite={isOverWhite} setIsOverWhite={setIsOverWhite}></Wave>
      <SiteHeader />
      <NavBar
        isOverWhite={isOverWhite}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <main className="Main-body">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsFullPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/research/:slug" element={<ResearchTopicsPage />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/people/:slug" element={<PersonProfile />} />
          <Route path="/collaborators" element={<Collaborators />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <SiteFooterAlt />
      <ToastContainer
        position="top-right"
        autoClose={3000} // 3 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover={false}
        theme="colored"
      />
    </div>
  );
}

export default App;
