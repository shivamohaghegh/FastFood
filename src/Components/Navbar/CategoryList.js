import { useCategory } from "../Providers/AppProviders";
import { useNavigate, useLocation } from "react-router-dom";

const CategoryList = ({ categoryList }) => {
  const { categoryValue, setCategoryValue } = useCategory();
  const navigate = useNavigate();
  const location = useLocation();  

  const isHome = location.pathname === "/";

  const handleClick = (e) => {
    const value = e.target.dataset.value;
    setCategoryValue(value);
    if (!isHome) {
      navigate("/");
    }
  };

  return (
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="d-flex align-items-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link ${
                  isHome && categoryValue === "All" ? "active" : ""
                }`}
                onClick={handleClick}
                data-value="All"
              >
                All
              </button>
            </li>
            {categoryList?.map((categoryItem) => (
              <li className="nav-item" key={categoryItem.id}>
                <button
                  className={`nav-link btn btn-link ${
                    isHome && categoryValue === categoryItem.name ? "active" : ""
                  }`}
                  onClick={handleClick}
                  data-value={categoryItem.name}
                >
                  {categoryItem.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
