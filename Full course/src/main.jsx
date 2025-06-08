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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/chapter/:chapterId" element={<h1>test</h1>} />
        <Route
          path="/chapter/:chapterId/:projectId"
          element={<h1>test 2</h1>}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
