import React from 'react';

const Navbar = () => {
    const handleLogout = () => {
        // logout()
        //     .then(() => { })
    }
    return (
        <div className='container mx-auto mt-5'>
            <div className='flex justify-end'>
                <button onClick={handleLogout} className='btn  text-white btn-error'>Logout</button>
            </div>
        </div>
    );
};

export default Navbar;