import "./Searchbar.css";
import { useState } from "react";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // button toggle
  const [showSearch, setShowSearch] = useState(false);

  const handleSearch = (e) => {
    console.log("corrio");
    e.preventDefault();
    // Den Benutzer zur Amazon-Suchseite in einem neuen Tab weiterleiten
    window.open(
      `https://www.amazon.com/s?k=${encodeURIComponent(searchTerm)}`,
      "_blank"
    );
    // neuen Tab öffnen und schließt die Leiste
    setShowSearch(false);
  };

  // const toggleSearch = () => {setShowSearch(!showSearch)};
  const hideSearch = () => {
    if (searchTerm === "") {
      setShowSearch(false);
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    // <section className="webdesigntuts-workshop">
    //   {!showSearch && <button className="togglesearch" onClick={toggleSearch}>
    //     <i className="bi bi-search" id=""></i>

    //   </button>}

    <form className="searchLupe" onSubmit={handleSearch}>
      <input
        className="search"
        type="search"
        placeholder="Suche ..."
        value={searchTerm}
        onChange={handleChange}
        onBlur={hideSearch}
        autoFocus
      />
      <button className="searchbutton" type="submit">
        <i className="bi bi-search" id="searchButton"></i>
      </button>
    </form>
    // </section>
  );
};

export default Searchbar;
