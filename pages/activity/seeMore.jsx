import React from "react";
import styles from "styles/seeMore.module.css";
import globals from "styles/globals.module.css";
function SeeMore() {
  return (
    <div className={styles.containerCenter}>
      <div className={styles.container}>
        <div className={styles.left}>

            <h1 className={globals.infoTitle }>Nombre de la actividad</h1>
      
         
          
      

            <section className={styles.dividerText}>
            <p className={globals.fontBold}>Lugar: </p>
<p>Lugar de la actividad</p>


            </section>

            <section className={styles.dividerText}>
            <p className={globals.fontBold}>Fecha de inicio:</p>
            <p> DD/MM/DD</p>
            </section>

            <section className={styles.dividerText}>
            <p className={globals.fontBold}>Fecha de finalización: </p>
            <p> DD/MM/DD</p>
            </section>







          <div>
            <section className={styles.dividerText}>
              <p className={globals.fontBold}>Hora de inicio:</p>
<p>00:00 AM</p>


            </section>

            <section className={styles.dividerText}>
            <p className={globals.fontBold}>Hora de finalización: </p>
<p>00:00 PM</p>


            </section>


 
          </div>
          <div>
            <p className={globals.fontBold +' '+ globals.size}>Descripcion del evento</p>
            <div className={styles.textDescription}>
              <p className={styles.pDescription}>

              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                
          
              </p>
            </div>
            <div>
              <p className={globals.infoTitle }>Ubicación</p>
              <div className={styles.ubication}></div>

              <div></div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div>
            <p className={globals.infoTitle }>Imagenes Representativa</p>
            <div className={styles.image } >
              <img src="" alt="Imagen representativa" />
            </div>
          </div>
          <p className={globals.infoTitle }>Categoria</p>
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


















<div className={globals.containerFlex}>

<button
            type="buttom"
            className={globals.btnSave +' '+ globals.customBtn }>   <span>Inscribirse</span></button>
      

            <button className={globals.btnCancel +' '+ globals.customBtn }> <span> Cancelar </span></button>

</div>


    
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeeMore;
