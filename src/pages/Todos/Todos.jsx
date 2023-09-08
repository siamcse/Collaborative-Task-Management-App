import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import TodoList from './TodoList';
import { format } from 'date-fns';
import TodosForm from './TodosForm';
import Modal from '../../components/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/fontawesome-free-solid';

const Todos = () => {
    const { user } = useContext(AuthContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    const date = format(new Date(), 'PPPP');

    return (
        <div className='container mx-auto'>
            <div className='mt-16'>
                <p className='text-center font-medium'>{date}</p>
                <h1 className='text-3xl md:text-5xl text-center'>Welcome {user?.displayName}!</h1>
                <div className='flex justify-center mt-4'>
                    <button onClick={openModal} className="bg-gray-500 text-white px-4 py-2 rounded">
                        <FontAwesomeIcon icon={faPlus} className='mr-2' />
                        Create Task
                    </button>
                    <Modal isOpen={isModalOpen} onClose={closeModal}>
                        <TodosForm onClose={closeModal}/>
                    </Modal>
                </div>
                
            </div>
            <TodoList />
        </div>
    );
};

export default Todos;