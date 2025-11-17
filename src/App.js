import SiteHeader from "./components/SiteHeader";
import NavBar from "./components/NavBar";
import "./App.css";
import Wave from "./styles/Waves";
import HomePage from "./components/HomePage";
import PublicationsPage from "./components/PublicationsPage";
import PeoplePage from "./components/PeoplePage";
import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import BackgroundEffects from "./components/BackgroundEffects";
import ScrollToTop from "./components/ScrollToTop";
import PersonProfile from "./components/PersonProfile";
import ResearchPage from "./components/ResearchPage";
import Collaborators from "./components/Collaborators";
import Contact from "./components/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewsFullPage from "./components/NewsFullPage";
import SiteFooter from "./components/SiteFooter";

function App() {
  const [isOverWhite, setIsOverWhite] = useState(false);
  return (
    <div className="App">
      <ScrollToTop />
      <BackgroundEffects />
      <Wave isOverWhite={isOverWhite} setIsOverWhite={setIsOverWhite}></Wave>
      <SiteHeader />
      <NavBar isOverWhite={isOverWhite} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/people/:slug" element={<PersonProfile />} />
          <Route path="/collaborators" element={<Collaborators />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
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
