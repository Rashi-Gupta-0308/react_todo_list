import React, { useState, useEffect } from 'react'
import Input from './Components/input.js'
import List from './Components/list.js'

const App = () => {
  const [todo, setTodo] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todo));
  }, [todo]);

  const addTodo = (item) => {
    setTodo([...todo, {item}])
  }

  const removeTodo = (id) => {
    const newTodo = todo.filter((d, index) => {
      if(id !== index) return true;
      else return false;
    })
    setTodo(newTodo);
  }
  return (
    <div className='bg-black w-full h-screen flex items-center'>
      <div className=' m-auto w-[80%] h-[90%] bg-[#0a81d6] flex flex-col items-center justify-center'>
        <div className='w-[40%] h-[80%] bg-white border rounded-2xl flex flex-col items-center'>
        <Input handler={addTodo} />
        <List data={todo} handler={removeTodo}/>
        </div>
      </div>
    </div>
  )
}

export default App
