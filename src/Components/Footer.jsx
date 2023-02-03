import { Link } from "react-router-dom";
import "../Styles/Footer.css";

function Footer() {
  return (
    <footer>
      <section className="footer_section">
        <ul className="footer_ul">
          <li>
            <Link to="/Contact" className="footer_links">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/HelpToShare" className="footer_links">
              HelpToShare
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="footer_links">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/SendBook" className="footer_links">
              Send Book
            </Link>
          </li>
        </ul>
      </section>
      <p className="copyright"> 2023 - LC Codes</p>
    </footer>
  );
}
export default Footer;
