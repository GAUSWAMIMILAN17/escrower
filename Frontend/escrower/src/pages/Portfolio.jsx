import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <div className="portfolio-head">
          <div className="portfolio-left">
            <span className="portfolio-tag">OUR PORTFOLIO</span>
            <h2>AI images</h2>
          </div>

          <div className="portfolio-right">
            <p>
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia.
            </p>
            <button className="portfolio-btn">View All</button>
          </div>
        </div>

        <div className="portfolio-grid">
          <img src="/images/p1.jpg" alt="" />
          <img src="/images/p2.jpg" alt="" />
          <img src="/images/p3.jpg" alt="" />
          <img src="/images/p4.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}
