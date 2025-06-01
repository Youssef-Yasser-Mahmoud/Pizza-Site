import React from "react";
import Multiplepizzas from "../assets/multiplePizzas.jpeg";
import '../styles/About.css'

function About() {
  return (
    <div>
      <div className="about">
        <div
          className="aboutTop"
          style={{ backgroundImage: `url(${Multiplepizzas})` }}
        >
          
        </div>
        <div className="aboutBottom">
          <h1>ABOUT US</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            aliquam aspernatur aperiam repellat a, eveniet necessitatibus
            nostrum quam itaque explicabo eligendi soluta consectetur similique
            vero libero alias obcaecati? Laboriosam, soluta?
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
