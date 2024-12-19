import "../CSS/Home.css";
import React, { useState } from "react";
export default function Home() {
  const [selectedSymptom, setSelectedSymptom] = useState([]);

  const symptoms = [
    "itching",
    "skin rash",
    "nodal skin eruptions",
    "continuous sneezing",
    "shivering",
    "chills",
    "joint pain",
    "stomach pain",
    "acidity",
    "ulcers on tongue",
    "muscle wasting",
    "vomiting",
    "burning micturition",
    "spotting urination",
    "fatigue",
    "weight gain",
    "anxiety",
    "cold hands and feets",
    "mood swings",
    "weight loss",
    "restlessness",
    "lethargy",
    "patches in throat",
    "irregular sugar symptom",
    "cough",
    "high fever",
    "sunken eyes",
    "breathlessness",
    "sweating",
    "dehydration",
    "indigestion",
    "headache",
    "yellowish skin",
    "dark urine",
    "nausea",
    "loss of appetite",
    "pain behind the eyes",
    "back pain",
    "constipation",
    "abdominal pain",
    "diarrhoea",
    "mild fever",
    "yellow urine",
    "yellowing of eyes",
    "acute liver failure",
    "fluid overload",
    "swelling of stomach",
    "swelled lymph nodes",
    "malaise",
    "blurred and distorted vision",
    "phlegm",
    "throat irritation",
    "redness of eyes",
    "sinus pressure",
    "runny nose",
    "congestion",
    "chest pain",
    "weakness in limbs",
    "fast heart rate",
    "pain during bowel movements",
    "pain in anal region",
    "bloody stool",
    "irritation in anus",
    "neck pain",
    "dizziness",
    "cramps",
    "bruising",
    "obesity",
    "swollen legs",
    "swollen blood vessels",
    "puffy face and eyes",
    "enlarged thyroid",
    "brittle nails",
    "swollen extremities",
    "excessive hunger",
    "extra marital contacts",
    "drying and tingling lips",
    "slurred speech",
    "knee pain",
    "hip joint pain",
    "muscle weakness",
    "stiff neck",
    "swelling joints",
    "movement stiffness",
    "spinning movements",
    "loss of balance",
    "unsteadiness",
    "weakness of one body side",
    "loss of smell",
    "bladder discomfort",
    "foul smell of urine",
    "continuous feel of urine",
    "passage of gases",
    "internal itching",
    "toxic look (typhos)",
    "depression",
    "irritability",
    "muscle pain",
    "altered sensorium",
    "red spots over body",
    "belly pain",
    "abnormal menstruation",
    "dischromic patches",
    "watering from eyes",
    "increased appetite",
    "polyuria",
    "family history",
    "mucoid sputum",
    "rusty sputum",
    "lack of concentration",
    "visual disturbances",
    "receiving blood transfusion",
    "receiving unsterile injections",
    "coma",
    "stomach bleeding",
    "distention of abdomen",
    "history of alcohol consumption",
    "blood in sputum",
    "prominent veins on calf",
    "palpitations",
    "painful walking",
    "pus filled pimples",
    "blackheads",
    "scarring",
    "skin peeling",
    "silver like dusting",
    "small dents in nails",
    "inflammatory nails",
    "blister",
    "red sore around nose",
    "yellow crust ooze",
  ];

  const toggleSymptom = (symptom) => {
    setSelectedSymptom((prev) =>
      prev.includes(symptom)
        ? prev.filter((symptoms) => symptoms !== symptom)
        : [...prev, symptom]
    );
  };

  return (
    <div className="symptom-selector">
      <h1>Have you been feeling well latley ?</h1>
      <div className="buttons-container">
        <div className="symptom-buttons">
          {symptoms.sort().map((symptom) => (
            <button
              key={symptom}
              className={selectedSymptom.includes(symptom) ? "active" : ""}
              onClick={() => toggleSymptom(symptom)}
            >
              {symptom}
            </button>
          ))}
        </div>
      </div>
      <div className="output">
        <h1>Selected Sympotomes:</h1>
        <p>{selectedSymptom.join(", ") || "None"}</p>
      </div>

      {/* <div className="account">
        <div>
          <span>join now</span>
          <a href="#">register</a>
        </div>
        <div>
          <span>Do you have an account</span>
          <a href="#">signin</a>
        </div>
      </div> */}
    </div>
  );
}
