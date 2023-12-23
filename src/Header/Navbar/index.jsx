import { links } from "../../data";
import Link from "./Link";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar flex" direction="row">
      <ul className="links flex" direction="row">
        {links.map((link, index) => (
          <Link key={index} title={link.title} subLinks={link.subLinks} />
        ))}
      </ul>

      <div className="btn-container flex" direction="row">
        <a>login</a>
        <button className="btn-register">register</button>
      </div>
    </nav>
  );
};

export default Navbar;
