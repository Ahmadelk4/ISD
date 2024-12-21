import "../CSS/Diagnoses.css";
import user from "../assets/User.svg";

export default function Diagnoses() {
  const doctors = [
    {
      name: "Dr. Amanda Smith",
      specialty: "Internal Medicine",
      price: "$300",
      duration: "45 mins",
      image: user,
    },
    {
      name: "Dr. John Doe",
      specialty: "Family Medicine",
      price: "$250",
      duration: "45 mins",
      image: user,
    },
    {
      name: "Dr. Sarah Johnson",
      specialty: "Pediatric Medicine",
      price: "$200",
      duration: "45 mins",
      image: user,
    },
    {
      name: "Dr. Michael Brown",
      specialty: "Orthopedic Surgery",
      price: "$350",
      duration: "45 mins",
      image: user,
    },
    {
      name: "Dr. Emily Davis",
      specialty: "Dermatology",
      price: "$275",
      duration: "45 mins",
      image: user,
    },
    {
      name: "Dr. Robert Miller",
      specialty: "Cardiology",
      price: "$325",
      duration: "45 mins",
      image: user,
    },
    {
      name: "Dr. Laura Garcia",
      specialty: "Gynecology",
      price: "$225",
      duration: "45 mins",
      image: user,
    },
  ];
  const diagnosis = "Diabetes";
  const speciality = "Internal Medicine";
  return (
    <div className="match-list">
      <h1>Initial Diagnosis</h1>
      <div className="diagnosis-container">
        <h2>
          Based on your symptoms you set you might have <span>{diagnosis}</span>{" "}
          . you might want to visit a <span>{speciality}</span> doctor. we've
          found some doctors you might like to meet
        </h2>
      </div>

      <div className="doctors-list">
        <ul>
          {doctors.map((doctor, index) => (
            <li key={index} className="doctor-item">
              <div className="doctor-info">
                <div className="doctor-avatar">
                  <img src={doctor.image} alt="" />
                </div>
                <div>
                  <h3>{doctor.name}</h3>
                  <p>{doctor.specialty}</p>
                </div>
              </div>
              <div className="doctor-details">
                <p>
                  {doctor.price}, {doctor.duration}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
