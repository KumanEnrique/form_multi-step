import React from 'react'

function SecondForm (props){
    const {occupation,city,phone} = props.estado
    return(
        <div className="container">
            <h1 >SecondForm</h1>
            <div className="form-group">
                <label htmlFor="occupation">Ocupación</label>
                <input type="text" value={occupation} onChange={props.onChange} className="form-control" id="occupation" placeholder="escribe tu ocupación"/>
            </div>
            <div className="form-group">
                <label htmlFor="city">Ciudad</label>
                <input type="text" value={city} onChange={props.onChange} className="form-control" id="city" placeholder="escribe tu ciudad"/>
            </div>
            <div className="form-group">
                <label htmlFor="phone">Telefono</label>
                <input type="text" value={phone} onChange={props.onChange} className="form-control" id="phone" placeholder="escribe tu telefono"/>
            </div>
            <button type="button" className="btn btn-secondary" onClick={props.prevstep} >Anterior</button>
            <button type="button" className="btn btn-primary" onClick={props.nextstep} >Siguiente</button>
        </div>
    )
}
export default SecondForm