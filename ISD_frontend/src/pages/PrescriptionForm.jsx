import React, { useState } from "react";
import "../CSS/PrescriptionForm.css";

const PrescriptionForm = () => {
  const [tests, setTests] = useState([{ testName: "", imagePath: "" }]);
  const [medicines, setMedicines] = useState([
    {
      medicineName: "",
      dosage: "",
      doctorName: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const addTest = () => setTests([...tests, { testName: "", imagePath: "" }]);
  const addMedicine = () =>
    setMedicines([
      ...medicines,
      {
        medicineName: "",
        dosage: "",
        doctorName: "",
        startDate: "",
        endDate: "",
      },
    ]);

  const handleTestChange = (index, field, value) => {
    const updatedTests = [...tests];
    updatedTests[index][field] = value;
    setTests(updatedTests);
  };

  const handleMedicineChange = (index, field, value) => {
    const updatedMedicines = [...medicines];
    updatedMedicines[index][field] = value;
    setMedicines(updatedMedicines);
  };

  return (
    <div className="prescription-form">
      <h2>Prescription</h2>
      <form>
        <div className="form-group">
          <label>Patient Name</label>
          <input type="text" placeholder="Enter patient name" />
        </div>
        <div className="form-group">
          <label>Doctor Name</label>
          <input type="text" placeholder="Enter doctor name" />
        </div>
        <div className="form-group">
          <label>Diagnosed Disease</label>
          <input type="text" placeholder="Enter diagnosed disease" />
        </div>
        <div className="form-group">
          <label>Tests</label>
          {tests.map((test, index) => (
            <div key={index} className="test-group">
              <input
                type="text"
                placeholder="Enter test name"
                value={test.testName}
                onChange={(e) =>
                  handleTestChange(index, "testName", e.target.value)
                }
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const relativePath = URL.createObjectURL(file);
                    handleTestChange(index, "imagePath", relativePath);
                  }
                }}
              />
              {test.imagePath && (
                <img
                  src={test.imagePath}
                  alt={`Test ${index + 1}`}
                  className="test-image-preview"
                />
              )}
            </div>
          ))}
          <button type="button" onClick={addTest} className="add-button">
            +
          </button>
        </div>
        <div className="form-group">
          <label>Medicines</label>
          {medicines.map((medicine, index) => (
            <div key={index} className="medicine-group">
              <input
                type="text"
                placeholder="Medicine Name"
                value={medicine.medicineName}
                onChange={(e) =>
                  handleMedicineChange(index, "medicineName", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Dosage per Day"
                value={medicine.dosage}
                onChange={(e) =>
                  handleMedicineChange(index, "dosage", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Doctor Name"
                value={medicine.doctorName}
                onChange={(e) =>
                  handleMedicineChange(index, "doctorName", e.target.value)
                }
              />
              <input
                type="date"
                placeholder="Start Date"
                value={medicine.startDate}
                onChange={(e) =>
                  handleMedicineChange(index, "startDate", e.target.value)
                }
              />
              <input
                type="date"
                placeholder="End Date"
                value={medicine.endDate}
                onChange={(e) =>
                  handleMedicineChange(index, "endDate", e.target.value)
                }
              />
            </div>
          ))}
          <button type="button" onClick={addMedicine} className="add-button">
            +
          </button>
        </div>
      </form>
    </div>
  );
};

export default PrescriptionForm;
