import React, { useState } from 'react';

// Define types for the MenuForm props
interface MenuFormProps {
  addMenuItem: (item: string) => void;
}

const MenuForm: React.FC<MenuFormProps> = ({ addMenuItem }) => {
  const [item, setItem] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (item) {
      addMenuItem(item); // Adds the item to the menu
      setItem(''); // Clears the input field
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Add menu item"
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default MenuForm;
