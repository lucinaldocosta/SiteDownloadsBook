import Adventure from "../Components/BooksCategories/Adventure";
import Philosophy from "../Components/BooksCategories/Philosophy";
import Fiction from "../Components/BooksCategories/Fiction";
import Biographies from "../Components/BooksCategories/Biographies";
import Romance from "../Components/BooksCategories/Romance";
import "../Styles/Categories.css";

function Categories(){
    return(
        <section className="categories_section">
            <article className="categories_article">
                <Adventure/>
                <Biographies/>
                <Fiction/>
                <Philosophy/>
                <Romance/>
            </article>
        </section>
    )
}
export default Categories;