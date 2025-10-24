
import styles from "./Sidebar.module.css";
import logo from "/logo.png";
import { Link, } from "react-router-dom";
function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoTitle}>
        <img src={logo} alt="logo do site" />
        <h2 >Document</h2>
      </div>

      <div className={styles.ctdSidebar}>
        <h5 className={styles.principal}>Principal</h5>
        <nav>
          <Link to="/" className={styles.navbtn}>  Início </Link>

          <Link to="/documentos" className={styles.navbtn}> Documentos</Link>

          <Link to="/tags" className={styles.navbtn}> Tags</Link>
        </nav>
      </div>
      <button className={styles.navnew}> Novo + </button>
    </aside>
  );
}

export default Sidebar;