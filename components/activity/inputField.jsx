
import styles from "styles/activityRegister.module.css";

import React, { forwardRef } from 'react';

const InputField = forwardRef(({ type, placeholder, typeData, label, ...rest }, ref) => {
  return (
    <div className={styles.formGroup}>
      <input
        type={type}
        className={styles.formField}
        placeholder={placeholder}
        ref={ref}
        {...rest} // Pasa el resto de las props, incluyendo el registro
      />
 
      <label className={styles.formLabel}>
        {label}
      </label>




    </div>
  );
});

export default InputField;
