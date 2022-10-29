import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Form, FormLabel, FormInput, FormBtn } from './ContactForm.styled';

class ContactForm extends Component {
  render() {
    return (
      <Form>
        <FormLabel>Name</FormLabel>
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <FormBtn type="submit">Add contact</FormBtn>
      </Form>
    );
  }
}

export default ContactForm;
