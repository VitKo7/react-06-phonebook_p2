import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleRemove } from '../../redux/contacts/contacts-actions';
import styles from './ContactListItem.module.css';

const ContactListItem = ({ id, name, number, handleRemove }) => {
  return (
    <>
      <p className={styles.contact}>
        {name}: {number}
      </p>

      <button
        data-id={id}
        onClick={event => handleRemove(id)}
        type="button"
        className={styles.btnDelete}
      >
        Delete
      </button>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  // contacts: state.contacts,
});

const mapDispatchToProps = {
  handleRemove,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
