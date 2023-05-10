// react-beautiful-dnd has some issues with React strict mode
// refer: https://medium.com/@wbern/getting-react-18s-strict-mode-to-work-with-react-beautiful-dnd-47bc909348e4

import {useEffect, useState} from 'react';
import {Droppable, DroppableProps} from 'react-beautiful-dnd';

export const StrictModeDroppable = ({children, ...props}: DroppableProps) => {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);
  if (!enabled) {
    return null;
  }
  return <Droppable {...props}>{children}</Droppable>;
};
