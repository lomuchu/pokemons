import React from 'react'
import Lista from './Lista'
import Info from './Info'
import {useParams} from 'react-router-dom'

const Pokemon = props => {

    const {number} = useParams()

    return(
        <div className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            <Lista />
        </div>
        <div className="col-md-6">
            <Info number={number} />
        </div>
    </div>
    </div>
    )
}

Pokemon.prototype = {

}

export default Pokemon