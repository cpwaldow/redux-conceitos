import { useState } from 'react';
import { toggleTheme } from './redux/actions/themeAction';
import store from './redux/store';
import Form from './components/Form';

function App() {
  const [theme, setTheme] = useState(store.getState().themeReducer.theme);
  const [todo, setTodo] = useState(store.getState().todoReducer);

  store.subscribe(() => {
    setTheme(store.getState().themeReducer.theme);
    setTodo(store.getState().todoReducer);
  });

  return (
    <>
      <h1>App</h1>
      <p>{theme}</p>
      <button type='button' onClick={() => store.dispatch(toggleTheme())}>
        Atualizar Tema
      </button>
      <Form />
      <ul>
        {todo.map((item) => (
          <li
            key={item.id}
            className={item.completed ? 'completed' : 'not-completed'}
          >
            {item.todo}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
