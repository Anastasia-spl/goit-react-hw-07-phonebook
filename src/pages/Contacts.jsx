import { Component } from 'react';
import { connect } from 'react-redux';
import Section from '../components/Section';
import Container from '../components/Container';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactsList';
import Filter from '../components/Filter';
import { contactsOperations } from '../redux/contacts';

class Contacts extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <>
        <Container>
          <h1>Phonebook</h1>
        </Container>
        <Section title="Add contact:">
          <ContactForm />
        </Section>
        <Section>
          <Filter />
        </Section>
        <Section title="Contacts">
          <ContactList />
        </Section>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(null, mapDispatchToProps)(Contacts);
