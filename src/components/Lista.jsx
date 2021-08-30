import React, { useState, useEffect } from 'react'
import { Link} from "react-router-dom";
import Pager from './Pager';

const Lista = props => {

    const [lista, setLista] = useState([])
    const [mostrar, setMostar] = useState([])
    const [currPage, setCurrPage] = React.useState(2);

    const [total, setTotal] = useState(0)
    const [items] = useState(10)

    useEffect(() => {
       obtenerPokemons()
    }, [])


    useEffect(() => {
        afterPageClicked(1)
     }, [total])
 

    const obtenerPokemons = async () => {
        const data = await fetch('https://pokeapi.co/api/v2/type/13')
        const pokemons = await data.json()
        setLista(pokemons.pokemon)
        setTotal(Math.ceil(pokemons.pokemon.length / 10))
       
    }

    const afterPageClicked = (page_number) => {
        setCurrPage(page_number);
        const array = []
        const init = (Number(page_number) - 1) * Number(items);
        let fin = init + items;

        if(lista.length > 0) {
            if(fin > lista.length) {fin = lista.length}
            for(var i = init ; i < fin; i++ ) {
                    array.push(lista[i]);
            }
        }

        console.log(init);
        console.log(fin);
        console.log(lista.length);
            setMostar(array)
    }

    const getNumber = (url) => {


          const number = url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/','')


          return number
    }

    return(
          <Pager totPages={total}
          currentPage={currPage}
          pageClicked={(ele) => {
            afterPageClicked(ele);
          }}>
          <ul className="list-group">
              {
                  mostrar.map((item, index) => 
                        <li key={index} className="list-group-item">
                           <Link to={`/${getNumber(item.pokemon.url)}`}> {item.pokemon.name} </Link>
                        </li>
                  )
              }
          </ul>
          </Pager>
   
    )
}

Lista.prototype = {

}

export default Lista