import { useState } from 'react';
import { useItems } from '../context/ItemContext';
import ItemModal from '../components/ItemModal';

function ViewItems() {
  const { items } = useItems();
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <h2>Items</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
        {items.map(item => (
          <div key={item.id} className="card" onClick={() => setSelected(item)}>
            <img src={item.cover} alt={item.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
      {selected && <ItemModal item={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
export default ViewItems;