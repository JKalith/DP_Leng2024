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
                    type="Date"
                    className={styles.formField}
                    placeholder="Nombre de actividad"
                    name="Start Date"
                    id="startDate"
                    required
                  />
                  <label htmlFor="name" className={styles.formLabel}>
                    Fecha de actividad
                  </label>
                </div>
                <div className={styles.form__group}>
                
               
                </div>
              </div>
            </div>
            {/* Div rigth */}
            <div className={styles.rigth}>

            <div class={styles.checkboxWrapper + " " + styles.containerFlex}>
               



            <div className={styles.form__group}>
                <input
                  type="Time"
                  className={styles.formFieldTime}
                  placeholder="Hora inicio"
                  name="endTime"
                  id="endTime"
                  required
                />
                <label htmlFor="name" className={styles.formLabel}>
                Hora inicio
                </label></div>

                <div className={styles.form__group}>
                <input
                  type="Time"
                  className={styles.formFieldTime}
                  placeholder="Hora finalizacion"
                  name="endTime"
                  id="endTime"
                  required
                />
                <label htmlFor="name" className={styles.formLabel}>
                  Hora finalizacion
                </label></div>



              </div>


        
            </div>
          </div>
          <div className={styles.lCont}>
            <h1 className={styles.infoTitle}>Contacto de la actividad</h1>
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
                    placeholder="emailActivity"
                    name="emailActivity"
                    id="emailActivity"
                    required
                  />
                  <label htmlFor="name" className={styles.formLabel}>
                    Correo electronico
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
                  placeholder="whatsappActivity"
                  name="whatsappActivity"
                  id="whatsappActivity"
                  required
                />
                <label htmlFor="whatsapp" className={styles.formLabel}>
                Whatsapp 
                </label>
              </div>
    
              <div></div>
            </div>
          </div>

          <div className={styles.lCont}>
            <h1 className={styles.infoTitle}>Link de las publicaciones</h1>
          </div>
          <div className={styles.resume}>           
<div>
  {/* Div left */}
  <div className={styles.left}>

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
               
           
                      
          <div class={styles.checkboxContainer}>
        <label>
            <input type="checkbox"  class={styles.checkboxRed}/>
            <span>Deporte</span>
        </label>
        <label>
            <input type="checkbox" class={styles.checkboxGreen}/>
            <span>Cine</span>
        </label>
        <label>
            <input type="checkbox" class={styles.checkboxBlue}/>
            <span>Entretenimiento</span>
        </label>
    </div>


    <div class={styles.checkboxContainer}>
        <label>
            <input type="checkbox"  class={styles.checkboxYelow}/>
            <span>Danza</span>
        </label>
        <label>
            <input type="checkbox" class={styles.checkboxOrange}/>
            <span>Aire Libre</span>
        </label>
        <label>
            <input type="checkbox" class={styles.checkboxRose}/>
            <span>Acampar</span>
        </label>
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





              <div class={styles.checkboxWrapper + " " + styles.containerFlex +' '+ styles.container}>
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

          <div className={styles.centerC}>
          <div class={styles.containerFlex}>
     
        
          <button className={styles.customBtn+' '+styles.btnSave}><span>Enviar</span></button>
 

          <button className={styles.customBtn+' '+styles.btnCancel}><span>Cancelar</span></button>
   
          </div>
            </div>

        </div>
        
      </div>

    </div>
  );
}
