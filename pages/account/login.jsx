import { useRouter } from "next/router";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import styles from "styles/login.module.css";
import { Layout } from "components/account";
import { userService, alertService } from "services";
import InputField from "components/activity/inputField";
import globals from "styles/globals.module.css";

export default Login;

function Login() {
  const router = useRouter();

  // form validation rules
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit({ username, password }) {
    alertService.clear();
    return userService
      .login(username, password)
      .then(() => {
        // get return url from query parameters or default to '/'
        const returnUrl = router.query.returnUrl || "/activity";
        router.push(returnUrl);
      })
      .catch(alertService.error);
  }

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.containerSec}>
          <p className={styles.title }>Login</p>
          <div className={styles.containerForm}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.containerColum}>
                <div className={globals.tooltip }>
                  <InputField
                    type="text"
                    {...register("username")}
                    label="Usuario"
                    typeData="username"
                  />
                  {errors.username && (
                    <div className={globals.tooltiptext}>
                      Se necesita un usuario
                    </div>
                  )}
                </div>

                <div className={globals.tooltip }>
                  <InputField
                type="password"
                       name="password"
                       {...register("password")}
                    label="Contraseña"
                    typeData="password"
                  />
                  {errors.password && (
                    <div className={globals.tooltiptext}>
                     Ingrese una contraseña 
                    </div>
                  )}
                </div>
              </div>

          

              <div className={styles.containerFlex}>
         



                <div className={styles.containerFlex + " " + styles.containerDivide}>
            <button
              type="submit"
              className={globals.customBtn + " " + globals.btnSave}
            >
                {formState.isSubmitting && <span></span>}
              <span>Ingresar</span>
            </button>







            <Link className= {styles.Links } href="/account/register"  >   
            
            <button
              type="button"
              className={globals.customBtn + " " + globals.btnCancel}
             
            >  
              <span>Registrar</span>
            </button>
            
            
            </Link>
       
          </div>

    






              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
