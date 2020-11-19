import { useState, useEffect } from 'react';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import './Retrieve.css'

function Retrieve() {

    const [list, setList] = useState([]);

    useEffect( () => {
            async function getData() {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`);        
                setList(response.data.results);
            }
            getData();
            
        }, []);

    return(
        <div className="Retrieve">
            <h1>Select a Pokemon</h1>
            <ul>
                {list.map(p => (
                    <li className="Retrieve-list" key={uuidv4()}>
                        <a href={`/${p.name}`}>{p.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Retrieve;