import CategoryList from "./CategoryList";
import FetchCategoryList from "./FetchCategoryList";

const Navbar = () => {
  const categoryList = FetchCategoryList();

  return (
    <div className="d-flex justify-content-center">
      <div className="nav-bar rounded shadow-sm">
        <nav className="navbar navbar-expand-lg">
          <div className="d-flex">
            <CategoryList categoryList={categoryList} />         
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
