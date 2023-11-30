import { Link, NavLink } from "react-router-dom";
import { AiFillHome, AiOutlineLogout } from "react-icons/ai";
import { BiAddToQueue } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { BsFillPCircleFill } from "react-icons/bs";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div>
      <ul className="list">
        <li className="list-item">
          <AiFillHome size={25} />
          <NavLink to="/">
            <div>Dashboard</div>
          </NavLink>
        </li>
        <li className="list-item">
          <BiAddToQueue size={25} />
          <NavLink to="/add ">
            <div>Add Expense</div>
          </NavLink>
        </li>
        <li className="list-item">
          <FiSearch size={25} />
          <NavLink to="/search ">
            <div>Search Expense</div>
          </NavLink>
        </li>
        <li className="list-item">
          <BsFillPCircleFill size={25} />
          <NavLink to="/profile ">
            <div>Profile</div>
          </NavLink>
        </li>
        <li className="list-item">
          <AiOutlineLogout size={25} />
          <Link to="/ ">
            <div>Logout</div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
