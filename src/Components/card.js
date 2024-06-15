import React, { useState } from 'react'
import { ImCheckboxUnchecked } from "react-icons/im";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { ImCheckboxChecked } from "react-icons/im";

const Card = (props) => {
    const[done, setDone] = useState(false);

  return (
    <div className={`w-full border rounded border-gray-400 flex p-2 items-center justify-between mt-2 
    ${done ? 'bg-gray-400' : 'bg-[#41b0d55f]'}`}>
      <div onClick={
        () => setDone(!done)} className='cursor-pointer'>
        {done ? <ImCheckboxChecked className='text-xl' /> : <ImCheckboxUnchecked className='text-xl' />}
      </div>
      <div className='flex justify-between items-center w-full ml-1'>
        <span className={`flex-1 ml-1 
            ${done ? 'line-through text-gray-500' : ''}`}>
                {props.item}
        </span>
        <RiDeleteBin6Fill className='text-xl cursor-pointer ml-[350px]' 
        onClick={() => props.handler(props.id)}/>
      </div>
    </div>
  )
}

export default Card
