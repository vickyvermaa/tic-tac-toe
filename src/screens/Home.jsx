import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
const Home = (props) => {
  return (
    <div className="home-buttons">
      <button>Play with computer</button>
      <Link to='/playground'><button>Play with friends</button></Link>
    </div>
  );
};

export default Home;
