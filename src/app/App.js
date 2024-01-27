import './App.css';
import AddTodo from '../components/addToDo/AddTodo';
import Todos from '../components/todos/Todos';
import { useEffect, useRef, useState } from 'react';
import UpdateTodo from '../components/updateToto/UpdateTodo';

const getItems = () => {
  return JSON.parse(localStorage.getItem('items'));
};



const App = () => {

  const [items, setItems] = useState(getItems());
  const [updateTodo, setUpdateTodo] = useState('');
  const [toggle, setToggle] = useState(false);
  
  const handleInput = (inputText) => {
    const date = new Date().getTime().toString();
    const newItem = {text: inputText, date}
    setItems([...items, newItem]);
  };

  const updateTodoClick = () => {
    if (updateTodo) {
      let newItems = [...items];
      for (let i = 0; i < newItems.length; i++) {
        if (newItems[i].date === updateTodo.date) {
          newItems[i].text = updateTodo.text;
        }
      }
      setItems(newItems);
    }
    setUpdateTodo('');
    setToggle(false);
  };

  const cancelTodo = () => {
    console.log('cancel');
    setUpdateTodo('');
    setToggle(false);
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.date !== id));
  };

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const changeTodo = (text) => {
    const date = updateTodo.date;
    setUpdateTodo({text, date});
  }

  return (
    <div className="app">
      <h1 className="header">TO-DO APP</h1>
      <AddTodo handleInput={handleInput} />
      {toggle ? 
        <UpdateTodo changeTodo={changeTodo} cancelTodo={cancelTodo} updateTodo={updateTodo} updateTodoClick={updateTodoClick} />
        : null
      }
      <div className='line'></div>
      <Todos items={items} deleteItem={deleteItem} setUpdateTodo={setUpdateTodo} setToggle={setToggle}/>
    </div>
  );
}

export default App;