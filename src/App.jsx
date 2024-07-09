import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ServicePage from "./Pages/ServicePage";
import PortfolioPage from "./Pages/PortfolioPage";
import ProjectPage from "./Pages/ProjectPage";
import Navbar from "./components/Navbar";
import ContactPage from "./Pages/ContactPage";
import NoPage from "./Pages/NoPage";

function App() {
  return (
    <BrowserRouter className="text-3xl font-bold underline">
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="service" element={<ServicePage />} />
        <Route path="portfolio">
          <Route index element={<PortfolioPage />} />
          <Route path="project/id" element={<ProjectPage />} />
        </Route>
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
