const SearchBox = () => {
  const handleChange = (e) => {
    // setSearchTerm(e.target.value);
  };

  return (
    <input
      className="form-control form-control-sm ms-5 search-box"
      type="text"
      placeholder="Search ..."
      aria-label="Search"
      onChange={(e) => handleChange(e)}
    />
  );
};

export default SearchBox;
