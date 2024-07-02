import { useState } from 'react';

const CreateFileFolder = ({ onCreate }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('file');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      onCreate(name, type);
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-2">
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="p-2 mb-2 bg-gray-700 text-white border border-gray-600 rounded"
      />
      <select 
        value={type} 
        onChange={(e) => setType(e.target.value)}
        className="p-2 mb-2 bg-gray-700 text-white border border-gray-600 rounded"
      >
        <option value="file">File</option>
        <option value="folder">Folder</option>
      </select>
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">Create</button>
    </form>
  );
};

export default CreateFileFolder;
