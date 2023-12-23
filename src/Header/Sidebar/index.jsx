import ReactDOM from "react-dom";
import "./Sidebar.css";
import Links from "./Link";
import { links } from "../../data";
import { useGlobalContext } from "../../context";

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useGlobalContext();

  return ReactDOM.createPortal(
    <aside>
      <button
        className={`menuToggle ${isSidebarOpen && "menu-toggled"}`}
        onClick={toggleSidebar}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        className={`sidebar-container flex ${isSidebarOpen && "show-sidebar"}`}
        direction="col"
      >
        <ul className="links flex" direction="col">
          {links.map((link, index) => (
            <Links key={index} title={link.title} subLinks={link.subLinks} />
          ))}
        </ul>

        <div className="btn-container flex" direction="col">
          <a>login</a>
          <button className="register">register</button>
        </div>
      </div>

      <div
        className={`overlay ${isSidebarOpen && "show-overlay"}`}
        onClick={toggleSidebar}
      />
    </aside>,
    document.getElementById("portal")
  );
};

export default Sidebar;
