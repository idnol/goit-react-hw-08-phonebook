import { useDispatch } from 'react-redux';
import { updateQuery } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return <div>
    <h2>Contacts</h2>
    <input type='text' name='filter' onChange={e => dispatch(updateQuery(e.target.value))} />
  </div>
}
