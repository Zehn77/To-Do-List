import './Todos.css';
import TodoItems from '../todoItems/TodoItems';

const Todos = ({items, deleteItem, setUpdateTodo, setToggle}) => {
    return (
        <>
            {items.map(item => {
                return <TodoItems
                            item={item}
                            key={item.date}
                            deleteItem={deleteItem}
                            setUpdateTodo={setUpdateTodo}
                            setToggle={setToggle}
                        />
            })}
            <h3>{items.length === 0 ? 'No Todo' : null}</h3>
        </>
    );
};

export default Todos;