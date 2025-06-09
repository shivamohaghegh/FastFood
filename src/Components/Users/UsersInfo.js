import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const UsersInfo = () => {
  return (
    <NavLink to="/user">
      <FaUser type="button" />
    </NavLink>
  );
};

export default UsersInfo;
