import "./Features.css";

export default function Features() {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-head">
          <span>FEATURES</span>
          <h2>Create your dream with Ai</h2>
        </div>

        <div className="features-grid">
          <div className="feature-card up">
            <div className="feature-icon">
              <img src="/icons/features-icon-1.svg" alt="" />
            </div>
            <h3>Excellent support</h3>
            <p>Marketing execution is the process of carrying out the.</p>
          </div>

          <div className="feature-card down">
            <div className="feature-icon">
              <img src="/icons/features-icon-2.svg" alt="" />
            </div>
            <h3>Reliable experts</h3>
            <p>Marketing execution is the process of carrying out the.</p>
          </div>

          <div className="feature-card up">
            <div className="feature-icon">
              <img src="/icons/features-icon-3.svg" alt="" />
            </div>
            <h3>Endless possibilities</h3>
            <p>Marketing execution is the process of carrying out the.</p>
          </div>

          <div className="feature-card down">
            <div className="feature-icon">
              <img src="/icons/features-icon-4.svg" alt="" />
            </div>
            <h3>Unique technology</h3>
            <p>Marketing execution is the process of carrying out the.</p>
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
