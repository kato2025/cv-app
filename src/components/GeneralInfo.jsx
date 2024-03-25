import React, { useState } from 'react';
import '../styles/generalInfo.css';

const GeneralInfo = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [numberOfKids, setNumberOfKids] = useState('');

  const handleSubmit = () => {
    onSubmit({ name, email, phone, maritalStatus, numberOfKids });
  };

  return (
    <div className="general-info">
      <h2>General Information</h2>
      <input className='name' type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input className='email' type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input className='phone' type="tel" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
      <input className='married' type="text" placeholder="Marital Status" value={maritalStatus} onChange={e => setMaritalStatus(e.target.value)} />
      <input className='numKids' type="number" placeholder="Number of Kids" value={numberOfKids} onChange={e => setNumberOfKids(e.target.value)} />
      <button onClick={handleSubmit}>Submit Information</button>
    </div>
  );
};

export default GeneralInfo;
