import { useCategory } from "../Providers/AppProviders";

const CategoryList = ({ categoryList }) => {
  const { categoryValue, setCategoryValue } = useCategory();

  const handleClick = (e) => {
    e.preventDefault();
    const value = e.target.dataset.value;
    setCategoryValue(value);
  };

  return (
    <div className="container-fluid ">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="d-flex align-items-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active"
                onClick={handleClick}
                aria-current="page"
                data-value="All"
                href="#"
              >
                All
              </a>
            </li>
            {categoryList?.map((categoryItem) => (
              <li className="nav-item" key={categoryItem.id}>
                <a
                  className="nav-link active"
                  onClick={handleClick}
                  aria-current="page"
                  data-value={categoryItem.name}
                  href="#"
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
