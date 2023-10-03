import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import { Form, Label, Button } from './ContactForm.styled';
import { useState } from 'react';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const [state, setState] = useState({
    name: '',
    number: '',
  });

  const doesItExist = object => {
    return contacts.list.some(
      contact =>
        contact.name.toLowerCase() === object.name.toLowerCase() ||
        contact.number === object.number
    );
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (doesItExist({ ...state })) {
      alert(`${name} or ${number} is already in contacts.`);
    } else {
      dispatch(addContact({ ...state }));
    }
    setState({
      name: '',
      number: '',
    });
  };

  const { name, number } = state;
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          value={name}
          required
        />
      </Label>
      <Label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          value={number}
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
