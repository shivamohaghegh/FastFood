import { useCategory } from "../Context/CategoryContext";
import SearchBox from "../SearchBox/SearchBox";

const CategoryList = ({ categoryList }) => {
  const { value: categoryName, setValue: setCategoryName } = useCategory("All");

  const handleClick = (e) => {
    e.preventDefault();
    setCategoryName(e.target.getAttribute("href"));
  };

  const fetchList = () => {
    if (categoryList.length > 0) {
      return (
        <>
          <div className="d-flex align-items-center">
            <div>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    onClick={handleClick}
                    aria-current="page"
                    href="All"
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
                      href={categoryItem.name}
                    >
                      {categoryItem.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SearchBox />
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {fetchList()}
      </div>
    </div>
  );
};

export default CategoryList;
