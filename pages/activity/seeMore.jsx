import React from "react";
import styles from "styles/seeMore.module.css";

function SeeMore() {
  return (
    <div className={styles.containerCenter}>
      <div className={styles.container}>
        <div className={styles.left}>

            <h1 className={styles.title}>Nombre de la actividad</h1>
      
         
          
      

            <section className={styles.dividerText}>
            <p>Lugar: </p>
<p>Lugar de la actividad</p>


            </section>

            <section className={styles.dividerText}>
            <p>Fecha de inicio:</p>
            <p> DD/MM/DD</p>
            </section>

            <section className={styles.dividerText}>
            <p>Fecha de finalización: </p>
            <p> DD/MM/DD</p>
            </section>







          <div>
            <section className={styles.dividerText}>
              <p>Hora de inicio:</p>
<p>00:00 AM</p>


            </section>

            <section className={styles.dividerText}>
            <p>Hora de finalización: </p>
<p>00:00 PM</p>


            </section>


 
          </div>
          <div>
            <h3>Descripcion del evento</h3>
            <div className={styles.textDescription}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div>
              <h3>Ubicación</h3>
              <div className={styles.ubication}></div>

              <div></div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div>
            <h3>Imagenes Representativa</h3>
            <div className={styles.image}>
              <img src="" alt="Imagen representativa" />
            </div>
          </div>
          <h3>Categoria</h3>
          <div>
            <button className={styles.category} disabled>
              Categoria
            </button>
            <button className={styles.category} disabled>
              Categoria
            </button>
          </div>
          <div className={styles.contact}>
            <p>Contactenos</p>
            <p>Facebook----------------------------</p>
            <p>Instagram---------------------------</p>
            <p>Telefono----------------------------</p>
          </div>
          <div>
            <button className={styles.button}>Inscribirse</button>
            <button className={styles.button}>Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeeMore;
