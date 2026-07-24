import { Link } from "react-router-dom";
import {
  FaMoneyBillWave,
  FaDoorOpen,
  FaHouseUser,
  FaSpa,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import "./BecomeHost.css";

const BENEFITS = [
  {
    icon: <FaMoneyBillWave />,
    title: "Earn money",
    description:
      "Turn your extra space or skills into a steady stream of income, on your own schedule.",
  },
  {
    icon: <FaDoorOpen />,
    title: "Welcome guests",
    description:
      "Meet travelers from around Pakistan and the world, and share what makes your city special.",
  },
  {
    icon: <FaHouseUser />,
    title: "List homes",
    description:
      "Publish your house, apartment, or room and reach thousands of guests searching by city.",
  },
  {
    icon: <FaSpa />,
    title: "Offer experiences",
    description:
      "Turn your skills — wellness, fitness, photography, and more — into bookable services.",
  },
  {
    icon: <FaRocket />,
    title: "Simple onboarding",
    description:
      "Get set up in minutes with a guided signup flow built for first-time hosts.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure payments",
    description:
      "Get paid safely through trusted payment methods, including Easypaisa and JazzCash.",
  },
];

function BecomeHost() {
  return (
    <>
      <Navbar variant="full" />

      <div className="become-host-page">
        <section className="become-host-hero">
          <div className="become-host-hero-inner">
            <h1>It's easy to start hosting on Airbnb</h1>
            <p>
              Share your home or your talent, welcome guests, and earn money
              your way.
            </p>

            <Link to="/host/signup" className="become-host-cta">
              Become a Host
            </Link>
          </div>
        </section>

        <section className="become-host-benefits">
          <h2>Why become a host</h2>

          <div className="become-host-grid">
            {BENEFITS.map((benefit) => (
              <div className="become-host-card" key={benefit.title}>
                <div className="become-host-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="become-host-bottom-cta">
          <h2>Ready to get started?</h2>
          <p>Join thousands of hosts already earning on Airbnb.</p>
          <Link to="/host/signup" className="become-host-cta">
            Become a Host
          </Link>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default BecomeHost;