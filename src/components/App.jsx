import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './contactForm';
import ContactList from './contactList';
import { AppTitle, ListTitle, Container } from './App.styled';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = name => {
    const contact = {
      id: nanoid(),
      name,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  render() {
    return (
      <Container>
        <AppTitle>Phonebook</AppTitle>
        <ContactForm onSubmit={this.addContact} />
        <ListTitle>Contacts</ListTitle>
        <ContactList contacts={this.state.contacts} />
      </Container>
    );
  }
}

export default App;
