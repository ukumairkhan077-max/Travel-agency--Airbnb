import { IoCheckmarkCircleOutline } from "react-icons/io5";
import "./GroundRules.css";

const RULES = [
  "Follow the house rules",
  "Treat your Host's home like your own",
  "Communicate any issues with your Host directly",
  "Be respectful of quiet hours and neighbors",
];

function GroundRules() {
  return (
    <section className="cp-section ground-rules">
      <h2 className="cp-section-title">Ground rules</h2>

      <p className="ground-rules-intro">
        We ask every guest to remember a few simple things about what makes a
        great guest.
      </p>

      <ul className="ground-rules-list">
        {RULES.map((rule) => (
          <li key={rule}>
            <IoCheckmarkCircleOutline className="ground-rules-icon" />
            <span>{rule}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default GroundRules;