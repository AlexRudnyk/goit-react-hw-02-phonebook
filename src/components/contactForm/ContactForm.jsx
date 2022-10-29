import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormLabel, FormInput, FormBtn } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.name);
    this.formInputReset();
  };

  formInputReset = () => {
    this.setState({
      name: '',
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormLabel>Name</FormLabel>
        <FormInput
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <FormBtn type="submit">Add contact</FormBtn>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
