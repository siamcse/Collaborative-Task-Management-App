import React from 'react';
import { useForm } from 'react-hook-form';
import { addToDb } from '../../utilities/fakeDb';

const TodosForm = ({ onClose }) => {
    const { handleSubmit, register } = useForm();

    const handleAddTodo = (data) => {
        console.log(data);
        addToDb(data);
        onClose();
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
                        <span className="font-medium">Due Date</span>
                    </label>
                    <input {...register("date", { required: true })} type="date" placeholder="date" className="p-2 border-2 rounded-lg focus:outline-none" />
                </div>
                <div className="flex flex-col pt-3">
                    <label className="pb-2">
                        <span className="font-medium">Priority Level</span>
                    </label>
                    <select {...register("level", { required: true })} className="p-2 border-2 rounded-lg focus:outline-none">
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                <div className="flex flex-col pt-3">
                    <label className="pb-2">
                        <span className="font-medium">Description</span>
                    </label>
                    <textarea {...register("description", { required: true })} type="text" placeholder="description" className="p-2 border-2 rounded-lg focus:outline-none" />
                </div>
                <div className="mt-3">
                    <input type='submit' value='Add' className="p-2 text-white bg-green-600 w-full rounded-xl cursor-pointer" />
                </div>
            </form>
        </div>
    );
};

export default TodosForm;