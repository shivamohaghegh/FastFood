import { useSearch } from "../Providers/AppProviders";

const SearchBox = () => {
  const {searchValue, setSearchValue} = useSearch();

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <input
      className="form-control form-control-sm align-items-start search-box"
      type="text"
      placeholder="Search"
      aria-label="Search"
      onChange={handleChange}
      value={searchValue}
    />
  );
};

export default SearchBox;
