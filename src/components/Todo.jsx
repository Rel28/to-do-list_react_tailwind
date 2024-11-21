import React, { useState } from 'react';
import TodoItems from './TodoItems'

const Todo = () => {

    // Setup some initial state

    //Todos is intialize as an array for storing the todo items
    const [todos, setTodos] = useState([]);

    //inputValue is initialize as an empty string for storing the input value
    const [inputValue, setInputValue] = useState('');

    // handleAdd is a function that will be called when the add button is clicked
    const handleAdd = () => {
        // Check if the input value is not empty
        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue]); //adding the user input into todos array
            setInputValue(''); // clear the input field
        }
    }

    //Adding a function to handle the delete button click
    const handleDelete = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

  return (
    <div className='bg-[#16222A] max-w-[1440px] w-full min-h-[550px] mx-auto mt-10 rounded-[30px] px-10 py-10'>
        {/* Add */}
        <div className="flex items-center justify-center">
            <input 
            type="text" 
            placeholder='Add your Task' 
            className='bg-[#384148] w-[1200px] h-14 px-5 rounded-[10px] text-white'
            value={inputValue} // reflects the user input as inputValue
            onChange={(e) =>  setInputValue(e.target.value)} // updates the inputValue state whenever the user types something

            />
            <button 
            className='ml-4 bg-[#7AA700] w-[150px] h-14 rounded-[10px] text-[#16222A] font-semibold text-lg hover:bg-[#8AB80B]'
            onClick={handleAdd} // calls the handleAdd function when the button is clicked
            >
                ADD +
            </button>
        </div>

        {/* todo list */}
        <div className='my-10 flex justify-center'>
            <div className="grid grid-cols-3 gap-x-10 gap-y-5">

                {/* Render the TodoItems component and pass the todos array as a prop */}
                {todos.map((todo, index) => (
                    <TodoItems 
                    key={index} 
                    todo={todo} 
                    onDelete={() => handleDelete(index)} // pass the handleDelete function as a prop to the TodoItems component
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Todo