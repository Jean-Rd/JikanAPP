import React, { useState } from 'react'

export const AddName = ({ currentName, currentLimite }) => {

    const [ current, setCurrent ] = useState('');

    const [ limite, setLimite ] = useState("");
    

    const changeValue = (e) => {
        setCurrent(e.target.value);
    }

    const changeLimit = (e) => {
        setLimite(e.target.value);
    }

    const submitForm = (e) => {
        e.preventDefault();

        const valNumber = parseInt(limite);

        const verifyNumber = valNumber && valNumber > 0;

        if ( current.trim().length > 2 ) {

            if(limite.trim().length === 0) {
                currentName([current]); 
            }

            if ( verifyNumber ) { 
                currentName([current]);
                currentLimite(valNumber);
            }
        }
    }

    return (
        <form onSubmit={ submitForm } className="d-flex justify-evenly ">

            <input className="form-control me-2" name="NombreAnime" type="search" placeholder="Nombre del anime" value={ current } onChange={ changeValue }></input>
            <input className="form-control me-2" name="LimiteAnime" type="text" placeholder="Limit - Default All" value= { limite } onChange={ changeLimit }></input>
            
            <input className="btn btn-outline-success" type="submit" onSubmit= { submitForm }></input>
        </form>
    )
}
