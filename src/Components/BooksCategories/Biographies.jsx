import { Link } from "react-router-dom";
import "../../Styles/BooksCategories.css";

function Biographies() {
  return (
    <section>
      <Link to="/Categories/Biographies" className="bookscategories_title">
        Biographies
      </Link>
      <p className="bookscategories_description">
        A biography is simply the story of a real person’s life. It could be
        about a person who is still alive, someone who lived centuries ago,
        someone who is globally famous, an unsung hero forgotten by history, or
        even a unique group of people. The facts of their life, from birth to
        death (or the present day of the author), are included with
        life-changing moments often taking center stage. The author usually
        points to the subject’s childhood, coming-of-age events, relationships,
        failures, and successes in order to create a well-rounded description of
        her subject.
      </p>
    </section>
  );
}
export default Biographies;
