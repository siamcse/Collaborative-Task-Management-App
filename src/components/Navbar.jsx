import React from 'react';

const Navbar = () => {
    const handleLogout = () => {
        // logout()
        //     .then(() => { })
    }
    return (
        <div className='container mx-auto mt-5'>
            <div className='flex justify-end'>
                <button onClick={handleLogout} className='border-2 p-2 rounded-md bg-emerald-600 text-white'>Logout</button>
            </div>
        </div>
    );
};

export default Navbar;