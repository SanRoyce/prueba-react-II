import { NavLink } from "react-router-dom";

export default function Navbar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  return (
    <nav>
      <form>
        <NavLink className={setActiveClass} end to="/">
          🍕 Pizzería Mamma Mia!
        </NavLink>
        </form>
        <form>
        <NavLink className={setActiveClass} end to="/carro">
         🛒
        </NavLink>
      </form>
    </nav>
  );
}
