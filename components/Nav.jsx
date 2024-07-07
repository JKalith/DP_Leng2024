import React, { useState, useEffect } from 'react';
import { NavLink } from '.';
import { userService } from 'services';
import styles from "styles/navbar.module.css";
export { Nav };

function Nav() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const subscription = userService.user.subscribe(x => setUser(x));
        return () => subscription.unsubscribe();
    }, []);

    // Solo muestra la barra de navegación cuando el usuario está logueado
    if (!user) return null;

    return (












        
        <nav >
            <div className={styles.nav}>
                <NavLink href="/" exact className={styles.navLinks}>Inicio</NavLink>
                <NavLink href="/activity" className={styles.navLinks} exact >Actividad</NavLink>
                <NavLink href="/activity/activityRegister" exact className={styles.navLinks}>Registro de Actividad</NavLink>
                <NavLink href="/users" className={styles.navLinks}>Usuarios</NavLink>

                <a onClick={userService.logout} className={styles.navLinks} exact >Salir</a>
            </div>
        </nav>
    );
}
