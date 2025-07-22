import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MediaUpload from "./components/MediaUpload";
import DescriptionPage from "./components/DescriptionPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MediaUpload />} />
        <Route path="/description" element={<DescriptionPage />} />
      </Routes>
    </Router>
  );
};

export default App;
