import React from 'react';

const TodoList = () => {
    return (
        <div className='flex justify-start mt-10'>
            <ol className='list-decimal w-[700px] mx-auto shadow-md rounded p-3'>
                <li className='p-2 flex flex-col sm:flex-row justify-between sm:items-center gap-3'>
                    <p>1. <span>I will do this task.</span></p>
                    <div>
                        <button className="p-2 text-white bg-emerald-600 rounded-lg mr-2">Done</button>
                        <button className="p-2 text-white bg-red-600 rounded-lg">Remove</button>
                    </div>
                </li>
            </ol>
        </div>
    );
};

export default TodoList;