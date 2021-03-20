import { connect } from 'react-redux';
import ContactList from './ContactList';

const getFilteredContacts = state => {
  const { filter, items } = state.contacts;
  // const { contacts } = this.state;
  return items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

const mapStateToProps = state => ({
  contacts: getFilteredContacts(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
