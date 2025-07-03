import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import Project from "./pages/Projects";
import Certifications from "./pages/Certifications";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} /> {/* Login page */}
          <Route path="/project" element={<Project />} />{" "}
          <Route path="/certifications" element={<Certifications />} />{" "}
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
