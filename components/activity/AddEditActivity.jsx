import styles from "styles/basura.module.css";
import { activityService, alertService, userService } from "services";
import { useRouter } from "next/router";
import InputField from "components/activity/inputField";
import { useForm } from "react-hook-form";
import { uploadFile } from "/pages/firebase/config";
import { useState, forwardRef, useEffect } from "react";
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
  const user = userService.userValue;
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
  useEffect(() => {
    if (activitytwo) {
      // Cargar los datos existentes en el formulario
      reset({
        nameActivity: activitytwo.nameActivity,
        userId: activitytwo.userId,
        place: activitytwo.place,
        startDate: activitytwo.startDate,
        endDate: activitytwo.endDate,
        startTime: activitytwo.startTime,
        endTime: activitytwo.endTime,
        email: activitytwo.email,
        phone: activitytwo.phone,
        facebook: activitytwo.facebook,
        instagram: activitytwo.instagram,
        activityCategory: activitytwo.activityCategory,
        maxPersonRegistration: activitytwo.maxPersonRegistration,
        activityDescription: activitytwo.activityDescription,
      });

      // Cargar la ubicación
      const lat = parseFloat(activitytwo.latitude);
      const lng = parseFloat(activitytwo.longitude);
      if (!isNaN(lat) && !isNaN(lng)) {
        setLocation({
          lat,
          lng,
        });
      }

      // Cargar imágenes
      const loadedImages = activitytwo.imageUrl.map((url, index) => ({
        index,
        name: `Imagen ${index + 1}`,
        url,
        file: null, // No podemos recuperar el archivo original, solo la URL
        isNew: false, // Marcar como imagen existente
      }));
      setImages(loadedImages);

      // Configurar la imagen principal
      setMainImageIndex(activitytwo.indiceImagenPrincipal);
    }
  }, [activitytwo, reset]);
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
        isNew: true, // Marcar como nueva imagen
      });
  
      indexInicial++;
    });
  
    return arrayImages;
  }

  function deleteImg(indice) {
    const newImgs = images.filter(element => element.index !== indice);
  
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
  const CheckboxComponent = () => {
    const { register } = useForm();
  };

  async function onSubmit(data) {
    alertService.clear();
    try {
      let message;
  
      // Separar imágenes nuevas y existentes
      const newImages = images.filter(img => img.isNew);
      const existingImages = images.filter(img => !img.isNew);
  
      if (newImages.length > 0) {
        const filesUrl = [];
  
        // Subir solo las imágenes nuevas
        for (let i = 0; i < newImages.length; i++) {
          filesUrl[i] = await uploadFile(newImages[i].file);
          console.log("url " + filesUrl[i]);
        }
  
        // Combinar URLs de imágenes nuevas y existentes
        data.imageUrl = [...existingImages.map(img => img.url), ...filesUrl];
      } else {
        // Solo URLs de imágenes existentes
        data.imageUrl = existingImages.map(img => img.url);
      }
  
      data.indiceImagenPrincipal = mainImageIndex;
      data.latitude = location.lat;
      data.longitude = location.lng;
      data.userId = user.id;
  
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
              {...register("nameActivity")}
            />
            <InputField
              type="text"
              placeholder="Lugar"
              {...register("place")}
              label="Lugar"
              ref={register("place").ref}
            />
            {errors.place && <p>Este campo es requerido</p>}
          </Section>
          <Section title="Horario">
            <div className={styles.containerFlex}>
              <div className={globals.tooltip + " " + globals.DivideHalf}>
                <InputField
                  type="date"
                  {...register("startDate", { required: true })}
                  label="Fecha de inicio"
                />
                {errors.startDate && (
                  <div className={globals.tooltiptext}>
                    Este campo es requerido
                  </div>
                )}
              </div>
              <div className={globals.tooltip + " " + globals.DivideHalf}>
                <InputField
                  type="date"
                  {...register("endDate", { required: true })}
                  label="Fecha de fin"
                  typeData="endDate"
                />
                {errors.startDate && (
                  <div className={globals.tooltiptext}>
                    Este campo es requerido
                  </div>
                )}
              </div>
            </div>
            <div className={styles.containerFlex}>
              <div className={globals.tooltip + " " + globals.DivideHalf}>
                <InputField
                  type="time"
                  {...register("startTime", { required: true })}
                  label=" Hora inicio"
                />{" "}
                {errors.startTime && (
                  <div className={globals.tooltiptext}>
                    Este campo es requerido
                  </div>
                )}
              </div>

              <div className={globals.tooltip + " " + globals.DivideHalf}>
                <InputField
                  type="time"
                  label="  Hora finalización"
                  {...register("endTime", { required: true })}
                />

                {errors.endTime && (
                  <div className={globals.tooltiptext}>
                    Este campo es requerido
                  </div>
                )}
              </div>
            </div>
          </Section>
          <Section title="Contacto de la actividad">
            <div>
              <InputField
                type="email"
                placeholder="Correo electrónico"
                {...register("email", { required: true })}
                label="     Correo electrónico"
              />
            </div>
            <InputField
              type="text"
              placeholder="Teléfono"
              label="Whatsapp"
              {...register("phone", { required: true })}
            />
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
          <FullSection
            title="Contacto de la actividad"
            titleTwo="Contacto de la actividad"
          >
            <SectionCategory>
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
            </SectionCategory>

            <div>
              <label
                htmlFor="maxPersonRegistration"
                className={styles.formLabel}
              ></label>

              <InputField
                type="number"
                placeholder="Cantidad de Cupos"
                disabled={allowRegister}
                {...register("maxPersonRegistration", { required: true })}
                label="Cantidad de Cupos"
              />

              <section style={{ marginTop: "10px" }}>
                <div
                  style={{ margin: "25px", marginTop: "0px" }}
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
              {...register("activityDescription")}
            ></textarea>
          </Section>

          <div style={{ margin: "40px", marginTop: "0px" }}>
            <label className={globals.btnAddPhoto}>
              <span className={globals.btnAddPhotoText}>Añadir Fotos</span>
              <span className={globals.btnAddPhotoIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke="currentColor"
                  height="24"
                  fill="none"
                  class="svg"
                >
                  <line y2="19" y1="5" x2="12" x1="12"></line>
                  <line y2="12" y1="12" x2="19" x1="5"></line>
                </svg>
              </span>
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

                    <label className={styles.customCheckbox}>
                      <input
                        type="checkbox"
                        className={styles.checkboxImage}
                        checked={mainImageIndex === imagen.index}
                        onChange={() => selectMainImage(imagen.index)}
                        style={{ top: "10px", right: "10px" }}
                      />
                      <span className={styles.checkmark}></span>
                    </label>

                    <img
                      alt=""
                      src={imagen.url}
                      data-toggle="modal"
                      data-target="#ModalPreViewImg"
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

function SectionCategory({ title, titleTwo, children }) {
  return <div className={styles.containerCategory}>{children}</div>;
}

