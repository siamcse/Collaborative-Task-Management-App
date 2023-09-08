import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const handleLogout = () => {
        logout()
            .then(() => { })
    }
    return (
        <div className='container mx-auto mt-5'>
            <div className='bg-gray-100 shadow-xl rounded-lg flex justify-between items-center'>
                <div className='flex gap-3 ml-5'>
                    <Link className='text-lg text-gray-500' to='/'>Home</Link>
                    <Link className='text-lg text-gray-500' to='/todos'>Todos</Link>
                </div>
                <div className=''>
                    {
                        user?.email ?
                            <>
                                <button onClick={handleLogout} className='border-2 rounded-full text-white mr-4 my-1'>
                                    <img className='w-10 h-10 rounded-full' src={user?.photoURL} alt="" />
                                </button>
                            </>
                            :
                            <Link to='/' className='border-2 p-2 rounded-md bg-emerald-600 text-white'>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;