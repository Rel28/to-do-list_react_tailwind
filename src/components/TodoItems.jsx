import React, { useState } from 'react';
import delete_icon from '../assets/delete.png'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'

const TodoItems = ({todo, onDelete}) => {
  const [check, setCheck] = useState(false)

  function handleCheck() {
    setCheck(!check);

  }

  let icon = check ? tick : not_tick;
  let todoCheck = check ? 'line-through text-[#ABABAB]' : '';

  return (
     
    // Content Card
     <div className="bg-[#384148] border-[1px] border-[#343434] w-[430px] h-20 rounded-[10px] flex items-center px-3">
        <img src={icon} onClick={handleCheck} alt="not_tick" className='size-11 cursor-pointer'/>
        <p className={`ml-5 text-xl font-semibold text-white ${todoCheck} transition-all`}>{todo}</p>
        <img src={delete_icon} onClick={onDelete} alt="delete_icon" className='size-11 ml-auto cursor-pointer'/>
    </div>
    
  )
}

export default TodoItems