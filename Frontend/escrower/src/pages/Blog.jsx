import "./Blog.css";

export default function Blog() {
  return (
    <section className="blog-section">
      <div className="blog-container">

        <div className="blog-head">
          <div className="blog-left">
            <span className="blog-tag">FROM OUR BLOG</span>
            <h2>News & articles</h2>
          </div>

          <button className="blog-btn">View All</button>
        </div>

        <div className="blog-grid">
          <div className="blog-card">
            <h3>Why is the next level art called intelligent?</h3>
            <p>
              Rapidiously re-engineer 24/365 bandwidth with highly
              efficient information.
            </p>
            <span className="blog-link">Read more →</span>
          </div>

          <div className="blog-card">
            <h3>Art's Next Level Intelligence Unveiled</h3>
            <p>
              Rapidiously re-engineer 24/365 bandwidth with highly
              efficient information.
            </p>
            <span className="blog-link">Read more →</span>
          </div>
        </div>
  </div>
        <div className="moving-text-wrapper">
          <div className="moving-text">
            ✱ BI IMAGE GENERATE ✱ BI IMAGE GENERATE ✱ BI IMAGE GENERATE ✱
            BI IMAGE GENERATE ✱ BI IMAGE GENERATE ✱ BI IMAGE GENERATE ✱
          </div>
        </div>
    
    </section>
  );
}
