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
              <p>Hi,</p>
              <p>I am Xinyi Lu</p>
              <p>Software developer</p>
            </h1>
            <Link to="/about">
              <button>More Info</button>
            </Link>
          </div>
          <div className="skills">
            <h1>Skills</h1>
            <div className="content">
              <div>
                <strong>Languages:</strong>
                <li>CSS3</li>
                <li>HTML5</li>
                <li>Node.js</li>
                <li>JavaScript</li>
              </div>
              <div>
                <strong>Libraries:</strong>
                <li>Bootstrap</li>
                <li>Express.js</li>
                <li>Material-ui</li>
                <li>React.js</li>
              </div>
              <div>
                <strong>Tools:</strong>
                <li>Eslint</li>
                <li>Webpack</li>
                <li>Chrome Dev</li>
                <li>Git & Github</li>
              </div>
              <div>
                <strong>Uint Test:</strong>
                <li>Jest</li>
                <li>Enzyme</li>
                <li>React-test</li>
                <li>SupperTest</li>
              </div>
            </div>
          </div>
          {/* <div className="person">
            <img
              src={`${process.env.PUBLIC_URL}/pic.jpeg`}
              alt="person picture"
            />
          </div> */}
        </div>
      </section>
      <section>
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
