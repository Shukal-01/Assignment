import { useState } from 'react';

const Modal = ({ isOpen, onClose, onCreate }) => {
  const [itemType, setItemType] = useState('file');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded">
        <h2 className="text-xl mb-4">Create New Item</h2>
        <div className="mb-4">
          <label>
            <input
              type="radio"
              name="itemType"
              value="file"
              checked={itemType === 'file'}
              onChange={(e) => setItemType(e.target.value)}
            />
            File
          </label>
          <label className="ml-4">
            <input
              type="radio"
              name="itemType"
              value="folder"
              checked={itemType === 'folder'}
              onChange={(e) => setItemType(e.target.value)}
            />
            Folder
          </label>
        </div>
        <div className="flex justify-end">
          <button
            className="mr-2 bg-gray-300 px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => onCreate(itemType)}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
