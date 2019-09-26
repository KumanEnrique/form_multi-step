import React from 'react'

function Person (props){
    const {firstName,lastName,email,occupation,city,phone} = props.elemento
    console.log(props.elemento)
    return(
        <div className="col-12 col-md-6 col-lg-4 mt-2">
            <div className="card" >
                <div className="card-body">
                    <p className="card-text">Nombre: {firstName}</p>
                    <p className="card-text">Apellido: {lastName}</p>
                    <p className="card-text">Correo: {email}</p>
                    <p className="card-text">Ocupación: {occupation}</p>
                    <p className="card-text">Ciudad: {city}</p>
                    <p className="card-text">Telefono: {phone}</p>
                </div>
            </div>
        </div>
    )
}
export default Person