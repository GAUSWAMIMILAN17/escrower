import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="home-section">
        <div className="home-content">
          <h1 className="home-title">
            Welcome to Escrower <br />
            with <span>Escrower.in</span>
          </h1>

          <p className="home-subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sapiente rem mollitia sequi dolorum odio.
          </p>

          <button className="home-btn">Get Started</button>
        </div>
      </section>

      <section className="about-section">
        

        <div className="about-wrapper">
          <div className="about-images">
            <img
              src="/images/about-main.jpg"
              alt=""
              className="about-img-large"
            />
            <div className="about-img-small">
              <img src="/images/about-1.jpg" alt="" />
              <img src="/images/about-2.jpg" alt="" />
            </div>
          </div>

          <div className="about-content">
            <span className="about-tag">WELCOME</span>

            <h2>
              Easy ways to use <br />
              AI tools, and tools <br />
              to build AI.
            </h2>

            <p>
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia.
            </p>

            <button className="about-btn">More About Us</button>
          </div>
        </div>
        <div className="moving-text-wrapper">
          <div className="moving-text">
            ✱ BI IMAGE GENERATE ✱ BI IMAGE GENERATE ✱ BI IMAGE GENERATE ✱
            BI IMAGE GENERATE ✱ BI IMAGE GENERATE ✱ BI IMAGE GENERATE ✱
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
