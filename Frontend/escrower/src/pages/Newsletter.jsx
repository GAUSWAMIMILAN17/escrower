import "./Newsletter.css";

export default function Newsletter() {
  return (
    <section className="newsletter-section">
      <div className="newsletter-box">

        <div className="newsletter-left">
          <span className="newsletter-tag">NEWSLETTER SIGNUP</span>
          <h2>
            Subscribe for <br />
            the updates!
          </h2>
        </div>

        <div className="newsletter-right">
          <input
            type="email"
            placeholder="Enter your email address"
            className="newsletter-input"
          />

          <label className="newsletter-check">
            <input type="checkbox" />
            <span>
              I agree to the <u>Privacy Policy</u>.
            </span>
          </label>
        </div>

      </div>
    </section>
  );
}
