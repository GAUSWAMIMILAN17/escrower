import "./Header.css";

const Header = () => {
  return (
    <nav className="zex-header">
      <div className="zex-container">

        <div className="zex-logo">zex.ai</div>

        <ul className="zex-menu">

          <li className="zex-dropdown">
            <span className="zex-link active">Home</span>
            <ul className="zex-dropdown-menu">
              <li><a href="#">Home One</a></li>
              <li><a href="#">Home Two</a></li>
              <li><a href="#">Home Three</a></li>
            </ul>
          </li>

          {["About","Services","Pricing","Team","Blog","Contacts"].map((item) => (
            <li key={item}>
              <a href="#" className="zex-link">{item}</a>
            </li>
          ))}

        </ul>

        <button className="zex-cta">Get Started</button>

      </div>
    </nav>
  );
};

export default Header;
