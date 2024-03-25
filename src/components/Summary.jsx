import React from 'react';

const Summary = ({ generalInfo, educationList, practicalList }) => {
  return (
    <div className="summary">
      <h2>Summary</h2>
      <div>
        <h3>General Information</h3>
        <p>Name: {generalInfo.name}</p>
        <p>Email: {generalInfo.email}</p>
        <p>Phone: {generalInfo.phone}</p>
        <p>Marital Status: {generalInfo.maritalStatus}</p>
        <p>Number of Kids: {generalInfo.numberOfKids}</p>
      </div>
      <div>
        <h3>Educational Experience</h3>
        {educationList.map((experience, index) => (
          <div key={index}>
            <p>{experience.schoolName} - {experience.specialty}</p>
            <p>Certificate Obtained: {experience.certificate}</p>
            <p>Grade: {experience.grade}</p>
            <p>Date Obtained: {experience.dateObtained}</p>
          </div>
        ))}
      </div>
      <div>
        <h3>Practical Experience</h3>
        {practicalList.map((experience, index) => (
          <div key={index}>
            <p>{experience.companyName} - {experience.positionTitle}</p>
            <p>Main Responsibilities: {experience.responsibilities}</p>
            <p>Date Started: {experience.startDate}</p>
            <p>Date Ended: {experience.endDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Summary;
