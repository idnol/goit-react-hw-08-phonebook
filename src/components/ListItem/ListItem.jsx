import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contacts/api';

export const ListItem = ({id, name, number }) => {
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeContact(id));
  }

  return (
    <div>
      {name}: <span>{number}</span>
       <button type='button' onClick={remove}>Delete</button>
    </div>
  )
}
