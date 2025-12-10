// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { ProjectPage } from "./pages/ProjectPage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* sua landing single page, intacta */}
        <Route path="/" element={<App />} />

        {/* nova página de projeto */}
        <Route path="/projetos/:id" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
