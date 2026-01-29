import React from "react";
import "./Home.css";
import ImageSlider from "../pages/ImageSlider";

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

          <ImageSlider />
        </div>
      </section>

      <section className="about-section">
        <div className="about-wrapper">
          <div className="about-images">
            <img src="/images/h1-about-left-1.jpg" className="about-img-large" />
            <div className="about-img-small">
              <img src="/images/h1-about-left-2.jpg" />
              <img src="/images/h1-about-left-3.jpg" />
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
              voluptas sit aspernatur aut odit aut fugit.
            </p>
            <button className="about-btn">More About Us</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
