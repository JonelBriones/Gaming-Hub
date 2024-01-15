import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Memory from "./pages/Memory";
import WordSearch from "./pages/WordSearch";
import SpellingBee from "./pages/SpellingBee";
import Snake from "./pages/Snake";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="memory" element={<Memory />} />
        <Route path="word-search" element={<WordSearch />} />
        <Route path="spelling-bee" element={<SpellingBee />} />
        <Route path="snake" element={<Snake />} />
      </Routes>
    </>
  );
}

export default App;
