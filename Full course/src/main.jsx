import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Chapter from './Components/Chapter.jsx';
import ProjectViewer from './Components/ProjectViewer.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/chapter/:chapterId" element={<Chapter />} />
        <Route
          path="/chapter/:chapterId/:projectId"
          element={<ProjectViewer />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
