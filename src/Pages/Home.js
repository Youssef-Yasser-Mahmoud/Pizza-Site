import React from "react";
import { Link } from "react-router-dom";
import homePageImg from "../assets/pizza.jpeg";
import '../styles/Home.css'

function Home() {
  return (
    <div className="home" style={{ background: `url(${homePageImg})` }}>
      <div className="headerContainer">
        <h3>Pedro's Pizzeria</h3>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link to="menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
