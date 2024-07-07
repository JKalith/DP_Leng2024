import React, { useState, useEffect } from 'react';
import { NavLink } from '.';
import { userService } from 'services';

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
            <div className="navbar-nav">
                <NavLink href="/" exact className="nav-item nav-link">Inicio</NavLink>
                <NavLink href="/activity" exact className="nav-item nav-link">Actividad</NavLink>
                <NavLink href="/activity/activityRegister" exact className="nav-item nav-link">Registro de Actividad</NavLink>
                <NavLink href="/users" className="nav-item nav-link">Usuarios</NavLink>
                <button onClick={userService.logout} className="btn btn-link nav-item nav-link">Salir</button>
            </div>
        </nav>
    );
}
