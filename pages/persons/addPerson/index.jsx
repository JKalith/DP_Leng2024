import styles from "styles/personRegister.module.css";
import { personService, alertService } from "services";
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import React, { forwardRef } from 'react';
export default function AddPerson(props) {
  const person = props?.person;
  const router = useRouter();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  async function onSubmit(data) {
    alertService.clear();
    try {
      // create or update user based on user prop
      let message;
      if (person) {
        await personService.update(person.id, data);
        message = "Se actualizo persona";
      } else {
        await personService.register(data);
        message = "se registro persona";
      }

      // redirect to user list with success message
      router.push("/users");
      alertService.success(message, true);
    } catch (error) {
      alertService.error(error);
      console.error(error);
    }
  }
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
            <InputField
              type="input"
              placeholder="Segundo apellido"
              name="secondLastName"
              id="secondLastName"
              {...register("secondLastName", { required: true })}
              label="Segundo Apellido"
            />
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
            <button className={`${styles.customBtn} ${styles.btnSave}`}>
              <span>Enviar</span>
            </button>
            <button className={`${styles.customBtn} ${styles.btnCancel}`}>
              <span>Cancelar</span>
              onClick={() => reset()}
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


const InputField = forwardRef(({ type, placeholder, name, id, label, ...rest }, ref) => (
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
));
