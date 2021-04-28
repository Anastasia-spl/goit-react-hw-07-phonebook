import { connect } from 'react-redux';
import { contactsActions, contactsSelectors } from '../../redux/contacts';

const Filter = ({ value, onFilterChange }) => {
  return (
    <div className="filter-wrapper">
      <h3>Find contacts by name:</h3>
      <input type="text" value={value} onChange={onFilterChange} />
    </div>
  );
};

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onFilterChange: event =>
    dispatch(contactsActions.filterContact(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
