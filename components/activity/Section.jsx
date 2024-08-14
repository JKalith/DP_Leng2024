import styles from "styles/activityRegister.module.css";

export default function Section({ title, children }) {
    return (
      <div>
        <h1 className={styles.infoTitle}>{title}</h1>
        <div className={styles.containerDivide}>{children}</div>
      </div>
    );
  }