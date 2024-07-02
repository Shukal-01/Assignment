// components/FileTypes/TextEditor.jsx

import React, { useState, useEffect } from 'react';

const TextEditor = ({ filePath }) => {
  const [content, setContent] = useState(''); // State to manage the content of the text editor

  useEffect(() => {
    // Simulate loading content from filePath (if needed)
    // Example: fetchContent(filePath);
    // setContent(response);
    // For simplicity, we'll initialize with a placeholder message
    setContent(`Editing ${filePath}`);
  }, [filePath]);

  const handleContentChange = (e) => {
    setContent(e.target.value);
    // Save or update content to backend or state as needed
  };

  return (
    <div className="flex flex-col h-full w-full">
      <textarea
        className="flex-grow bg-gray-100 p-4 resize-none"
        value={content}
        onChange={handleContentChange}
        placeholder="Start typing here..."
      />
    </div>
  );
};

export default TextEditor;
