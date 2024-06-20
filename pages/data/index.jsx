import styles from "styles/basura.module.css";
import { activityService, alertService } from "services";
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { uploadFile } from '/pages/firebase/config';
import { useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import globals from "styles/globals.module.css";
import map from "styles/map.module.css";

export default function ActivityRegister(props) {
  const activity = props?.activity;
  const router = useRouter();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  const [files, setFiles] = useState([]);
  const [location, setLocation] = useState({ lat: 8.626823986047272, lng: -83.15456668174622 });
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_MAPS_KEY,
  });

  async function onSubmit(data) {
    alertService.clear();
    try {
      let message;
      if (files.length > 0) {
        const filesUrl = [];
        for (let i = 0; i < files.length; i++) {
          filesUrl[i] = await uploadFile(files[i]);
        }
        data.imageUrl = filesUrl;
      }
      data.latitude = location.lat;
      data.longitude = location.lng;
      if (activity) {
        await activityService.update(activity.id, data);
        message = "Actividad actualizada";
      } else {
        await activityService.register(data);
        message = "Actividad agregada";
      }
      router.push("/users");
      alertService.success(message, true);
    } catch (error) {
      alertService.error(error);
      console.error(error);
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Section title="Registro de Actividades">
          <InputField
            type="input"
            placeholder="Nombre de actividad"
            {...register("nameActivity", { required: true })}
            name="Registro"
            label="Nombre de actividad"
            register={register}
          />
          <InputField
            type="input"
            placeholder="Lugar"
            {...register("place", { required: true })}
            name="Place"
            label="Lugar"
            register={register}
          />
        </Section>
        <Section title="Horario">
          <InputField
            type="date"
            name="startDate"
            {...register("startDate", { required: true })}
            label="Fecha de actividad"
            register={register}
          />
          <div className={styles.containerFlex}>
            <InputField
              type="time"
              name="startTime"
              label="Hora inicio"
              register={register}
           {...register("startTime", { required: true })}
 
            /> 
          {errors.startTime && <p>Este campo es requerido</p>}
            <InputField
              type="time"
              name="endTime"
        
              register={register}
              className={styles.hour}
              {...register("endTime", { required: true })}
              />
          
              {errors.endTime && <p>Este campo es requerido</p>}

<div>
<InputField
               type="date"
              name="endTime"
          
              register={register}
              className={styles.hour}
              {...register("endDate", { required: true })}
              />

                  {errors.endDate && <p>Este campo es requerido</p>}
                  </div>
                

          </div>
        </Section>
        <Section title="Contacto de la actividad">
          <div>
          <InputField
            type="input"
            placeholder="Correo electrónico"
            name="emailActivity"
            label="Correo electrónico"
            register={register}
            {...register("email", { required: true })}
            />
     
            {errors.email && <p>Este campo es requerido</p>}

            </div>
          <InputField
            type="input"
            placeholder="Whatsapp"
            name="whatsappActivity"
            label="Whatsapp"
            register={register}
          />
        </Section>
        <Section title="Link de las publicaciones">
          <InputField
            type="input"
            placeholder="Facebook"
            name="facebookActivity"
            label="Facebook"
            register={register}
          />
          <InputField
            type="input"
            placeholder="Instagram"
            name="instagramActivity"
            label="Instagram"
            register={register}
          />
        </Section>
        <FullSection title="Categorías" titleTwo="Disponibilidad">
          <CheckboxGroup register={register} />
          <InputField
            type="input"
            placeholder="Cantidad de Cupos"
            name="capacity"
            label="Cantidad de Cupos"
            register={register}
          />
          <ToggleSwitch
            id="toggle"
            label="Permitir Registro de Personas"
          />
        </FullSection>
        <Section title="Descripción de la actividad">
          <textarea
            className={styles.customTextarea}
            {...register("description")}
          ></textarea>
        </Section>
        <div className={styles.containerFlexButom}>
          <button
            type="submit"
            className={`${globals.customBtn} ${globals.btnSave}`}
          >
            <span>Enviar</span>
          </button>
          <button
            type="button"
            className={`${globals.customBtn} ${globals.btnCancel}`}
            onClick={() => reset()}
          >
            <span>Cancelar</span>
          </button>
        </div>
      </form>
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

function CheckboxGroup({ register }) {
  const categories = [
    { value: 'Entretenimiento', className: styles.checkboxBlue },
    { value: 'Cine', className: styles.checkboxGreen },
    // Puedes agregar más categorías aquí
  ];

  return (
    <div className={styles.checkboxContainer}>
      {categories.map((category, index) => (
        <label key={index}>
          <input
            type="checkbox"
            className={category.className}
            {...register("activityCategory")}
            value={category.value}
          />
          <span>{category.value}</span>
        </label>
      ))}
   






    </div>

  );
}

function ToggleSwitch({ id, label }) {
  return (
    <div className={`${styles.checkboxWrapper} ${styles.containerFlex} ${styles.padding}`}>
      <input
        className={`${styles.tglIos} ${styles.tgl} ${styles.tglBtn}`}
        id={id}
        type="checkbox"
      />
      <label className={styles.tglBtn} htmlFor={id}></label>
      <p>{label}</p>
    </div>
  );
}


