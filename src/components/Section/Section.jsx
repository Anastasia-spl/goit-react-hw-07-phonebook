import Container from '../Container';

const Section = ({ title, children }) => (
  <section className="Section">
    <Container>
      <h2 className="title">{title}</h2>
      {children}
    </Container>
  </section>
);

export default Section;
