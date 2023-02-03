import AboutUs from "../Components/AboutUs";
import "../Styles/Contact.css";

function Contact() {
  return (
    <section className="contact_section">
      <AboutUs />
      <article className="contact_article">
        <h1 className="contact_title">Contact Form</h1>
        <form>
          <p>Your Name:</p>
          <input className="input_name" placeholder="Your Name" required />
          <p>Your Email:</p>
          <input
            className="input_email"
            type="email"
            placeholder="Your Email"
            required
          />
          <p>Your Message:</p>
          <textarea placeholder="Your message" required/>
          <button className="contact_button">Send Form</button>
        </form>
      </article>
    </section>
  );
}
export default Contact;