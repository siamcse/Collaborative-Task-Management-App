import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="relative bg-white w-1/2 p-8 rounded shadow-lg">
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    Close
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;