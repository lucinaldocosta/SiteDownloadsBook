import Highlights from "../Components/Highlights";
import Aside from "../Components/Aside";
import "../Styles/Home.css";
function Home() {
  return (
    <section className="home_section">
      <article className="home_article">
        <Highlights />
        <Aside />
      </article>
    </section>
  );
}
export default Home;
