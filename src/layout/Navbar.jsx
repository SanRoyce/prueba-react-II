import { NavLink } from "react-router-dom";

export default function Navbar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  return (
    <nav className="navbar bg-dark justify-content-between">
      <form className="form-inline mx-3 my-2">
        <NavLink className={setActiveClass} end to="/">
          Home
        </NavLink>
        {" - "}
        <NavLink className={setActiveClass} end to="/Pizza">
          Pizza
        </NavLink>
        {" - "}
        <NavLink className={setActiveClass} end to="/Carro">
          Carro
        </NavLink>
      </form>
    </nav>
  );
}
