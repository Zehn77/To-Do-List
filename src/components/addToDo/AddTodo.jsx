import { useRef } from 'react';
import './AddTodo.css';

const AddTodo = ({handleInput}) => {
    const inputRef = useRef(null);
    return (
        <div className='add-todo'>
            <input ref={inputRef} type="text" placeholder='Add Task' />
            <button onClick={() => {
                    handleInput(inputRef.current.value);
                    inputRef.current.value = '';
                }
            }>
                Add task
            </button>
        </div>
    );
};

export default AddTodo;