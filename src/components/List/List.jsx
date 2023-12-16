import { ListItem } from '../ListItem/ListItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/api';

export const List = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(state => state.contacts.contacts);

  const filter = useSelector(state => state.contacts.filter);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contactArr = items.filter(item => {
    return item.name.toLowerCase().includes(filter);
  })

  return <>
    {isLoading && <h2>Loading</h2>}
    {error && <h2>{error}</h2>}
    {items.length > 0 && <ul>
      {contactArr.map(contact => (
        <li key={contact.id}>
          <ListItem id={contact.id} name={contact.name} number={contact.number} />
        </li>
      ))}
    </ul>}
  </>

}
