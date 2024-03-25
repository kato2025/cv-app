import React, { useState } from 'react';
import '../styles/educationExperience.css';

const EducationExperience = ({ onSubmit }) => {
  const [educationList, setEducationList] = useState([]);
  const [schoolName, setSchoolName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [certificate, setCertificate] = useState('');
  const [grade, setGrade] = useState('');
  const [dateObtained, setDateObtained] = useState('');

  const addExperience = () => {
    setEducationList([...educationList, { schoolName, specialty, certificate, grade, dateObtained }]);
    setSchoolName('');
    setSpecialty('');
    setCertificate('');
    setGrade('');
    setDateObtained('');
  };

  const removeExperience = index => {
    const newList = [...educationList];
    newList.splice(index, 1);
    setEducationList(newList);
  };

  const handleSubmit = () => {
    onSubmit(educationList);
  };

  return (
    <div className="education-experience">
      <h2>Educational Experience</h2>
      {educationList.map((experience, index) => (
        <div key={index}>
          <p>{experience.schoolName} - {experience.specialty}</p>
          <button onClick={() => removeExperience(index)}>Remove Experience</button>
        </div>
      ))}
      <input type="text" placeholder="School Name" value={schoolName} onChange={e => setSchoolName(e.target.value)} />
      <input type="text" placeholder="Specialty" value={specialty} onChange={e => setSpecialty(e.target.value)} />
      <input type="text" placeholder="Certificate Obtained" value={certificate} onChange={e => setCertificate(e.target.value)} />
      <input type="text" placeholder="Grade" value={grade} onChange={e => setGrade(e.target.value)} />
      <input type="date" placeholder="Date Obtained" value={dateObtained} onChange={e => setDateObtained(e.target.value)} />
      <button onClick={addExperience}>Add Experience</button>
      <button onClick={handleSubmit}>Submit Experience</button>
    </div>
  );
};

export default EducationExperience;
