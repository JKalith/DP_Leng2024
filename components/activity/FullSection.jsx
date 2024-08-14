import styles from "styles/activityRegister.module.css";

export default function FullSection({ title, titleTwo, children }) {
    return (
      <div>
        <div className={styles.containerDivide}>
          <h1 className={styles.infoTitle}>{title}</h1>
          <h1 className={styles.infoTitle}>{titleTwo}</h1>
          {children}
        </div>
      </div>
    );
  }