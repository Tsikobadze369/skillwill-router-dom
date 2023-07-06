import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Fact from "./components/Fact";

function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="title">Harry Potter Fan Page</h1>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/fact/:factId" element={<Fact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
