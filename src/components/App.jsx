import React, { Component } from 'react';
import ContactForm from './contactForm';
import { AppTitle, Container } from './App.styled';

class App extends Component {
  render() {
    return (
      <Container>
        <AppTitle>Phonebook</AppTitle>
        <ContactForm />
        <h2>Contacts</h2>
        <ul></ul>
      </Container>
    );
  }
}

export default App;
