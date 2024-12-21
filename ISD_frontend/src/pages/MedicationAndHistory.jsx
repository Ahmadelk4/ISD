import "../CSS/MedicationAndHistory.css";
import T_shirt from "../assets/User.svg";

export default function MedicationAndHistory() {
  const medicines = [
    {
      medicine_id: 0,
      medicine_name: "Paracetamol",
      Dosage: "1mg every 8hrs",
      Doctor_name: "Dr. John",
      Start_Date: " 01/2/2025",
      end_Date: "11/2/2025",
    },
  ];

  return (
    <>
      <div className="medicine-list">
        <header className="medicines-header">
          <h2>medicine Information</h2>
        </header>

        <div className="medicines-container">
          <div className="medicines-headers">
            <span>medicine_name</span>
            <span>Dosage per Day</span>
            <span>Doctor name</span>
            <span>Start Date</span>
            <span>end Date</span>
          </div>

          {medicines.map((medicines) => (
            <div key={medicines.medicine_id} className="medicines-row">
              <span>
                <span className="type">medicine_name</span>{" "}
                {medicines.medicine_name}
              </span>
              <span>
                <span className="type">Dosage</span> {medicines.Dosage}
              </span>

              <span>
                <span className="type">Doctor_name</span>{" "}
                {medicines.Doctor_name}
              </span>
              <span>
                <span className="type">Start_Date</span> {medicines.Start_Date}
              </span>
              <span>
                <span className="type">end_Date</span> {medicines.end_Date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
