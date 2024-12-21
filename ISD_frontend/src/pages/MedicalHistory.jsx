// App.js
import React, { useState } from "react";
import "../CSS/MedicalHistory.css";

const pages = [
  { id: 1, title: "Page 1", content: <ProfilePage /> },
  { id: 2, title: "Page 2", content: <div>Page 2 Content</div> },
  { id: 3, title: "Page 3", content: <div>Page 3 Content</div> },
  { id: 4, title: "Page 4", content: <div>Page 4 Content</div> },
  { id: 5, title: "Page 5", content: <div>Page 5 Content</div> },
  { id: 6, title: "Page 6", content: <div>Page 6 Content</div> },
  { id: 7, title: "Page 7", content: <div>Page 7 Content</div> },
];

export default function MedicalHistory() {
  const [activePage, setActivePage] = useState(1);
  const doctorVisitDetails = {
    "Doctor's Name": "Dr. John Smith",
    "Doctor's Specialty": "Cardiologist",
    "Visit Date": "2024-12-21",
    "Reason for Visit": "Routine Checkup",
    Time: "10:30 AM",
    "Location of Visit": "City Medical Center, Suite 301",

    "Main Symptoms": "Shortness of breath, chest pain",
    "Symptom Duration": "2 weeks",
    "Severity of Symptoms": "Moderate",
    "Changes in Lifestyle": "Reduced physical activity due to symptoms",

    "Doctor's Observations":
      "Elevated blood pressure, mild irregular heartbeat",
    "Patient Concerns Discussed":
      "Concerns about family history of heart disease",
    "Doctor’s Recommendations":
      "Prescribed medication, advised lifestyle changes, scheduled follow-up in 1 month",
  };

  console.log(doctorVisitDetails);

  return (
    <div className="app-container">
      <nav className="sidebar">
        {pages.map((page) => (
          <div
            key={page.id}
            className={`nav-item ${activePage === page.id ? "active" : ""}`}
            onClick={() => setActivePage(page.id)}
          >
            ?
          </div>
        ))}
      </nav>
      <main className="main-content">
        {pages.find((page) => page.id === activePage)?.content}
      </main>
    </div>
  );
}

function ProfilePage() {
  const doctorVisitDetails = {
    "Doctor's Name": "Dr. John Smith",
    "Doctor's Specialty": "Cardiologist",
    "Visit Date": "2024-12-21",
    "Reason for Visit": "Routine Checkup",
    Time: "10:30 AM",
    "Location of Visit": "City Medical Center, Suite 301",

    "Main Symptoms": "Shortness of breath, chest pain",
    "Symptom Duration": "2 weeks",
    "Severity of Symptoms": "Moderate",
    "Changes in Lifestyle": "Reduced physical activity due to symptoms",

    "Doctor's Observations":
      "Elevated blood pressure, mild irregular heartbeat",
    "Patient Concerns Discussed":
      "Concerns about family history of heart disease",
    "Doctor’s Recommendations":
      "Prescribed medication, advised lifestyle changes, scheduled follow-up in 1 month",
  };

  return (
    <div className="profile-page">
      <div className="note">Visit Information</div>
      <div className="profile-details">
        <h2>Visit Details</h2>
        <label>
          <p>
            <strong>Doctor's Name:</strong>{" "}
            {doctorVisitDetails["Doctor's Name"]}
          </p>
        </label>
        <label>
          <p>
            <strong>Doctor's Specialty:</strong>{" "}
            {doctorVisitDetails["Doctor's Specialty"]}
          </p>
        </label>
        <label>
          <p>
            <strong>Reason for Visit:</strong>{" "}
            {doctorVisitDetails["Reason for Visit"]}
          </p>
        </label>
        <label>
          <p>
            <strong>Visit Date:</strong> {doctorVisitDetails["Visit Date"]}
          </p>
        </label>

        <label>
          <p>
            <strong>Time:</strong> {doctorVisitDetails["Time"]}
          </p>
        </label>
        <label>
          <p>
            <strong>Location of Visit:</strong>{" "}
            {doctorVisitDetails["Location of Visit"]}
          </p>
        </label>
        <hr />

        <h2>Patient Symptoms & Concerns</h2>
        <label>
          <p>
            <strong>Main Symptoms:</strong>{" "}
            {doctorVisitDetails["Main Symptoms"]}
          </p>
        </label>
        <label>
          <p>
            <strong>Symptom Duration:</strong>{" "}
            {doctorVisitDetails["Symptom Duration"]}
          </p>
        </label>
        <label>
          <p>
            <strong>Severity of Symptoms:</strong>{" "}
            {doctorVisitDetails["Severity of Symptoms"]}
          </p>
        </label>
        <label>
          <p>
            <strong>Changes in Lifestyle:</strong>{" "}
            {doctorVisitDetails["Changes in Lifestyle"]}
          </p>
        </label>
        <hr />

        <h2>Doctor’s Notes</h2>
        <label>
          <p>
            <strong>Diagnosis Given by Doctor:</strong> value
          </p>
        </label>
        <label>
          <p>
            <strong>Doctor's Observations:</strong>{" "}
            {doctorVisitDetails["Doctor's Observations"]}
          </p>
        </label>
        <label>
          <p>
            <strong>Patient Concerns Discussed:</strong>{" "}
            {doctorVisitDetails["Patient Concerns Discussed"]}
          </p>
        </label>
        <label>
          <p>
            <strong>Doctor’s Recommendations:</strong>{" "}
            {doctorVisitDetails["Doctor’s Recommendations"]}
          </p>
        </label>
      </div>
    </div>
  );
}
