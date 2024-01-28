// Draggable.js

import React from 'react';
import { useDraggable } from '@dnd-kit/core';

const Draggable = ({ id, text }) => {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id,
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <div
    ref={setNodeRef}
    {...attributes}
    {...listeners}
    style={{
      border: '1px solid #ccc',
      padding: '8px',
      marginBottom: '8px',
      cursor: 'move',
      ...style // Include the style here
    }}
  >
    {text}
  </div>
  );
};

export default Draggable;
