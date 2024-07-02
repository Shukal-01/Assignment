import { useState } from 'react';

const ListMaker = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

  const addItem = () => {
    if (text) {
      setItems([...items, text]);
      setText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="p-2 mb-2 border border-gray-300 rounded"
      />
      <button onClick={addItem} className="p-2 bg-blue-500 text-white rounded mb-2">
        Add Item
      </button>
      <ul className="list-disc pl-5">
        {items.map((item, index) => (
          <li key={index} className="mb-1">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListMaker;
