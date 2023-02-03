import "../Styles/DetailsBook.css";

function DetailsBook({ details }) {
  return (
    <section className="detailsbook_section">
      <article>
        <img
          src="https://imagens.elivros.love/Cal-Newport/Baixar-Livro-Trabalho-Focado-Cal-Newport-Em-Epub-Pdf-Mobi-Ou-Ler-Online_large.jpg"
          alt="Photo of the book"
          className="detailsbook_photo"
        />
      </article>
      <h2 className="detailsbook_title">{details.title}</h2>
      <p className="detailsbook_author">{details.author}</p>
      <a href="./Downloads/livroMarco.pdf">Preview</a>
      <a href="./Downloads/livroMarco.pdf" download className="link_download">
        Download Pdf
      </a>
    </section>
  );
}
export default DetailsBook;