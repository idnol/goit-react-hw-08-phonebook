import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contacts/api';
import DeleteIcon from '@mui/icons-material/Delete';


export const ListItem = ({id, name, number }) => {
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeContact(id));
  }

  return (
    <div>
      {name}: <span>{number}</span>
       <button type='button' onClick={remove}><DeleteIcon /></button>
    </div>
  )
}
