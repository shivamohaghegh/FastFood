import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const UsersInfo = () => {
  return (
    <NavLink to="/user">
      <FaUser type="button" className="text-dark" />
    </NavLink>
  );
};

export default UsersInfo;
