import React, { useState } from 'react';
import '../styles/practicalExperience.css';

const PracticalExperience = ({ onSubmit }) => {
  const [practicalList, setPracticalList] = useState([]);
  const [companyName, setCompanyName] = useState('');
  const [positionTitle, setPositionTitle] = useState('');
  const [responsibilities, setResponsibilities] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const addExperience = () => {
    setPracticalList([...practicalList, { companyName, positionTitle, responsibilities, startDate, endDate }]);
    setCompanyName('');
    setPositionTitle('');
    setResponsibilities('');
    setStartDate('');
    setEndDate('');
  };

  const removeExperience = index => {
    const newList = [...practicalList];
    newList.splice(index, 1);
    setPracticalList(newList);
  };

  const handleSubmit = () => {
    onSubmit(practicalList);
  };

  return (
    <div className="practical-experience">
      <h2>Practical Experience</h2>
      {practicalList.map((experience, index) => (
        <div key={index}>
          <p>{experience.companyName} - {experience.positionTitle}</p>
          <button onClick={() => removeExperience(index)}>Remove Experience</button>
        </div>
      ))}
      <input type="text" placeholder="Company Name" value={companyName} onChange={e => setCompanyName(e.target.value)} />
      <input type="text" placeholder="Position Title" value={positionTitle} onChange={e => setPositionTitle(e.target.value)} />
      <input type="text" placeholder="Main Responsibilities" value={responsibilities} onChange={e => setResponsibilities(e.target.value)} />
      <input type="date" placeholder="Start Date" value={startDate} onChange={e => setStartDate(e.target.value)} />
      <input type="date" placeholder="End Date" value={endDate} onChange={e => setEndDate(e.target.value)} />
      <button onClick={addExperience}>Add Experience</button>
      <button onClick={handleSubmit}>Submit Experience</button>
    </div>
  );
};

export default PracticalExperience;
