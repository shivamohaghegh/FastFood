import CategoryList from "./CategoryList";
import FetchCategoryList from "./FetchCategoryList";
import SearchBox from "../SearchBox/SearchBox";
import ShoppingCard from "../ShoppingCard/ShoppingCard";
import UsersInfo from "../Users/UsersInfo";

const Navbar = () => {
  const categoryList = FetchCategoryList();

  const fetchData = () => {
    if (categoryList !== '') {
      return (
        <>
          <CategoryList categoryList={categoryList} />
          <SearchBox />
          <div className="d-flex align-items-center gap-2">
            <UsersInfo />
            <ShoppingCard />
          </div>
        </>
      );
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="nav-bar rounded shadow-sm">
        <nav className="navbar navbar-expand-lg p-1 gap-5">{fetchData()}</nav>
      </div>
    </div>
  );
};

export default Navbar;
