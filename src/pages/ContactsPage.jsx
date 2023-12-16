import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { List } from '../components/List/List';

export default function ContactsPage() {
  return <>
    <ContactForm />
    <Filter />
    <List />
  </>
}
