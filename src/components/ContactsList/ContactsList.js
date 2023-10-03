import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import { List, Contact, ListItem, Button } from './ContactsList.styled';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  return (
    <List>
      {contacts.map(contact => (
        <Contact key={contact.id}>
          <ListItem>
            {contact.name}:{contact.number}
          </ListItem>
          <Button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </Button>
        </Contact>
      ))}
    </List>
  );
};
