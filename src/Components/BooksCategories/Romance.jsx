import { Link } from "react-router-dom";
import "../../Styles/BooksCategories.css";

function Romance() {
  return (
    <section>
      <Link to="/Categories/Romance" className="bookscategories_title">
        Romance
      </Link>
      <p className="bookscategories_description">
        Romance Genre - What’s the best definition for romance genre? Romance
        genre stories involve chivalry and often adventure. The prevailing type
        of story in the romance genre consists of a love relationship between a
        man and a woman, often from the woman’s point of view. There is always
        conflict that hinders the relationship, but is resolved to a “happy
        ending.”
      </p>
    </section>
  );
}
export default Romance;
