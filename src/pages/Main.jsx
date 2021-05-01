import { NavLink } from 'react-router-dom';
import Section from '../components/Section';
import Container from '../components/Container';
import routes from '../routes';

const Main = () => {
  return (
    <Section>
      <Container>
        <ul>
          <li>
            <NavLink to={routes.contactsPage}>ContactsBook</NavLink>
          </li>
        </ul>
      </Container>
    </Section>
  );
};

export default Main;
