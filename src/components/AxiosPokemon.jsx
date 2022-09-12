import React, {useState} from "react";
import axios from 'axios';

const PokeDex = () => {
    const[pokemon, setPokemon] = useState([])


    const FetchPokemon = () => {

        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            
            .then(response => {
                //console.log(response.data.results)
                setPokemon(response.data.results)
            })
    }

    return(
        <div>
            <br></br>
            <button onClick={ FetchPokemon }>Fetch Pokemon</button>
            {
                pokemon.map((poke, x) => {
                    
                    return(
                        <div>
                            <ul>
                                <li>{poke.name}</li>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PokeDex;