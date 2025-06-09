import { useCategory } from "../Providers/AppProviders";
import { useNavigate, useLocation } from "react-router-dom";

const CategoryList = ({ categoryList }) => {
  const { categoryValue, setCategoryValue } = useCategory();
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    // e.preventDefault();
    const value = e.target.dataset.value;
    setCategoryValue(value);

    // Go to homepage if you're not already there
    if (location.pathname !== "/") {
      navigate("/");
    }
  };

  return (
    <div className="container-fluid ">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="d-flex align-items-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className={`nav-link btn btn-link ${
                  categoryValue === "All" ? "active" : ""
                }`}
                onClick={handleClick}
                data-value="All"
              >
                All
              </a>
            </li>
            {categoryList?.map((categoryItem) => (
              <li className="nav-item" key={categoryItem.id}>
                <a
                  className={`nav-link btn btn-link ${
                    categoryValue === categoryItem.name ? "active" : ""
                  }`}
                  onClick={handleClick}
                  data-value={categoryItem.name}
                >
                  {categoryItem.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
