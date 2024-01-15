import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="wrapper">
      <h1>Gaming Hub</h1>
      <div className="container">
        <ul className="games">
          <li className="links">
            <Link to="memory">Memory</Link>
          </li>
          <li className="links">
            <Link to="word-search">Word Search</Link>
          </li>
          <li className="links">
            <Link to="spelling-bee">Spelling Bee</Link>
          </li>
          <li className="links">
            <Link to="snake">Snake</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
