import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from './contact-form/ContactForm';
import ContactList from './contact-list/ContactList';
import Filter from './filter/Filter';
import styles from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: [...parsedContacts] });
  //   }
  // }

  // componentDidUpdate(_, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  render() {
    return (
      <div className={styles.container}>
        <h2>Phonebook</h2>
        <ContactForm />

        <div className={styles.contacts}>
          <h3 className={styles.contactsTitle}>Contacts</h3>
          <Filter />
          <ContactList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts,
  filter: state.filter,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
