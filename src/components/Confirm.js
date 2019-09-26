import React from 'react'

function Confirm (props){
    const {firstName,lastName,email,occupation,city,phone} = props.estado
    return(
        <div className="container" >
            <h1>Confirm</h1>
            <form onSubmit={props.handleSubmit} >
                <div className="form-group row">
                <label className="col-sm-2 col-form-label">Nombre-></label>
                    <div className="col-sm-10">
                        <input type="text" readOnly className="form-control-plaintext" onChange={props.onChange} id="firstName" value={firstName} />
                    </div>
                </div>
                <div className="form-group row">
                <label className="col-sm-2 col-form-label">Apellidos-></label>
                    <div className="col-sm-10">
                        <input type="text" readOnly className="form-control-plaintext" onChange={props.onChange} id="lastName" value={lastName} />
                    </div>
                </div>
                <div className="form-group row">
                <label className="col-sm-2 col-form-label">Email-></label>
                    <div className="col-sm-10">
                        <input type="text" readOnly className="form-control-plaintext" onChange={props.onChange} id="email" value={email} />
                    </div>
                </div>
                <div className="form-group row">
                <label className="col-sm-2 col-form-label">Ocupacion-></label>
                    <div className="col-sm-10">
                        <input type="text" readOnly className="form-control-plaintext" onChange={props.onChange} id="occupation" value={occupation} />
                    </div>
                </div>
                <div className="form-group row">
                <label className="col-sm-2 col-form-label">Ciudad-></label>
                    <div className="col-sm-10">
                        <input type="text" readOnly className="form-control-plaintext" onChange={props.onChange} id="city" value={city} />
                    </div>
                </div>
                <div className="form-group row">
                <label className="col-sm-2 col-form-label">Telefono-></label>
                    <div className="col-sm-10">
                        <input type="text" readOnly className="form-control-plaintext" onChange={props.onChange} id="phone" value={phone} />
                    </div>
                </div>
                <button type="button" className="btn btn-primary" onClick={props.prevstep} >Anterior</button>
                <button type="submit" className="btn btn-success" >Enviar</button>
            </form>
        </div>
    )
}
export default Confirm