
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
        <nav>
          <button className={styles.navbtn}> Início </button>
          <button className={styles.navbtn}> Documentos </button>
          <button className={styles.navbtn}>  Tags </button>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;