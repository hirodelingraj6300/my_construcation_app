import { FaPhoneAlt, FaRulerCombined, FaDraftingCompass, FaHammer, FaKey } from "react-icons/fa";
import React from 'react';



 function Process() {
    const steps = [
  {
    icon: <FaPhoneAlt />,
    title: "Initial Consultation",
    text: "Understand your needs, budget, and timeline with our experts."
  },
  {
    icon: <FaRulerCombined />,
    title: "Design & Planning",
    text: "Site study, floor plans, 3D renders, material selection."
  },
  {
    icon: <FaDraftingCompass />,
    title: "Permits & Approvals",
    text: "All municipal approvals and documentation are handled by us."
  },
  {
    icon: <FaHammer />,
    title: "Construction & Finishes",
    text: "Quality construction, supervision, and on-time delivery."
  },
  {
    icon: <FaKey />,
    title: "Post-Handover",
    text: "Snag fixing, warranty support, and maintenance guidance."
  }
];
  return (
    <div className="row g-4">
      {steps.map((s, i) => (
        <div key={s.title} className="col-12 col-md-6 col-lg">
          <div className="process-card h-100 text-center p-4 hover-lift">
            <div className="process-icon">{s.icon}</div>
            <h6 className="fw-semibold mt-3">{i + 1}. {s.title}</h6>
            <p className="text-secondary small mb-0">{s.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Process;
