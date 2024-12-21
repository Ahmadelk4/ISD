import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Diagnoses from "./pages/Diagnoses";
import MedicalHistory from "./pages/medicalHistory";
import MedicationAndHistory from "./pages/MedicationAndHistory";
import PrescriptionForm from "./pages/PrescriptionForm";
import DoctorProfile from "./pages/doctorProfile";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diagnoses" element={<Diagnoses />} />
          <Route path="/MedicalHistory" element={<MedicalHistory />} />
          <Route path="/PrescriptionForm" element={<PrescriptionForm />} />
          <Route path="/doctorProfile" element={<DoctorProfile />} />
          <Route
            path="/MedicationAndHistory"
            element={<MedicationAndHistory />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
