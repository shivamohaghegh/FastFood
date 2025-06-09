import { FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";
import { useSort } from "../Providers/AppProviders";
import { useState } from "react";

const Sort = () => {
  const { sortValue, setSortValue } = useSort();
  const [isDescending, setIsDescending] = useState(true);

  const handleSort = () => {
    const newOrder = isDescending ? "asc" : "desc";
    setSortValue({ sortBy: "price", order: newOrder });
    setIsDescending(!isDescending);
  };

  return (
    <div className="d-flex align-items-center gap-2 mb-3">
      Price{" "}
      <span>
        {isDescending ? (
          <FaSortAmountDown type="button" onClick={handleSort} />
        ) : (
          <FaSortAmountUp type="button" onClick={handleSort} />
        )}
      </span>
    </div>
  );
};

export default Sort;
