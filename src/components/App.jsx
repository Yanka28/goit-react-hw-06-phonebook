import { Layout } from './Layout/Layout';
import { ContactForm } from './ContactForm/ContactForm';
import { FilterContacts } from './FilterContacts/FilterContacts';
import { ContactsList } from './ContactsList/ContactsList';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
   <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
         <FilterContacts/>
         <ContactsList/>
        <GlobalStyle />
      </Layout>
  );
};
