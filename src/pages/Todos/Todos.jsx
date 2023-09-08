import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { useForm } from 'react-hook-form';
import TodoList from './TodoList';

const Todos = () => {
    const {user} = useContext(AuthContext);
    const {handleSubmit,register} = useForm();

    const handleAddTodo = (data)=>{
        console.log(data);
    }
    return (
        <div className='container mx-auto'>
            <div className='mt-16'>
                <h1 className='text-3xl md:text-5xl text-center'>Welcome {user?.displayName}!</h1>
                <form onSubmit={handleSubmit(handleAddTodo)} className='flex flex-col sm:flex-row items-center justify-center mt-10 p-2 md:p-0 gap-4'>
                    <input {...register("todo", { required: true })} placeholder="Type here" className="p-2 rounded-lg focus:outline-none border-2 w-full max-w-xs" type="text" />
                    <input type="submit" value='Add' className='p-2 rounded-lg  text-white bg-emerald-600' />
                </form>
            </div>
            <TodoList />
        </div>
    );
};

export default Todos;