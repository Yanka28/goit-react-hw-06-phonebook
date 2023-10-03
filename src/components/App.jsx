import { Layout } from './Layout/Layout';
import { ContactForm } from './ContactForm/ContactForm';
import { FilterContacts } from './FilterContacts/FilterContacts';
import { ContactsList } from './ContactsList/ContactsList';
import { GlobalStyle } from './GlobalStyle';
import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';


// const getInitialContacts = () => {
//   const savedContacts = localStorage.getItem('contacts');
//   if (savedContacts !== null) {
//     return JSON.parse(savedContacts);
//   }
//   return [];
  
// };

export const App = () => {

  // const [contacts, setContacts] = useState(getInitialContacts);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts))
  // },[contacts]
  // )

  // const addContact = object => {
  //    const isExist = contacts.find(
  //     contact =>
  //       contact.name === object.name || contact.number === object.number
  //   );
  //   if (isExist) {
  //     alert(`${object.name} or ${object.number} is already in contacts.`);
  //     return;
  //   }
  //   setContacts(prevContacts => [
  //       ...prevContacts,
  //       { id: nanoid(), name: object.name, number: object.number },
  //     ],
  //   );
  // };
//   const onDelete = contactId => {
//     setContacts(prevContacts=> prevContacts.filter(contact => contact.id !== contactId)
//  )
// };
  
  // const getExistingContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };
  // const handleChangeFilter = e => { setFilter(e.target.value) };
  // ;

  return (
   <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
        {/* <ContactForm contacts={contacts} addContact={addContact} /> */}
      <h2>Contacts</h2>
         <FilterContacts
         />
        {/* <FilterContacts
          filter={filter}
          handleChangeFilter={handleChangeFilter}
        /> */}
        <ContactsList
         />
        {/* <ContactsList
          contacts={getExistingContacts()}
          onDelete={onDelete}
        /> */}
        <GlobalStyle />
      </Layout>
  );
};
