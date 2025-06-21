import { useState } from 'react';
import emailjs from 'emailjs-com';

function ItemModal({ item, onClose }) {
  const allImages = [item.cover, ...(item.images)];
  const [index, setIndex] = useState(0);
  const [sending, setSending] = useState(false);

  const sendEnquiry = () => {
    setSending(true);
    const templateParams = {
      item_name: item.name,
      item_description: item.desc,
      item_type: item.type,
      item_cover: item.cover
    };

    emailjs.send(
      'service_w4j6api',
      'template_uocobib',
      templateParams,
      'ImQy02VmKrdufC-l_'
    )
    .then((res) => {
      alert('Enquiry sent!');
      setSending(false);
    })
    .catch((err) => {
      alert('Failed to send enquiry.');
      setSending(false);
      console.error(err);
    });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="modal-close" onClick={onClose}>&times;</span>
        <h2>{item.name}</h2>
        <p>{item.desc}</p>
        <img src={allImages[index]} alt="item" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
          <button onClick={() => setIndex((index - 1 + allImages.length) % allImages.length)}>&larr; Prev</button>
          <button onClick={() => setIndex((index + 1) % allImages.length)}>Next &rarr;</button>
        </div>
        <button style={{ display:'block', margin:'auto'}} onClick={sendEnquiry}>
          {sending ? 'Sending...' : 'Enquire'}
        </button>
      </div>
    </div>
  );
}

export default ItemModal;
