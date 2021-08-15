import { getAnime } from "../helpers/getAnime"
import { useState, useEffect } from "react"


export const useFetch = (nameAnime, limit) => {

    const [ info, setInfo ] = useState({
        loading: true,
        data: []
    })

 

    useEffect(() => {
        getAnime(nameAnime, limit)
            .then(arrayData => {
                setInfo({
                    loading: false,
                    data: arrayData
                })
            })
    }, [nameAnime, limit]);

    return info;
}
