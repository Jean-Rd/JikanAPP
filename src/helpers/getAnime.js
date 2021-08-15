
export const getAnime = async(nameAnime, limite) => {

    const url = `https://api.jikan.moe/v3/search/anime?q=${ encodeURI( nameAnime ) }&limit=${ limite }`;


    const response = await fetch(url);

    const { results } = await response.json();

    const requestVal = results.map( ({ mal_id, url, image_url, title, synopsis, episodes, score }) => {
        return {
            id: mal_id,
            url: url,
            image: image_url,
            title: title,
            synopsis: synopsis,
            episodes: episodes,
            score: score
        }
    })
    

    return requestVal
}
