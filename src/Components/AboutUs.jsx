import "../Styles/AboutUs.css";
import AboutUsLogo from "../IMG/aboutLogo.jpg";

function AboutUs() {
  return (
    <article className="about_article">
      <img src={AboutUsLogo} alt="Logo" className="about_photo" />
      <h3 className="about_title">About Us</h3>
      <p className="about_description">
        It is a digital library where you will find electronic books in popular
        formats such as epub to download for free through external servers
        shared by users from all over the Spanish-speaking world.
        <br></br>
        Here you can find education books for learning such as mathematics,
        medicine, biology, as well as literary novels of all genres, all to
        download completely free. The purpose of the page is to offer books on
        all subjects.
        <br></br>
        You can browse the Literature section where you will find all genres of
        novels, for example, Romantic, Historical, Black.
        <br></br>
        Instead, in the Non-fiction section, it has books on Cooking, Health,
        self-help and spirituality, Essays, etc. all in epub and mobi formats,
        it also has PDF magazines in Spanish. We invite you to visit us daily
        and enjoy reading the news that is published every day.
      </p>
    </article>
  );
}
export default AboutUs;