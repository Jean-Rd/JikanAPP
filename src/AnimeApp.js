import React, { useState } from 'react'
import { AddName } from './components/AddName'


import { GridAnime } from './components/GridAnime';

export const AnimeApp = () => {

    const [ name, setName ] = useState([]);

    const [ limite, setLimite ] = useState(-1);

    return <>
        <div className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">Jikan Api</a>
                <AddName currentName={ setName } currentLimite = { setLimite } />
            </div>
        </div>
        <div className="container mt-4 card">
            {
                name.map(currentName => {
                    return <GridAnime key={ currentName } anime={ currentName } limite={ limite } />
                })
            }
        </div>
    </>
}
