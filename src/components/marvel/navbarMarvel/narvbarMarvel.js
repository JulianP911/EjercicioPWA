import React from "react";

// Funcion NavbarMarvel
function NavbarMarvel () {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" style={{color: "#db2f2f"}} href=".">
                <img src="https://img.icons8.com/doodle/48/000000/iron-man.png" alt="Logo Marvel" width="30" height="24" class="d-inline-block align-text-top"/>
                Marvel Characters
                </a>
            </div>
        </nav>
    )
}

// Exportar funcion NavbarMarvel para ser visible en otros archivos
export default NavbarMarvel;