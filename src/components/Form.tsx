import { useState } from 'react';
import store from '../redux/store';

const Form = () => {
  const [data, setData] = useState('');

  const todoLength = store.getState().todoReducer.length;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    store.dispatch({
      type: 'ADD_TODO',
      payload: {
        id: todoLength + 1,
        todo: data,
        completed: false,
      },
    });
    setData('');
  };
  return (
    <form style={{ marginTop: 30 }}>
      <input
        type='text'
        name=''
        id=''
        placeholder='to-do'
        value={data}
        onChange={({ target }) => setData(target.value)}
      />
      <button onClick={handleClick} type='submit'>
        Adicionar
      </button>
    </form>
  );
};

export default Form;
