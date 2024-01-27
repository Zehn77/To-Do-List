import './TodoItems.css';
import { MdOutlineDelete, MdOutlineModeEdit } from "react-icons/md";

const TodoItems = ({item, deleteItem, setUpdateTodo, setToggle}) => {
    const handleEditButton = () => {
        setUpdateTodo(item);
        setToggle(true);
    };
    return (
        <div className='todo-items'>
            <h3>{item.text}</h3>
            <div className='icons'>
                <span onClick={handleEditButton} className='delete-icon'>
                    <MdOutlineModeEdit className='icon' />
                </span>
                <span onClick={() => deleteItem(item.date)} className='delete-icon'>
                    <MdOutlineDelete className='icon' />
                </span>
            </div>
        </div>
    );
};

export default TodoItems;