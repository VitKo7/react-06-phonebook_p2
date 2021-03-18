import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from '../contact-list-item/ContactListItem';
import { connect } from 'react-redux';
import styles from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  return (
    <div className="contactsList">
      {contacts.length === 0 ? (
        <p>There are no contacts here yet ...</p>
      ) : (
        <ul className={styles.list}>
          {contacts.map(contact => (
            <li className={styles.contactListItem} key={contact.id}>
              <ContactListItem {...contact} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  // onRemove: PropTypes.func.isRequired,
};

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
