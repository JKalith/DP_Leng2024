import styles from "styles/activityRegister.module.css";

export default function SectionCategory({ title, titleTwo, children }) {
    return <div className={styles.containerCategory}>{children}</div>;
  }