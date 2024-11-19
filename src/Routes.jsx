import { Route, Routes } from "react-router-dom";
// pre-loader
import PreLoaderPage from "./pages/pre-loading/PreLoaderPage";
import LandingPage from "./pages/landing/LandingPage";
import { useSelector } from "react-redux";
import HomePage from "./pages/home/HomePage";
import TechPage from "./pages/tech-page/TechPage";

export default function AllRoutes() {
  const showLoader = useSelector((state) => state.preLoader.show);

  if (!showLoader) {
    return (
      <>
        <Routes>
          <Route path="/landing" element={<HomePage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/tech-page" element={<TechPage />} />
        </Routes>

        <PreLoaderPage />
      </>
    );
  } else {
    return (
      <Routes>
        <Route path="*" element={<PreLoaderPage />} />
      </Routes>
    );
  }
}
