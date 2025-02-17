import { NavLink } from "react-router-dom";
import NotFound from "../pages/NotFound";

export default function Navlinks() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <li>
          <NavLink to={"*"}>
            <NotFound />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
