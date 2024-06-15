import React, { useState, useRef } from 'react'

const Input = (props) => {
  const inputBox = useRef();

  return (
    <div className='w-full p-3 mt-[10px] mb-10'>
      <input 
        placeholder='Write your task!' 
        className='border-2 rounded w-[80%] border-[#0a81d6] text-lg text-gray-700 p-1 pl-3 ml-2'
        ref = {inputBox}
      />
      <button 
      className='ml-[20px] bg-[#0a81d6] text-white w-[12%] border rounded-[10%] font-bold text-lg p-1'
      onClick={() => {props.handler(inputBox.current.value) 
      inputBox.current.value="";}
      }>
        Add
      </button>
    </div>
  )
}

export default Input