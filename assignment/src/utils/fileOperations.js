export const createItem = (structure, setStructure, name, type, parentPath = '') => {
    const newStructure = { ...structure };
  
    const addToStructure = (currentPath, structure, name, type) => {
      if (currentPath.length === 0) {
        if (type === 'file') {
          structure.files.push(name);
        } else if (type === 'folder') {
          structure.folders[name] = { files: [], folders: {} };
        }
      } else {
        const [currentFolder, ...restPath] = currentPath;
        if (!structure.folders[currentFolder]) {
          structure.folders[currentFolder] = { files: [], folders: {} };
        }
        addToStructure(restPath, structure.folders[currentFolder], name, type);
      }
    };
  
    const pathArray = parentPath.split('/').filter(Boolean);
    addToStructure(pathArray, newStructure, name, type);
  
    setStructure(newStructure);
  };
  
  export const deleteItem = (structure, setStructure, path) => {
    const newStructure = { ...structure };
  
    const removeFromStructure = (currentPath, structure) => {
      if (currentPath.length === 1) {
        const item = currentPath[0];
        if (structure.folders[item]) {
          delete structure.folders[item];
        } else {
          const index = structure.files.indexOf(item);
          if (index > -1) structure.files.splice(index, 1);
        }
      } else {
        const [currentFolder, ...restPath] = currentPath;
        if (structure.folders[currentFolder]) {
          removeFromStructure(restPath, structure.folders[currentFolder]);
        }
      }
    };
  
    const pathArray = path.split('/').filter(Boolean);
    removeFromStructure(pathArray, newStructure);
  
    setStructure(newStructure);
  };
  