import React from 'react'

function FirstForm (props){
    const {firstName,lastName,email} = props.estado
    return(
        <>
            <h1 >FirstForm</h1>
            <h1 >tForm</h1>
            <div className="form-group">
                <label htmlFor="firstName">Nombre</label>
                <input type="text" value={firstName} onChange={props.onChange} className="form-control" id="firstName" placeholder="escribe tu nombre"/>
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Apellido</label>
                <input type="text" value={lastName} onChange={props.onChange} className="form-control" id="lastName" placeholder="escribe tu apellido"/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Correo</label>
                <input type="text" value={email} onChange={props.onChange} className="form-control" id="email" placeholder="escribe tu correo"/>
            </div>
            <button type="button" className="btn btn-primary" onClick={props.nextstep} >siguiente</button>
        </>
    )
}
export default FirstForm