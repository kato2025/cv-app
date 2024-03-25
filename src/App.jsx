import React, { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import EducationExperience from './components/EducationExperience';
import PracticalExperience from './components/PracticalExperience';
import Summary from './components/Summary';
import './styles/App.css';

function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [educationList, setEducationList] = useState([]);
  const [practicalList, setPracticalList] = useState([]);
  const [showSummary, setShowSummary] = useState(false);

  const handleGeneralInfoSubmit = (info) => {
    setGeneralInfo(info);
  };

  const handleEducationSubmit = (list) => {
    setEducationList(list);
  };

  const handlePracticalSubmit = (list) => {
    setPracticalList(list);
  };

  const handleEdit = () => {
    setGeneralInfo({});
    setEducationList([]);
    setPracticalList([]);
    setShowSummary(false);
  };

  return (
    <div className="App">
      {!showSummary && (
        <>
          <GeneralInfo onSubmit={handleGeneralInfoSubmit} />
          <EducationExperience onSubmit={handleEducationSubmit} />
          <PracticalExperience onSubmit={handlePracticalSubmit} />
          <button className='submitCV' onClick={() => setShowSummary(true)}>Submit CV</button>
        </>
      )}
      {showSummary && (
        <>
          <Summary generalInfo={generalInfo} educationList={educationList} practicalList={practicalList} />
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
}

export default App;
