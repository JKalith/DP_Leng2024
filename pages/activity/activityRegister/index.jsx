import styles from "styles/activityRegister.module.css";

export default function ActivtyRegister() {
  return (
    /* Div principal */
    <div>
      <div className={styles.centerC}>
        <div className={styles.containerSec}>
          <div className={styles.lCont}>
            <h1 className={styles.infoTitle}> Registro de Actividades</h1>
          </div>
          <div className={styles.resume}>
            <div>
              {/* Div left */}
              <div className={styles.left}>
                <div className={styles.containerLef}>
                  <div className={styles.form__group}>
                    <input
                      type="input"
                      className={styles.formField}
                      placeholder="Nombre de actividad"
                      name="Registro"
                      id="Registro"
                      required
                    />
                    <label htmlFor="name" className={styles.formLabel}>
                      Nombre de actividad
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Div rigth */}
            <div className={styles.rigth}>
              <div className={styles.form__group}>
                <input
                  type="input"
                  className={styles.formField}
                  placeholder="Lugar"
                  name="Place"
                  id="Place"
                  required
                />
                <label htmlFor="name" className={styles.formLabel}>
                  Lugar
                </label>
              </div>
            </div>
          </div>
          <div className={styles.lCont}>
            <h1 className={styles.infoTitle}>Horario</h1>
          </div>
          {/* div de Horario */}
          <div className={styles.resume}>
            <div>
              {/* Div left */}
              <div className={styles.left}>
                <div className={styles.form__group}>
                  <input
                    type="input"
                    className={styles.formField}
                    placeholder="Nombre de actividad"
                    name="Start Date"
                    id="startDate"
                    required
                  />
                  <label htmlFor="name" className={styles.formLabel}>
                    Fecha de inicio
                  </label>
                </div>
                <div className={styles.form__group}>
                  <input
                    type="input"
                    className={styles.formField}
                    placeholder="Fecha de finalizacion"
                    name="End Date"
                    id="End Date"
                    required
                  />
                  <label htmlFor="name" className={styles.formLabel}>
                    Fecha de finalizacion
                  </label>
                </div>
              </div>
            </div>
            {/* Div rigth */}
            <div className={styles.rigth}>
              <div className={styles.form__group}>
                <input
                  type="input"
                  className={styles.formField}
                  placeholder="startTime"
                  name="endTime"
                  id="startTime"
                  required
                />
                <label htmlFor="name" className={styles.formLabel}>
                  Hora inicio
                </label>
              </div>
              <div className={styles.form__group}>
                <input
                  type="input"
                  className={styles.formField}
                  placeholder="Hora finalizacion"
                  name="endTime"
                  id="endTime"
                  required
                />
                <label htmlFor="name" className={styles.formLabel}>
                  Hora finalizacion
                </label>
              </div>
            </div>
          </div>
          {/* div de Horario */}
          <div className={styles.lCont}>
            <h1 className={styles.infoTitle}>Contacto con el cliente</h1>
          </div>
          <div className={styles.resume}>
            <div>
              {/* Div left */}
              <div className={styles.left}>
                <div className={styles.form__group}>
                  <input
                    type="input"
                    className={styles.formField}
                    placeholder="emailActivity"
                    name="emailActivity"
                    id="emailActivity"
                    required
                  />
                  <label htmlFor="name" className={styles.formLabel}>
                    Correo electronico
                  </label>
                </div>
                <div className={styles.form__group}>
                  <input
                    type="input"
                    className={styles.formField}
                    placeholder="facebookActivity"
                    name="facebookActivity"
                    id="facebookActivity"
                    required
                  />
                  <label htmlFor="name" className={styles.formLabel}>
                    Facebook
                  </label>
                </div>
              </div>
            </div>
            {/* Div rigth */}
            <div className={styles.rigth}>
              <div className={styles.form__group}>
                <input
                  type="input"
                  className={styles.formField}
                  placeholder="instagramActivity"
                  name="instagramActivity"
                  id="instagramActivity"
                  required
                />
                <label htmlFor="name" className={styles.formLabel}>
                  Instagram
                </label>
              </div>
              <div className={styles.form__group}>
                <input
                  type="input"
                  className={styles.formField}
                  placeholder="Telefono"
                  name="nphoneActivity"
                  id="phoneActivity"
                  required
                />
                <label htmlFor="name" className={styles.formLabel}>
                  Telefono
                </label>
              </div>
              <div></div>
            </div>
          </div>
          <div className={styles.lCont}>
            <h1 className={styles.infoTitle}>Categoria</h1>
          </div>
          <div className={styles.resume}>
            <div>
              {/* Div left */}
              <div className={styles.left}>
                <div className={styles.containerAux}>
                  <div className={styles.tareas}>
                    <ul className={styles.ul}>
                      <li>
                        <input
                          className={styles.input + " " + styles.tarea1}
                          type="checkbox"
                          id="tarea-1"
                        />
                        <label className={styles.label} htmlFor="tarea-1">
                          <p>Deporte</p>
                        </label>
                      </li>
                      <li>
                        <input
                          className={styles.input + " " + styles.tarea2}
                          type="checkbox"
                          id="tarea-2"
                          defaultChecked
                        />
                        <label className={styles.label} htmlFor="tarea-2">
                          <p>Recreativo </p>
                        </label>
                      </li>
                      <li>
                        <input
                          className={styles.input + " " + styles.tarea3}
                          type="checkbox"
                          id="tarea-3"
                        />
                        <label className={styles.label} htmlFor="tarea-3">
                          <p>Entretenimiento</p>
                        </label>
                      </li>
                      <li>
                        <input
                          className={styles.input + " " + styles.tarea4}
                          type="checkbox"
                          id="tarea-4"
                        />
                        <label className={styles.label} htmlFor="tarea-4">
                          <p>Para todo publico</p>
                        </label>
                      </li>
                      <li>
                        <input
                          className={styles.input + " " + styles.tarea5}
                          type="checkbox"
                          id="tarea-5"
                        />
                        <label className={styles.label} htmlFor="tarea-5">
                          <p>Aire libre</p>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Div rigth */}

            <div className={styles.rigth}>
              <h1 className={styles.infoTitle}>Disponibilidad</h1>
              <div className={styles.form__group}>
                <input
                  type="input"
                  className={styles.formField}
                  placeholder="facebookActivity"
                  name="facebookActivity"
                  id="facebookActivity"
                  required
                />
                <label htmlFor="name" className={styles.formLabel}>
                  Cantidad de Cupos{" "}
                </label>
              </div>
              <div class={styles.checkboxWrapper + " " + styles.containerFlex}>
                <input
                  className={
                    styles.tglIos + " " + styles.tgl + " " + styles.tglBtn
                  }
                  id="toggle"
                  type="checkbox"
                />
                <label class={styles.tglBtn} for="toggle"></label>
                <p>Permitir Registro de Personas</p>
              </div>
              <div></div>
            </div>
          </div>
          <div className={styles.lCont}>
            <h1 className={styles.infoTitle}>Descripcion de la actividad</h1>
          </div>
          <div>
            <textarea
              className={styles.customTextarea}
              name=""
              id=""
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
