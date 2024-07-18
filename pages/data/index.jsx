import styles from "styles/basura.module.css";
import { activityService, alertService } from "services";
import { useRouter } from "next/router";
import InputField from "components/activity/inputField";
import { useForm } from "react-hook-form";
import { uploadFile } from "/pages/firebase/config";
import { useState, forwardRef } from "react";
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

export default function data(props) {
  const activitytwo = props?.activity;
  const router = useRouter();
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [allowRegister, setAllowRegister] = useState(true);
  const { register, handleSubmit, reset, formState, watch } = useForm();
  const { errors } = formState;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [images, setImages] = useState([]);
  const startDate = watch("startDate");
  const [location, setLocation] = useState({
    lat: 8.626823986047272,
    lng: -83.15456668174622,
  });
  const categories = [
    { value: "Deporte", style: styles.checkboxRed },
    { value: "Danza", style: styles.checkboxYelow },
    { value: "Cine", style: styles.checkboxGreen },
    { value: "Entretenimiento", style: styles.checkboxBlue },

    { value: "Aire Libre", style: styles.checkboxOrange },
    { value: "Acampar", style: styles.checkboxRose },
  ];

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
        file,
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
    if (variable === true) {
      setAllowRegister(false);
      console.log("lo cambio a false");
    } else {
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
    <div className={styles.container}>
      <div className={styles.containerSec}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Section title="Registro de Actividades">
            <InputField
              type="text"
              placeholder="Nombre de actividad"
              label="Nombre de actividad"
              {...register("nameActivity", { required: true })}
            />
            {errors.nameActivity && <p>Este campo es requerido</p>}
            <InputField
              type="text"
              placeholder="Lugar"
              {...register("place", { required: true })}
              label="Lugar"
            />
            {errors.place && <p>Este campo es requerido</p>}
          </Section>
          <Section title="Horario">
            <div className={styles.containerFlex}>
              <InputField
                type="date"
                {...register("startDate", { required: true })}
                label="Fecha de inicio"
              />
              {errors.startDate && <p>Este campo es requerido</p>}
              <InputField
                type="date"
                {...register("endDate", {
                  validate: (value) => {
                    if (!value) {
                      return "Este campo es requerido";
                    }
                    if (startDate && new Date(value) < new Date(startDate)) {
                      return "La fecha de fin no puede ser menor que la fecha de inicio";
                    }
                    return true;
                  },
                })}
                label="Fecha de fin"
                typeData="endDate"
              />
              {errors.endDate && <p>{errors.endDate.message}</p>}
            </div>

            <div className={styles.containerFlex}>
              <InputField
                type="time"
                {...register("startTime", { required: true })}
                label=" Hora inicio"
              />
              {errors.startTime && <p>Este campo es requerido</p>}
              <InputField
                type="time"
                label="Hora finalización"
                {...register("endTime", { required: true })}
              />
              {errors.endTime && <p>Este campo es requerido</p>}
            </div>
          </Section>
          <Section title="Contacto de la actividad">
            <div>
              <InputField
                type="email"
                placeholder="Correo electrónico"
                {...register("email", { required: true })}
                label="Correo electrónico"
              />
              {errors.email && <p>Este campo es requerido</p>}
            </div>
            <InputField
              type="text"
              placeholder="Teléfono"
              label="Whatsapp"
              {...register("phone", { required: true })}
            />
            {errors.phone && <p>Este campo es requerido</p>}
          </Section>
          <Section title="Link de las publicaciones">
            <InputField
              type="text"
              placeholder="Facebook"
              {...register("facebook")}
              label="Facebook"
            />
            <InputField
              type="text"
              placeholder="Instagram"
              {...register("instagram")}
              label="Instagram"
            />
          </Section>
          <FullSection title="Categorías" titleTwo="Disponibilidad">
            <div>
              <div className={styles.checkboxContainer}>
                {categories.map((category, index) => (
                  <div className={styles.checkboxContainer} key={index}>
                    <label>
                      <input
                        type="checkbox"
                        className={category.style}
                        {...register("activityCategory")}
                        value={category.value}
                      />
                      <span>{category.value}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label
                htmlFor="maxPersonRegistration"
                className={styles.formLabel}
              ></label>

              <InputField
                type="number"
                placeholder="Cantidad de Cupos"
                disabled={allowRegister}
                {...register("maxPersonRegistration")}
                label="Cantidad de Cupos"
              />

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

                  <p className={styles.p}>Permitir Registro de Personas</p>
                </div>
              </section>
            </div>
          </FullSection>
          <Section title="Descripción de la actividad">
            <textarea
              className={styles.customTextarea}
              {...register("activityDescription", { required: true })}
            ></textarea>
            {errors.activityDescription && <p>Este campo es requerido</p>}
          </Section>

          <FullSection>
            <div>
              <label className={styles.selectImagesBtn}>
                <span>Seleccionar archivos </span>
                <input
                  hidden
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={changeInput}
                ></input>
              </label>
              <div className={styles.imgRows}>
                {images.map((imagen) => (
                  <div className="" key={imagen.index}>
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
          </FullSection>

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

          <div></div>

          <div className={globals.containerFlex + " " + styles.containerDivide}>
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
        </form>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <h2 className={styles.infoTitle}>{title}</h2>
      <div className={styles.containerDivide}>{children}</div>
    </div>
  );
}

function FullSection({ title, titleTwo, children }) {
  return (
    <div>
      <div className={styles.containerDivide}>
        <h2 className={styles.infoTitle}>{title}</h2>
        <h2 className={styles.infoTitle}>{titleTwo}</h2>
        {children}
      </div>
    </div>
  );
}
