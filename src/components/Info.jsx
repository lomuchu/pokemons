import React, { useState, useEffect } from 'react'
import who from '../assets/img/who.jpg'

const Info = props => {

        const [pokemon, setPokemon] = useState({})
        const [url, setUrl] = useState(null)

    useEffect(() => {
        fetchData()
    }, [props])

    const fetchData = async () => {
        const number = props.number;
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`)
        const info = await data.json()

        const image = info.sprites.other['official-artwork'].front_default
 
        setPokemon(info)
        setUrl(image)
    }

    return(
       
        <div className="card" style={{width: "18rem;"}}>
       <img className="card-img-top" src={url ? url : who} ></img>      
        <div className="card-body">
        <h5 class="card-title">{pokemon.name}</h5>
        </div>
      </div>
       
    )
}

Info.prototype = {

}

export default Info