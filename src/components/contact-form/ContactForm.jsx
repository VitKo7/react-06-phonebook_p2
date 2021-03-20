import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createContact } from '../../redux/contacts/contacts-actions';
import { nanoid } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;

    const entryCheck = this.props.contacts.find(
      contact => contact.name === name || contact.number === number,
    );

    if (entryCheck) {
      alert(
        `Either '${entryCheck.name}' or '${entryCheck.number}' already exists`,
      );
      // this.resetForm();
    } else if (name.length === 0 || number.length === 0) {
      alert(`Please, fill in all the fields`);
      // this.resetForm();
    } else {
      const contactNew = {
        // id: uuidv4(),
        id: nanoid(),
        name,
        number,
      };
      this.props.createContact(contactNew);
    }
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className={styles.addContactForm}>
          <label className={styles.label}>Name:</label>
          <input
            name="name"
            type="text"
            placeholder="Name Surname"
            className={styles.input}
            onChange={this.handleInput}
            value={name}
          />
          <label className={styles.label}>Number:</label>
          <input
            name="number"
            type="text"
            // type="tel"
            placeholder="123-456"
            // pattern="[0-9]{3}-[0-9]{3}"
            className={styles.input}
            onChange={this.handleInput}
            value={number}
          />
          {/* <span className={styles.text}>
            <i>Use this format only:</i> xxx-xxx
          </span> */}
          <button type="submit" className={styles.btnAdd}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = {
  createContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
