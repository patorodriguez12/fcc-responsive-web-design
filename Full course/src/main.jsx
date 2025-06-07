import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Chapter1 from "./Pages/Chapter 1/Chapter1.jsx";
import Chapter2 from "./Pages/Chapter 2/Chapter2.jsx";
import Chapter3 from "./Pages/Chapter 3/Chapter3.jsx";
import Chapter4 from "./Pages/Chapter 4/Chapter4.jsx";
import Chapter5 from "./Pages/Chapter 5/Chapter5.jsx";
import NotFound from "./Pages/Not Found/NotFound.jsx";
import CatPhotoApp from "./Pages/Chapter 1/Chapters/1-Cat Photo App/CatPhotoApp.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="chapters/1" element={<Chapter1 />} />
        <Route path="chapters/1/cat-photo-app" element={<CatPhotoApp />} />
        <Route path="chapters/2" element={<Chapter2 />} />
        <Route path="chapters/3" element={<Chapter3 />} />
        <Route path="chapters/4" element={<Chapter4 />} />
        <Route path="chapters/5" element={<Chapter5 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
