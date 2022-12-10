import React from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components";
import { Content, News } from "screen";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
