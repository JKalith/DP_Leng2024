import styles from "styles/activityRegister.module.css";
import { activityService, alertService } from "services";
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { uploadFile } from '/pages/firebase/config';
import { useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import globals from "styles/globals.module.css";
import map from "styles/map.module.css";




export default function ActivityRegister(props) {

  const activitytwo = props?.activity;
  const router = useRouter();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  const [files, setFiles] = useState([]);
  const [location, setLocation] = useState({ lat: 8.626823986047272, lng: -83.15456668174622 });
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_MAPS_KEY, // Replace with your API key
  });
  async function onSubmit(data) {
    alertService.clear();
    try {
      let message;
      if (files.length > 0) {
        const filesUrl = [];
        for (let i = 0; i < files.length; i++) {
          filesUrl[i] = await uploadFile(files[i]);
          console.log("url " + filesUrl[i]);
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

      // redirigir a la lista de usuarios con un mensaje de éxito
      router.push("/users");
      alertService.success(message, true);
    } catch (error) {
      alertService.error(error);
      console.error(error);
    }
  }

  return (
    <div>
      <div className={styles.centerC}>
        <div className={styles.containerSec}>
          <div className={styles.lCont}>
            <h1 className={globals.infoTitle}>Registro de Actividades</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.resume}>
              <div className={styles.left}>
                <div className={styles.form__group}>
                  <input
                    type="text"
                    className={styles.formField}
                    placeholder="Nombre de actividad"
                    {...register("nameActivity", { required: true })}
                  />
                  <label htmlFor="nameActivity" className={styles.formLabel}>
                    Nombre de actividad
                  </label>
                  {errors.nameActivity && <p>Este campo es requerido</p>}
                </div>
              </div>
              <div className={styles.rigth}>
                <div className={styles.form__group}>
                  <input
                    type="text"
                    className={styles.formField}
                    placeholder="Lugar"
                    {...register("place", { required: true })}
                  />
                  <label htmlFor="place" className={styles.formLabel}>
                    Lugar
                  </label>
                  {errors.place && <p>Este campo es requerido</p>}
                </div>
              </div>
            </div>
            <div className={styles.lCont}>
              <h1 className={globals.infoTitle}>Horario</h1>
            </div>
            <div className={styles.resume}>
              <div className={styles.left}>
                <div className={styles.form__group}>
                  <input
                    type="date"
                    className={styles.formField}
                    {...register("startDate", { required: true })}
                  />
                  <label htmlFor="startDate" className={styles.formLabel}>
                    Fecha de inicio
                  </label>
                  {errors.startDate && <p>Este campo es requerido</p>}
                </div>
              </div>
              <div className={styles.left}>
                <div className={styles.form__group}>
                  <input
                    type="date"
                    className={styles.formField}
                    {...register("endDate", { required: true })}
                  />
                  <label htmlFor="endDate" className={styles.formLabel}>
                    Fecha de fin
                  </label>
                  {errors.endDate && <p>Este campo es requerido</p>}
                </div>
              </div>
              <div className={styles.rigth}>
                <div className={styles.form__group}>
                  <input
                    type="time"
                    className={styles.formFieldTime}
                    {...register("startTime", { required: true })}
                  />
                  <label htmlFor="startTime" className={styles.formLabel}>
                    Hora inicio
                  </label>
                  {errors.startTime && <p>Este campo es requerido</p>}
                </div>
        
              </div>






              <div className={styles.left}>

              <div className={styles.form__group}>
                  <input
                    type="time"
                    className={styles.formFieldTime}
                    {...register("endTime", { required: true })}
                  />
                  <label htmlFor="endTime" className={styles.formLabel}>
                    Hora finalización
                  </label>
                  {errors.endTime && <p>Este campo es requerido</p>}
                </div>

              </div>
            </div>
            <div className={styles.lCont}>
              <h1 className={globals.infoTitle}>Contacto de la actividad</h1>
            </div>
            <div className={styles.resume}>
              <div className={styles.left}>
                
                <div className={styles.form__group}>
                  <input
                    type="email"
                    className={styles.formField}
                    placeholder="Correo electrónico"
                    {...register("email", { required: true })}
                  />
                  <label htmlFor="email" className={styles.formLabel}>
                    Correo electrónico
                  </label>
                  {errors.email && <p>Este campo es requerido</p>}
                </div>
              </div>
              <div className={styles.rigth}>
                <div className={styles.form__group}>
                  <input
                    type="text"
                    className={styles.formField}
                    placeholder="Teléfono"
                    {...register("phone", { required: true })}
                  />
                  <label htmlFor="phone" className={styles.formLabel}>
                    Teléfono
                  </label>
                  {errors.phone && <p>Este campo es requerido</p>}
                </div>
              </div>
            </div>
            <div className={styles.lCont}>
              <h1 className={globals.infoTitle}>Link de las publicaciones</h1>
            </div>
            <div className={styles.resume}>
              <div className={styles.left}>
                <div className={styles.form__group}>
                  <input
                    type="text"
                    className={styles.formField}
                    placeholder="Facebook"
                    {...register("facebook", { required: true })}
                  />
                  <label htmlFor="facebook" className={styles.formLabel}>
                    Facebook
                  </label>
                  {errors.facebook && <p>Este campo es requerido</p>}
                </div>
              </div>
              <div className={styles.rigth}>
                <div className={styles.form__group}>
                  <input
                    type="text"
                    className={styles.formField}
                    placeholder="Instagram"
                    {...register("instagram", { required: true })}
                  />
                  <label htmlFor="instagram" className={styles.formLabel}>
                    Instagram
                  </label>
                  {errors.instagram && <p>Este campo es requerido</p>}
                </div>
              </div>
            </div>
            <div className={styles.lCont}>
              <h1 className={globals.infoTitle}>Categoría</h1>
            </div>
            <div className={styles.resume}>
              <div className={styles.left}>
                <div className={styles.containerAux}>
                  <div className={styles.checkboxContainer}>
                    <label>
                      <input
                        type="checkbox"
                        className={styles.checkboxRed}
                        {...register("activityCategory")}
                        value="Deporte"
                      />
                      <span>Deporte</span>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        className={styles.checkboxGreen}
                        {...register("activityCategory")}
                        value="Cine"
                      />
                      <span>Cine</span>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        className={styles.checkboxBlue}
                        {...register("activityCategory")}
                        value="Entretenimiento"
                      />
                      <span>Entretenimiento</span>
                    </label>
                  </div>
                  <div className={styles.checkboxContainer}>
                    <label>
                      <input
                        type="checkbox"
                        className={styles.checkboxYelow}
                        {...register("activityCategory")}
                        value="Danza"
                      />
                      <span>Danza</span>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        className={styles.checkboxOrange}
                        {...register("activityCategory")}
                        value="Aire Libre"
                      />
                      <span>Aire Libre</span>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        className={styles.checkboxRose}
                        {...register("activityCategory")}
                        value="Acampar"
                      />
                      <span>Acampar</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className={styles.rigth}>
                <h1 className={globals.infoTitle}>Disponibilidad</h1>
                <div className={styles.form__group}>
                  <input
                    type="number"
                    className={styles.formField}
                    placeholder="Cantidad de Cupos"
                    {...register("maxPersonRegistration", { required: true })}
                  />
                  <label
                    htmlFor="maxPersonRegistration"
                    className={styles.formLabel}
                  >
                    Cantidad de Cupos
                  </label>
                  {errors.maxPersonRegistration && (
                    <p>Este campo es requerido</p>
                  )}
                </div>





                
                <section style={{ marginTop: '10px' }}>
                <div
                  className={
                    styles.checkboxWrapper + " " + globals.containerFlex
                  }
                >
                  <input
                  className={
                    styles.tglIos + " " + styles.tgl + " " + styles.tglBtn
                  }
                  id="toggle"
                  type="checkbox"
                  {...register("allowPersonRegistration")}
                />




                <label className={styles.tglBtn} htmlFor="toggle">


                  
                
</label>

<p>Permitir Registro de Personas</p>


             
          
              </div>
              </section>
              <div></div>
            </div>
          </div>
            <div className={styles.lCont}>
              <h1 className={globals.infoTitle}>Descripción de la actividad</h1>
            </div>
            <div>
              <textarea
                className={styles.customTextarea}
                {...register("activityDescription", { required: true })}
              ></textarea>
              {errors.activityDescription && <p>Este campo es requerido</p>}
            </div>
            <div>
            <input
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => setFiles(e.target.files)}
              />
            </div>



            
               {/* Google Maps integration */}
               <div className={styles.lCont}>
              <h1 className={globals.infoTitle}>Ubicación</h1>
            </div>




            <div className={styles.lCont}>
        


            <div className={map.map}>
      {isLoaded ? (
        <GoogleMap
          mapContainerClassName={map.mapContainer}
          center={location}
          zoom={10}
          onClick={(e) => setLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() })}
        >
          <Marker position={location} />
        </GoogleMap>
      ) : <p>Cargando el mapa...</p>}
    </div>


            </div>












            <div className={styles.centerC}>
              <div className={globals.containerFlex}>
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
    </div>
  );
}