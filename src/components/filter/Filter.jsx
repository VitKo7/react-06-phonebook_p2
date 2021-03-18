import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleInput } from '../../redux/contacts/contacts-actions';
import styles from './Filter.module.css';

const Filter = ({ contacts, filter, handleInput }) => {
  return (
    <>
      {contacts.length < 2 ? (
        <span> </span>
      ) : (
        <div className="contactsFilter">
          <p>Find contacts by name:</p>
          <input
            name="filter"
            type="text"
            autoComplete="off"
            className={styles.input}
            onChange={event => handleInput(event.target.value)}
            value={filter}
          />
        </div>
      )}
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: state.contacts.filter,
  contacts: state.contacts.items,
});

const mapDispatchToProps = {
  handleInput,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
