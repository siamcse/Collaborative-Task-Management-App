import React, { useEffect, useState } from 'react';
import { getstoredTodos } from '../../utilities/fakeDb';

const TodoList = ({ refresh }) => {
    const [todos, setTodos] = useState();

    useEffect(() => {
        setTodos(getstoredTodos());
    }, [refresh])
    console.log(todos);
    return (
        <div className='flex justify-start mt-10'>
            <ol className='list-decimal w-[700px] mx-auto shadow-md rounded p-3'>
                {
                    todos?.map((todo, i) => <li key={i} className='p-2 flex flex-col sm:flex-row justify-between sm:items-center gap-3'>
                        <div className='flex items-center justify-between w-full'>
                            <div>
                                <p className='text-lg'><span>{todo.title}</span></p>
                                <p>{todo.description}</p>
                            </div>
                            <p><span>{todo.date}</span></p>
                        </div>
                        <div className='flex'>
                            <button className="p-2 text-white bg-emerald-600 rounded-lg mr-2">Done</button>
                            <button className="p-2 text-white bg-red-600 rounded-lg">Remove</button>
                        </div>
                    </li>)
                }
            </ol>
        </div>
    );
};

export default TodoList;