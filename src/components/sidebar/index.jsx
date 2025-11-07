
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import logo from "/logo.png";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoTitle}>
        <img src={logo} alt="logo do site" />
        <h2 >Document</h2>
      </div>

      <div className={styles.ctdSidebar}>
        <h5 className={styles.principal}>Principal</h5>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.activeBtn : styles.btn)}
        >
          Início
        </NavLink>

        <NavLink
          to="/documentos"
          className={({ isActive }) => (isActive ? styles.activeBtn : styles.btn)}
        >
          Documentos
        </NavLink>

        <NavLink
          to="/tags"
          className={({ isActive }) => (isActive ? styles.activeBtn : styles.btn)}
        >
          Tags
        </NavLink>

      </div>
      <button className={styles.navnew}> Novo + </button>
    </aside>
  );
}

export default Sidebar;