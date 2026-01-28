import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">

        <div className="footer-top">
          <div className="footer-logo">
            <span>Escrower</span>
          </div>

          <div className="footer-mail">
            <span className="footer-small">Want to talk us? Say hi 👋</span>
            <h2>hello@escrower.in</h2>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-links">

          <div className="footer-col">
            <h4>Menu</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li>Articles</li>
              <li>Videos</li>
              <li>Blog</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>+91 94278 89117</li>
              <li>info@escrower.in</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Social</h4>
            <ul>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Behance</li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <span>©2026 Escrower. All Rights Reserved.</span>
          <div className="footer-policy">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
