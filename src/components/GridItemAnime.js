import React from 'react'

export const GridItemAnime = ({ url, image, title, synopsis, episodes, score }) => {
    return (
        <div className="card text-dark bg-light m-4">
            <img className="card-img-top" src={ image } alt={ title }></img>
            <div className="card-body">
                <h4 className="card-title text-success">{ title }</h4>
                <p className="card-text">{ synopsis }</p>
                <ul className="list-group list-group-flush ">
                    <li className="m-1 rounded-2 list-group-item bg-light text-success">Episodios: <span className="text-muted">{ episodes }</span></li>
                    <li className="m-1 rounded-2 list-group-item bg-light text-success">Score: <span className="text-muted">{ score }</span></li>
                </ul>

            </div>
            
            <div className="card-body text-end">
                <a href={ url } target="_blank" rel="noreferrer"><button className="btn btn-success">Más information</button></a>
            </div>
        </div>

    )
}
