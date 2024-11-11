import React, { useState } from 'react';
import MenuForm from './MenuForm';

const ParentMenu = () => {
  const [menuItems, setMenuItems] = useState([]);

  const addMenuItem = (item) => {
    setMenuItems((prevItems) => [...prevItems, item]);
  };

  return (
    <div>
      <h1>Menu</h1>
      <MenuForm onAddItem={addMenuItem} />
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParentMenu;
