import React from 'react';

const CustomModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg z-50">
        <button onClick={onClose} className="absolute top-2 right-2 p-2">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default CustomModal;
