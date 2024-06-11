// import styles from "styles/activityRegister.module.css";

// export default function ActivityRegister() {
//   return (
//     <div className={styles.container}>
//       <div className={styles.containerSec}>
//         <Section title="Registro de Actividades">
//           <div className={styles.formGroup}>
//             <InputField
//               type="input"
//               placeholder="Nombre de actividad"
//               name="Registro"
//               id="Registro"
//               label="Nombre de actividad"
//             />
//           </div>
//           <div className={styles.formGroup}>
//             <InputField
//               type="input"
//               placeholder="Lugar"
//               name="Place"
//               id="Place"
//               label="Lugar"
//             />
//           </div>
//         </Section>
//         <Section title="Horario">
//           <div className={styles.formGroup}>
//             <InputField
//               type="date"
//               name="startDate"
//               id="startDate"
//               label="Fecha de actividad"
//             />
//           </div>
//           <div className={styles.containerFlex}>

//             <div className={styles.formGroup + ' ' + styles.hour}>
//               <InputField
//                 type="time"
//                 name="startTime"
//                 id="startTime"
//                 label="Hora inicio"
//               />
//             </div>
//             <div className={styles.hour + ' ' + styles.formGroup}>
//               <InputField
//                 type="time"
//                 name="endTime"
//                 id="endTime"
//                 label="Hora finalizacion"
//               />
//             </div>
//           </div>
//         </Section>
//         <Section title="Contacto de la actividad">
//           <div className={styles.formGroup}>
//             <InputField

//               type="input"
//               placeholder="emailActivity"
//               name="emailActivity"
//               id="emailActivity"
//               label="Correo electronico"
//             />
//           </div>
//           <div className={styles.formGroup}>
//             <InputField
//               type="input"
//               placeholder="whatsappActivity"
//               name="whatsappActivity"
//               id="whatsappActivity"
//               label="Whatsapp"
//             />
//           </div>
//         </Section>
//         <Section title="Link de las publicaciones">
//           <div className={styles.formGroup}>
//             <InputField
//               type="input"

//               placeholder="facebookActivity"
//               name="facebookActivity"
//               id="facebookActivity"
//               label="Facebook"
//             />
//           </div>
//           <div className={styles.formGroup}>
//             <InputField
//               type="input"
//               placeholder="instagramActivity"
//               name="instagramActivity"
//               id="instagramActivity"
//               label="Instagram"
//             />
//           </div>
//         </Section>
//         <FullSection title="Categorias" titleTwo="Disponibilidad">
//           <CheckboxGroup />
//           <div className={styles.formGroup}>
//             <InputField
//               type="input"
//               placeholder="Cantidad de Cupos"
//               name="capacity"
//               id="capacity"
//               label="Cantidad de Cupos"
//             />
//             <ToggleSwitch
//               id="toggle"
//               label="Permitir Registro de Personas"
//             />
//           </div>
//         </FullSection>
//         <Section title="Descripcion de la actividad">
//           <textarea className={styles.customTextarea}></textarea>
//         </Section>
//         <div className={styles.container}>
//           <div className={styles.containerFlexButom}>
//             <button className={${styles.customBtn} ${styles.btnSave}}>
//               <span>Enviar</span>
//             </button>
//             <button className={${styles.customBtn} ${styles.btnCancel}}>
//               <span>Cancelar</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// function Section({ title, children }) {
//   return (
//     <div >
//       <h1 className={styles.infoTitle}>{title}</h1>
//       <div className={styles.containerDivide}>{children}
//       </div>
//     </div>
//   );
// }
// function FullSection({ title, titleTwo, children }) {
//   return (
//     <div >
//       <div className={styles.containerDivide}>
//         <h1 className={styles.infoTitle}>{title}</h1>
//         <h1 className={styles.infoTitle}>{titleTwo}</h1>
//         {children}
//       </div>
//     </div>

//   );
// }
// function InputField({ type, placeholder, name, id, label }) {
//   return (
//     <>
//       <input
//         type={type}
//         className={styles.formField}
//         placeholder={placeholder}
//         name={name}
//         id={id}
//         required
//       />
//       <label htmlFor={id} className={styles.formLabel}>
//         {label}
//       </label>
//     </>
//   );
// }
// function CheckboxGroup() {
//   const categories = [
//     { label: "Deporte", className: styles.checkboxRed, },
//     { label: "Cine", className: styles.checkboxGreen },
//     { label: "Entretenimiento", className: styles.checkboxBlue },
//     { label: "Danza", className: styles.checkboxYelow },
//     { label: "Aire Libre", className: styles.checkboxOrange },
//     { label: "Acampar", className: styles.checkboxRose },
//   ];
//   return (
//     <div className={styles.checkboxContainer}>
//       {categories.map((category, index) => (
//         <label key={index}>
//           <input type="checkbox" className={category.className} />
//           <span>{category.label}</span>
//         </label>
//       ))}
//     </div>
//   );
// }
// function ToggleSwitch({ id, label }) {
//   return (
//     <div className={${styles.checkboxWrapper} ${styles.containerFlex} ${styles.padding}}>
//       <input
//         className={${styles.tglIos} ${styles.tgl} ${styles.tglBtn}}
//         id={id}
//         type="checkbox"
//       />
//       <label className={styles.tglBtn} htmlFor={id}></label>
//       <p>{label}</p>
//     </div>
//   );
// }