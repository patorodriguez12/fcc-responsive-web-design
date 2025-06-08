import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";

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
