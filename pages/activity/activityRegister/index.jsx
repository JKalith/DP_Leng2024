import styles from "styles/activityRegister.module.css";
import { activityService, alertService } from "services";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { uploadFile } from "/pages/firebase/config";
import { useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import globals from "styles/globals.module.css";
import map from "styles/map.module.css";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

export default function ActivityRegister(props) {
  const activitytwo = props?.activity;
  const router = useRouter();
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [allowRegister, setAllowRegister] = useState(true);
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  const [images, setImages] = useState([]);
  const [location, setLocation] = useState({
    lat: 8.626823986047272,
    lng: -83.15456668174622,
  });

  const changeInput = (e) => {
    let indexImg;

    if (images.length > 0) {
      indexImg = images[images.length - 1].index + 1;
    } else {
      indexImg = 0;
    }

    let newImgsToState = readmultifiles(e, indexImg);
    let newImgsState = [...images, ...newImgsToState];
    setImages(newImgsState);

    console.log(newImgsState);
  };

  function readmultifiles(e, indexInicial) {
    const files = e.currentTarget.files;
    const arrayImages = [];

    Object.keys(files).forEach((i) => {
      const file = files[i];
      let url = URL.createObjectURL(file);

      arrayImages.push({
        index: indexInicial,
        name: file.name,
        url,
        file
      });

      indexInicial++;
    });

    return arrayImages;
  }

  function deleteImg(indice) {
    const newImgs = images.filter((element) => element.index !== indice);

    // Update indices directly in the filtered array
    for (let i = 0; i < newImgs.length; i++) {
      newImgs[i].index = i;
    }

    setImages(newImgs);

    if (mainImageIndex === indice) {
      setMainImageIndex(0); // Clear main image index if deleted
    }
  }

  function selectMainImage(indice) {
    setMainImageIndex(indice);
    console.log(indice);
  }
  function handleAllowRegister(variable) {
    if(variable === true){
     setAllowRegister(false);
     console.log("lo cambio a false");
    }else{
     setAllowRegister(true);
     console.log("lo cambio a true");
    }
     
     
   }
  async function onSubmit(data) {
    alertService.clear();
    try {
      let message;
      if (images.length > 0) {
        const filesUrl = [];
        for (let i = 0; i < images.length; i++) {
          filesUrl[i] = await uploadFile(images[i].file);
          console.log("url " + filesUrl[i]);
        }
        data.imageUrl = filesUrl;
        data.indiceImagenPrincipal = mainImageIndex;
      }
      data.latitude = location.lat;
      data.longitude = location.lng;
      if (activitytwo) {
        await activityService.update(activitytwo.id, data);
        message = "Actividad actualizada";
      } else {
        await activityService.register(data);
        message = "Actividad agregada";
      }

      router.push("/users");
      alertService.success(message, true);
    } catch (error) {
      alertService.error(error.message);
      console.error(error);
    }
  }


  function handleMapClick(e) {
    const { latLng } = e.detail;
    setLocation({
      lat: latLng.lat,
      lng: latLng.lng,
    });
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
                    disabled={allowRegister}
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

                <section style={{ marginTop: "10px" }}>
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
                      checked={!allowRegister}
                      onChange={() => handleAllowRegister(allowRegister)}
                    />

                    <label className={styles.tglBtn} htmlFor="toggle"></label>

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
              <label className={styles.selectImagesBtn}>
                <span>Seleccionar archivos </span>
                <input hidden type="file" multiple accept="image/*" onChange={changeInput}></input>
              </label>
              <div className="row">
                {images.map((imagen) => (
                  <div className="col-6 col-sm-4 col-lg-3 square" key={imagen.index}>
                    <div className={styles.content_img}>
                      
                      {/* Borrar la imagen */}
                      <input
                        type="button"
                        className={styles.deleteImageBtn}
                        value="x"
                        onClick={() => deleteImg(imagen.index)}
                      />
                      <input
                        type="checkbox"
                        className={styles.checkboxImage}
                        checked={mainImageIndex === imagen.index}
                        onChange={() => selectMainImage(imagen.index)}
                        style={{ top: "10px", right: "10px" }}
                      />
                      <img
                        alt=""
                        src={imagen.url}
                        data-toggle="modal"
                        data-target="#ModalPreViewImg"
                        className="img-responsive"
                      ></img>
                    </div>
                  </div>
                ))}
              </div>
            </div>









            <APIProvider apiKey={process.env.NEXT_PUBLIC_API_MAPS_KEY}>
              <div
                className={styles.containerMap}
                style={{ height: "400px", width: "auto" }}
              >
                <Map
                  defaultZoom={10}
                  defaultCenter={location}
                  mapId={process.env.NEXT_PUBLIC_ID_MAPS_KEY}
                  onClick={handleMapClick}
                >
                  <AdvancedMarker position={location}></AdvancedMarker>
                </Map>
              </div>
            </APIProvider>

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
