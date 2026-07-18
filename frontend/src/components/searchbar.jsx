import { IoSearch } from "react-icons/io5";

function SearchBar() {
  return (
    <div className="search-container">

      <div className="search-box">

        <div className="search-item">
          <h5>Where</h5>
          <p>Search destinations</p>
        </div>

        <div className="divider"></div>

        <div className="search-item">
          <h5>When</h5>
          <p>Add dates</p>
        </div>

        <div className="divider"></div>

        <div className="search-item">
          <h5>Who</h5>
          <p>Add guests</p>
        </div>

        <button className="search-btn">
          <IoSearch />
        </button>

      </div>

    </div>
  );
}

export default SearchBar;