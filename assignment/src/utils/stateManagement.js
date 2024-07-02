import { useState } from 'react';
import { createItem, deleteItem } from './fileOperations';

export const useFileStructure = () => {
  const [structure, setStructure] = useState({
    folders: {
      src: {
        files: ['file1.ed', 'file2.note'],
        folders: {},
      },
      docs: {
        files: ['README.md'],
        folders: {},
      },
    },
  });

  const handleCreateItem = (name, type, parentPath) => {
    createItem(structure, setStructure, name, type, parentPath);
  };

  const handleDeleteItem = (path) => {
    deleteItem(structure, setStructure, path);
  };

  return { structure, handleCreateItem, handleDeleteItem };
};
