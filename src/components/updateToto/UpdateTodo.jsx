import './UpdateTodo.css';

const UpdateTodo = ({updateTodo, changeTodo, updateTodoClick, cancelTodo}) => {
    return (
        <div className='update-todo'>
        <input
            type="text"
            placeholder='Update Task'
            value={updateTodo && updateTodo.text} 
            onChange={e => changeTodo(e.target.value)}
            
        />
        <button onClick={() => updateTodoClick()} className='btn btn-update'>Update</button>
        <button onClick={() => cancelTodo()} className='btn btn-cancel'>Cancel</button>
    </div>
    );
};

export default UpdateTodo;