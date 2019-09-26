import React from 'react'

function Success (props){
    return(
        <div className="container">
            <h1>Success !!!</h1>
            <button onClick={props.initialStep} className="btn btn-primary">Ir a casa</button>
        </div>
    )
}
export default Success