import React from 'react';

import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { Container, SubTitle, Title } from 'components/App/App.styled';


const Contacts = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Filter />
      <SubTitle>Contacts</SubTitle>
      <ContactList />
    </Container>
  );
};

export default Contacts;
