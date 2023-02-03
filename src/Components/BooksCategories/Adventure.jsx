import { Link } from "react-router-dom";
import "../../Styles/BooksCategories.css";

function Adventure() {
  return (
    <section>
      <Link to="/Categories/Adventure" className="bookscategories_title">
        Adventure
      </Link>
      <p className="bookscategories_description">
        Adventure Genre Definition – what’s the best definition for the
        adventure fiction genre? The adventure genre consists of books where the
        protagonist goes on an epic journey, either personally or
        geographically. Often the protagonist has a mission and faces many
        obstacles in his way. A good example would be The Lord of the Rings
        series. The adventure genre often pairs up with the action genre, since
        long epic journeys have a lot of action in them.
      </p>
    </section>
  );
}
export default Adventure;
