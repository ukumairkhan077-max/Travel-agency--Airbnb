import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const categories = [
  "Popular",
  "Arts & culture",
  "Beach",
  "Mountains",
  "Outdoors",
  "Things to do",
  "Travel tips & inspiration",
  "Airbnb-friendly apartments",
];

const destinationColumns = [
  [
    { city: "Tokyo", type: "Monthly Rentals" },
    { city: "Destin", type: "Condo rentals" },
    { city: "Savannah", type: "Villa rentals" },
  ],
  [
    { city: "Florida Keys", type: "Monthly Rentals" },
    { city: "Washington", type: "Vacation rentals" },
    { city: "Manhattan", type: "Apartment rentals" },
  ],
  [
    { city: "Oahu", type: "Vacation rentals" },
    { city: "Milan", type: "House rentals" },
    { city: "Kansas City", type: "House rentals" },
  ],
  [
    { city: "West Palm Beach", type: "Vacation rentals" },
    { city: "Athens", type: "Condo rentals" },
    { city: "St. Petersburg", type: "Vacation rentals" },
  ],
  [
    { city: "Charlotte", type: "Apartment rentals" },
    { city: "Amsterdam", type: "Apartment rentals" },
    { city: "Dublin", type: "Monthly Rentals" },
  ],
  [
    { city: "San Jose", type: "Condo rentals" },
    { city: "Pittsburgh", type: "Monthly Rentals" },
  ],
];

// Extra destinations revealed when "Show more" is clicked
const moreDestinations = [
  [
    { city: "Austin", type: "Vacation rentals" },
    { city: "Nashville", type: "Cabin rentals" },
    { city: "Denver", type: "Apartment rentals" },
  ],
  [
    { city: "Chicago", type: "Condo rentals" },
    { city: "Barcelona", type: "Vacation rentals" },
    { city: "Lisbon", type: "Monthly Rentals" },
  ],
  [
    { city: "Rome", type: "Vacation rentals" },
    { city: "Paris", type: "Apartment rentals" },
    { city: "Berlin", type: "House rentals" },
  ],
  [
    { city: "Miami", type: "Condo rentals" },
    { city: "Orlando", type: "Vacation rentals" },
    { city: "Seattle", type: "House rentals" },
  ],
  [
    { city: "Boston", type: "Apartment rentals" },
    { city: "Toronto", type: "Condo rentals" },
    { city: "Vancouver", type: "House rentals" },
  ],
  [
    { city: "Phoenix", type: "House rentals" },
    { city: "New Orleans", type: "Vacation rentals" },
  ],
];

const linkGroups = [
  {
    heading: "Support",
    links: ["Help Center", "Get help with a safety issue", "AirCover"],
  },
  {
    heading: "Hosting",
    links: ["Airbnb your home", "Airbnb your experience", "Airbnb your service"],
  },
  {
    heading: "Airbnb",
    links: ["2026 Summer Release", "Newsroom", "Careers"],
  },
];

function Footer() {
  const [activeTab, setActiveTab] = useState("Popular");
  const [showMore, setShowMore] = useState(false);

  const columns = showMore
    ? destinationColumns.map((col, i) => [...col, ...moreDestinations[i]])
    : destinationColumns;

  return (
    <footer className="footer">
      <div className="footer-inspiration">
        <h2 className="footer-title">Inspiration for future getaways</h2>

        <div className="footer-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`footer-tab ${activeTab === cat ? "active" : ""}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="footer-divider" />

        <div className="destination-grid">
          {columns.map((column, colIndex) => (
            <div className="destination-column" key={colIndex}>
              {column.map((dest) => (
                <div className="destination-item" key={dest.city}>
                  <p className="destination-city">{dest.city}</p>
                  <p className="destination-type">{dest.type}</p>
                </div>
              ))}

              {colIndex === columns.length - 1 && (
                <button
                  className="show-more-btn"
                  onClick={() => setShowMore((prev) => !prev)}
                >
                  {showMore ? "Show less" : "Show more"}
                  {showMore ? (
                    <FaChevronUp className="chevron-icon" />
                  ) : (
                    <FaChevronDown className="chevron-icon" />
                  )}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="footer-links">
        {linkGroups.map((group) => (
          <div className="footer-link-column" key={group.heading}>
            <h3 className="footer-link-heading">{group.heading}</h3>
            {group.links.map((link) => (
              <a href="#" className="footer-link" key={link}>
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;