import { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Note = ({ id, text, moveNote }) => {
  const [, ref] = useDrag({
    type: 'note',
    item: { id },
  });

  const [, drop] = useDrop({
    accept: 'note',
    hover: (item) => {
      if (item.id !== id) {
        moveNote(item.id, id);
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))} className="p-4 bg-yellow-200 mb-2">
      {text}
    </div>
  );
};

const NoteMaker = () => {
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    setNotes([...notes, { id: notes.length, text: 'New Note' }]);
  };

  const moveNote = (draggedId, hoveredId) => {
    const draggedIndex = notes.findIndex((note) => note.id === draggedId);
    const hoveredIndex = notes.findIndex((note) => note.id === hoveredId);
    const updatedNotes = [...notes];
    updatedNotes.splice(draggedIndex, 1);
    updatedNotes.splice(hoveredIndex, 0, notes[draggedIndex]);
    setNotes(updatedNotes);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <button onClick={addNote} className="p-2 bg-green-500 text-white mb-2">Add Note</button>
        <div>
          {notes.map((note) => (
            <Note key={note.id} id={note.id} text={note.text} moveNote={moveNote} />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default NoteMaker;
