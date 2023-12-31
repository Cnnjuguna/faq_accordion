import React, { useState } from 'react';

export default function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClickToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className="item" onClick={handleClickToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? '-' : '+'}</p>
      {isOpen && <div className="content_box">{text}</div>}
    </div>
  );
}
