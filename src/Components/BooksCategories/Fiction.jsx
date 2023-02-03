import { Link } from "react-router-dom";
import "../../Styles/BooksCategories.css";

function Fiction() {
  return (
    <section>
      <Link to="/Categories/Fiction" className="bookscategories_title">
        Fiction
      </Link>
      <p className="bookscategories_description">
        A fictional book is a text created specifically for a work in an
        imaginary narrative that is referred to, depicted, or excerpted in a
        story, book, film, or other fictional work, and which exists only in one
        or more fictional works. A fictional book may be created to add realism
        or depth to a larger fictional work. A fictional book may provide the
        basis of the plot of a story, a common thread in a series of books or
        other works, or the works of a particular writer or canon of work.
      </p>
    </section>
  );
}
export default Fiction;
