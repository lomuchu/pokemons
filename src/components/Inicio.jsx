import React from 'react'
import Lista from './Lista'

const Inicio = props => {
    return(
        <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <Lista />
        </div>
        </div>
        </div>
    )
}

Inicio.prototype = {

}

export default Inicio