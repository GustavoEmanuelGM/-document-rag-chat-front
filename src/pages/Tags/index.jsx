import styles from "./Tags.module.css";


function Tags({ label, type, color }) {

  const customStyle = color ? { backgroundColor: `${color}1A`, color: color } : {};
  
  return <span className={`${styles.tag} ${styles[type]}`} style={customStyle}>{label}</span>;
}

export default Tags;
