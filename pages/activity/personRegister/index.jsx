import styles from "styles/basura.module.css";
import { activityService, alertService } from "services";
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { uploadFile } from '/pages/firebase/config';
import { useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import globals from "styles/globals.module.css";
import map from "styles/map.module.css";


export default function PersonRegister() {
    return (
      <div className={styles.container}>

<Section>



</Section>

<FullSection>


<div>

<p>

holamundo

</p>



</div>
<div>

<p>

holamundo

</p>



</div>

</FullSection>













      </div>
    );
  }




function Section({ title, children }) {
  return (
    <div>
      <h1 className={styles.infoTitle}>{title}</h1>
      <div className={styles.containerDivide}>{children}</div>
    </div>
  );
}

function FullSection({ title, titleTwo, children }) {
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

function InputField({ type, placeholder, name, label, register, className = "" }) {
  return (
    <div className={`${styles.formGroup} ${className}`}>
      <input
        type={type}
        className={styles.formField}
        placeholder={placeholder}
        {...register(name, { required: true })}
      />
      <label htmlFor={name} className={styles.formLabel}>
        {label}
      </label>
    </div>
  );
}






