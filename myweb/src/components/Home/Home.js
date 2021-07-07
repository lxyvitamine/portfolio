import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section>
        <div className="home">
          <div className="title">
            <h1>
              <p>Hi 👋🏻,</p>
              <p>I am Xinyi Lu</p>
              <p>A Software developer</p>
            </h1>
            <Link to="/about">
              <button>More Info</button>
            </Link>
          </div>

          <div className="person">
            <img
              src={`${process.env.PUBLIC_URL}/pic.jpeg`}
              alt="person picture"
            />
          </div>
        </div>
      </section>

      <section className="second">
        <p> somthing here</p>
        <p> somthing here</p>
        <p> somthing here</p>
        <p> somthing here</p>
        <p> somthing here</p>
        <p> somthing here</p>
        <p> somthing here</p>
      </section>
    </>
  );
};

export default Home;
