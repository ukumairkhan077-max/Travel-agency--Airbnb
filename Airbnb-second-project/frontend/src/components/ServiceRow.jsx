import { useRef, useState, useEffect } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import ServiceCard from "./ServiceCard";

function ServiceRow({ city, items }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  function updateArrows() {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }

  useEffect(() => {
    updateArrows();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows);
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [items]);

  function scrollBy(direction) {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9 * direction;
    el.scrollBy({ left: amount, behavior: "smooth" });
  }

  return (
    <div className="service-row">
      <div className="service-row-header">
        <h2 className="listing-heading">Services in {city}</h2>

        <div className="service-row-arrows">
          <button
            type="button"
            className="service-row-arrow-btn"
            onClick={() => scrollBy(-1)}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            <IoChevronBack />
          </button>
          <button
            type="button"
            className="service-row-arrow-btn"
            onClick={() => scrollBy(1)}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            <IoChevronForward />
          </button>
        </div>
      </div>

      <div className="service-row-track" ref={scrollRef}>
        {items.map((service) => (
          <div className="service-row-item" key={service.id}>
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceRow;
