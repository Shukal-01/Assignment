import { useState } from 'react';
import { createItem, deleteItem } from '../utils/fileOperations';
import Modal from 'react-modal'; // Import the modal library

Modal.setAppElement('#__next'); // Ensure this is set to your app's root element
import TextEditor from './FileTypes/TextEditor';
import NoteMaker from './FileTypes/NoteMaker';
import ReadmePreview from './FileTypes/ReadmePreview';
import ListMaker from './FileTypes/ListMaker';


const Folder = ({ structure, path, createNew, toggleExpand, isExpanded, handleDelete }) => {
  return (
    <div>
      {Object.keys(structure.folders).map((folder) => (
        <div key={folder} className="pl-4">
          <div className="flex items-center cursor-pointer justify-between">
            <div onClick={() => toggleExpand(`${path}/${folder}`)} className=''>   
            <span >
              {isExpanded[`${path}/${folder}`] ? '📂' : '📁'}
            </span>
              <span className="ml-2 my-2 flex-grow ">{folder}</span>
              </div>
            <button onClick={() => handleDelete(`${path}/${folder}`)} className="ml-2 text-red-500">🗑️</button>
          </div>
          {isExpanded[`${path}/${folder}`] && (
            <Folder
              structure={structure.folders[folder]}
              path={`${path}/${folder}`}
              createNew={createNew}
              toggleExpand={toggleExpand}
              isExpanded={isExpanded}
              handleDelete={handleDelete}
            />
          )}
        </div>
      ))}
      {structure.files.map((file) => (
        <div key={file} className="pl-4 flex items-center">
          <span>📄</span>
          <span className="ml-2 flex-grow">{file}</span>
          <button onClick={() => handleDelete(`${path}/${file}`)} className="ml-2 text-red-500">🗑️</button>
        </div>
      ))}
      {isExpanded[path] && (
        <>
          <button onClick={() => createNew('folder', path)} className="pl-4 text-blue-500">+ Folder</button>
          <button onClick={() => createNew('file', path)} className="pl-4 text-blue-500">+ File</button>
        </>
      )}
    </div>
  );
};

const Sidebar = ({ structure, setStructure }) => {
  const [isExpanded, setIsExpanded] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPath, setModalPath] = useState('');
  const [modalType, setModalType] = useState('');
  const [itemName, setItemName] = useState('');

  const toggleExpand = (path) => {
    setIsExpanded((prev) => ({ ...prev, [path]: !prev[path] }));
  };

  const openModal = (type, path) => {
    setModalType(type);
    setModalPath(path);
    setIsModalOpen(true);
  };

  const handleCreateItem = () => {
    if (itemName.trim()) {
      createItem(structure, setStructure, itemName, modalType, modalPath);
      setIsModalOpen(false);
      setItemName('');
    }
  };

  const handleDelete = (path) => {
    if (window.confirm(`Are you sure you want to delete this item?`)) {
      deleteItem(structure, setStructure, path);
    }
  };

  return (
    <div className="p-4">

       <div className='flex'>    
      <button onClick={() => openModal('folder', '')} className="mb-4 p-2 bg-green-500 text-white rounded">
        + New  Folder
      </button>
      <button onClick={() => openModal('file', '')} className="mb-4 ml-4 p-2 bg-blue-500 text-white rounded">
        + New  File
        </button>
        </div> 
      <Folder
        structure={structure}
        path=""
        createNew={openModal}
        toggleExpand={toggleExpand}
        isExpanded={isExpanded}
        handleDelete={handleDelete}
      />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Create New Item"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      >
        <div className="bg-white p-6 rounded shadow-lg z-50 relative">
          <button onClick={() => setIsModalOpen(false)} className="absolute top-2 right-2 p-2">
            &times;
          </button>
          <div>
            <h2 className="mb-4 text-black">Create New {modalType.charAt(0).toUpperCase() + modalType.slice(1)}</h2>
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              placeholder={`Enter ${modalType} name`}
              className="p-2 text-black border rounded mb-4 w-full"
            />
            <button
              onClick={handleCreateItem}
              className="p-2 px-5 text-[18px] font-bold bg-blue-500 text-white"
            >
              Create
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Sidebar;
