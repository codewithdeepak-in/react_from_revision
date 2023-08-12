import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import './styles.css'; // Define your CSS classes here

const List = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  const removeItem = index => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <TransitionGroup component="ul">
        {items.map((item, index) => (
          <CSSTransition key={item} timeout={300} classNames="fade">
            <li onClick={() => removeItem(index)}>{item}</li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default List;
