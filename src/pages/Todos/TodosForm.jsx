import React from 'react';
import { useForm } from 'react-hook-form';

const TodosForm = () => {
    const { handleSubmit, register } = useForm();

    const handleAddTodo = (data) => {
        console.log(data);
    }
    return (
        <div className='max-w-lg flex-shrink-0 bg-base-100 rounded-md mt-4 flex justify-center items-center mx-auto'>
            <form onSubmit={handleSubmit(handleAddTodo)} className="w-full">
                <div className="flex flex-col pt-3">
                    <label className="pb-2">
                        <span className="font-medium">Title</span>
                    </label>
                    <input {...register("title", { required: true })} type="text" placeholder="name" className="p-2 border-2 rounded-lg focus:outline-none" />
                </div>
                <div className="flex flex-col pt-3">
                    <label className="pb-2">
                        <span className="font-medium">Priority Level</span>
                    </label>
                    <input {...register("level", { required: true })} type="text" placeholder="email" className="p-2 border-2 rounded-lg focus:outline-none" />
                </div>
                <div className="flex flex-col pt-3">
                    <label className="pb-2">
                        <span className="font-medium">Description</span>
                    </label>
                    <textarea {...register("description", { required: true })} type="text" placeholder="password" className="p-2 border-2 rounded-lg focus:outline-none" />
                </div>
                <div className="mt-3">
                    <input type='submit' value='Add' className="p-2 text-white bg-green-600 w-full rounded-xl cursor-pointer" />
                </div>
            </form>
        </div>
    );
};

export default TodosForm;