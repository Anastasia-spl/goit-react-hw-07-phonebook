import { createUseStyles } from 'react-jss';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import Loader from '../Loader';

const useStyles = createUseStyles({
  contactItem: {
    marginBottom: 15,
  },
  deleteBtn: {
    marginLeft: 25,
  },
});

const ContactList = ({ filteredContacts, onDeleteContact, isLoading }) => {
  const { contactItem, deleteBtn } = useStyles();

  return (
    <>
      {isLoading && (
        <Loader type="Circles" color="#00BFFF" height={80} width={80} />
      )}
      <ul>
        {filteredContacts.map(({ name, number, id }) => (
          <li key={id} className={contactItem}>
            <span>
              {name}: {number}
            </span>
            <button
              type="button"
              className={deleteBtn}
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
  filter: contactsSelectors.getFilter(state),
  filteredContacts: contactsSelectors.getFilteredContacts(state),
  isLoading: contactsSelectors.getLoader(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
