import React from 'react';
import styles from 'styles/alerts.module.css';

const Modal = ({ isVisible, onClose, title, message }) => {
  if (!isVisible) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent}>
        <span className={styles.closeButton} onClick={onClose}>&times;</span>
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Modal;
