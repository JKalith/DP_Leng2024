import styles from "styles/personRegister.module.css";
import { personService, alertService } from "services";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import globals from "styles/globals.module.css";
import { useState, useEffect } from "react";
import React, { forwardRef } from "react";
export default function AddPerson(props) {
  const person = props?.person;
  const router = useRouter();
  const { id } = router.query;
  const { register, handleSubmit, setValue, reset, formState } = useForm();
  const [activityId, setActivityId] = useState(null);
  const { errors } = formState;
  useEffect(() => {
    if (id) {
      setActivityId(id);
      setValue("activityId", id); // Opcional: establece el valor en el formulario
    }
  }, [id, setValue]);
  const onSubmit = async (data) => {
    try {
      data.idActivity = activityId; // Incluye el id de la actividad en los datos enviados
      await personService.register(data);
      alertService.success("Se registró persona", true);
      router.push("/users"); // Redirige a la página de usuarios
    } catch (error) {
      alertService.error(error.message);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.containerSec}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Section title="Formulario de asistencia">
            <div className={styles.formGroup}>
              <InputField
                type="input"
                placeholder="Nombre"
                name="Name"
                {...register("name", { required: true })}
                id="Name"
                label="Nombre"
              />
              {errors.name && <p>Este campo es requerido</p>}
            </div>
            <div className={styles.formGroup}>
              <InputField
                type="input"
                placeholder="Primer Apellido"
                name="LastName"
                {...register("lastName", { required: true })}
                id="LastName"
                label="Primer apellido"
              />
            </div>
          </Section>

          <Section>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="secondLastName"
                id="secondLastName"
                className={styles.formField}
                placeholder="Segundo apellido"
                {...register("secondLastName", { required: true })}
              />
              <label htmlFor="secondLastName" className={styles.formLabel}>
                Segundo Apellido
              </label>
              {errors.facebook && <p>Este campo es requerido</p>}
            </div>

            <div className={styles.formGroup}>
              <InputField
                type="input"
                placeholder="identificacion"
                name="identification"
                id="identification"
                {...register("identification", { required: true })}
                label="Numero de cedula"
              />
            </div>
          </Section>

          <Section title="Contacto ">
            <div className={styles.formGroup}>
              <InputField
                type="input"
                placeholder="email"
                name="email"
                id="email"
                {...register("email")}
                label="Correo electronico"
              />
            </div>
            <div className={styles.formGroup}>
              <InputField
                type="input"
                placeholder="telefono"
                name="phone"
                id="phone"
                {...register("phone", { required: true })}
                label="Telefono"
              />
            </div>
          </Section>
          <div className={styles.container}>
            <div className={styles.containerFlexButom}>
              <button
                type="submit"
                className={globals.customBtn + " " + globals.btnSave}
              >
                <span>Enviar</span>
              </button>
              <button
                type="button"
                className={globals.customBtn + " " + globals.btnCancel}
                onClick={() => reset()}
              >
                <span>Cancelar</span>
              </button>
            </div>
          </div>
        </form>
      </div>
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

const InputField = forwardRef(
  ({ type, placeholder, name, id, label, ...rest }, ref) => (
    <>
      <input
        type={type}
        className={styles.formField}
        placeholder={placeholder}
        name={name}
        id={id}
        ref={ref}
        {...rest}
      />
      <label htmlFor={id} className={styles.formLabel}>
        {label}
      </label>
    </>
  )
);
