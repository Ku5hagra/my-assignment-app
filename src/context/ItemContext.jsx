import { createContext, useContext, useState } from 'react';

const ItemContext = createContext();
export const useItems = () => useContext(ItemContext);

export function ItemProvider({ children }) {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Sneakers',
      type: 'Shoes',
      desc: 'Cool good looking shoes',
      cover: 'https://i.pinimg.com/736x/e5/de/be/e5debe3e2eafc09db4ea9a694c6082e1.jpg',
      images: ['https://i.pinimg.com/736x/2e/e5/19/2ee51972772ada0384e878d1c1d1ee70.jpg', 'https://i.pinimg.com/736x/30/3a/b0/303ab0879374a3138f5c6aa238f86776.jpg']
    }
  ]);

  const addItem = (item) => {
    setItems(prev => [...prev, { ...item, id: prev.length + 1 }]);
  };

  return (
    <ItemContext.Provider value={{ items, addItem }}>
      {children}
    </ItemContext.Provider>
  );
}
