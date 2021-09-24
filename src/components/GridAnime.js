import React from 'react'

import { useFetch } from '../hooks/useFetch'

import { GridItemAnime } from './GridItemAnime' 

export const GridAnime = ( { anime, limite } ) => {

    const { loading, data:request } = useFetch(anime, limite);

    return <div className="card-body">
        <div className='card-title d-flex align-items-center justify-content-center'>
            <h2 className="text-uppercase">{ anime }</h2>
        </div>
        <div>
            {
                loading && <div className=" d-flex align-items-center justify-content-center"><p className="text-muted">Cargando...</p></div>
            }   

            <div className="w-100 d-flex align-items-center justify-content-center flex-wrap">
                {
                    //gridItem
                    request.map( (objVal) => {
                        return <GridItemAnime key={ objVal.id } { ...objVal } />
                    } )
                }
            </div>
        </div>
    </div>
}
