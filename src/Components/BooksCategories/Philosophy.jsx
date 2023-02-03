import { Link } from "react-router-dom";
import "../../Styles/BooksCategories.css";

function Philosophy() {
  return (
    <section>
      <Link to="/Categories/Philosophy" className="bookscategories_title">
        Philosophy
      </Link>
      <p className="bookscategories_description">
        Philosophy Genre – What's the best definition for the philosophy genre?
        Books in the philosophy nonfiction genre are about the fundamental
        nature of knowledge, reality, and existence as an academic discipline.
        The books in this genre also explore fundamental truths about one's
        self, the world, and their relationships
      </p>
    </section>
  );
}
export default Philosophy;
