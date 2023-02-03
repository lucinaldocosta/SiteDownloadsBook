import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

function Navbar() {
  return (
    <header>
      <section className="navbar_section_logo">
        <article className="navbar_logo">
          <span id="logo"></span>
        </article>
        <article className="navbar_search">
          <input
            type="search"
            placeholder="Search Book"
            className="navbar_input"
          />
          <button className="navbar_button">Search</button>
        </article>
      </section>
      <section className="navbar_section_links">
        <nav className="navbar_links">
          <Link to="/" className="links">
            Home
          </Link>
          <Link to="/Categories" className="links">
            Categories
          </Link>
          <Link to="/Contact" className="links">
            Contact
          </Link>
        </nav>
      </section>
    </header>
  );
}
export default Navbar;
