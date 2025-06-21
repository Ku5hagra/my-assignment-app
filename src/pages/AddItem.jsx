import { useItems } from '../context/ItemContext';
import { useEffect, useState } from 'react';


function AddItem() {
  const { addItem } = useItems();
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [desc, setDesc] = useState('');
  const [cover, setCover] = useState('');
  const [images, setImages] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ name, type, desc, cover, images });
    setSuccess(true);
    setName(''); setType(''); setDesc(''); setCover(''); setImages([]);
    setTimeout(() => setSuccess(false), 3000);
  };

  useEffect(() => {
  if (success) {
    alert("Item successfully added");
  }
}, [success]);


  return (
    <form  onSubmit={handleSubmit} className="card">
      <h2>Add New Item</h2>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Item Name" required />
      <select value={type} onChange={e => setType(e.target.value)}>
        <option>Shirt</option><option>Pant</option><option>Shoes</option><option>Sports Gear</option><option>jackets</option>
      </select>
      <textarea value={desc} onChange={e => setDesc(e.target.value)} placeholder="Description" required />
      <input value={cover} onChange={e => setCover(e.target.value)} placeholder="Cover Image URL" required />
      <input onChange={e => setImages(e.target.value.split(','))} placeholder="Additional Images (comma separated URLs)" />
      <button style={{maxWidth:'100px'}} type="submit">Add Item</button>
    </form>
  );
}
export default AddItem;