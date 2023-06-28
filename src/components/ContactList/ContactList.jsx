import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyledContactList,
  StyledContactItem,
  StyledName,
  StyledNumber,
} from './ContactList.styled';

import { selectContacts, selectFilter } from 'redux/contacts/contactsSelectors';
import {
  deleteContactThunk,
  fetchContactsThunk,
} from 'redux/contacts/thunksOperations';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const handleDeleteContact = async contactId => {
    try {
      dispatch(deleteContactThunk(contactId));
    } catch (error) {
      console.log('Error deleting contact:', error);
    }
  };

  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  const renderedContacts = filter ? filteredContacts : contacts;

  return (
    <StyledContactList>
      {renderedContacts.map(({ id, name, number }) => (
        <StyledContactItem key={id}>
          <StyledName>{name}</StyledName> <StyledNumber>{number}</StyledNumber>
          <button type="button" onClick={() => handleDeleteContact(id)}>
            Delete
          </button>
        </StyledContactItem>
      ))}
    </StyledContactList>
  );
};

export default ContactList;
