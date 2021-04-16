export const getPokemon = async (url) => {
    const res = await fetch(url)
    return (await res.json())
}

export const getPokemonList = async (page, limit) => {
    const offset = (page - 1) * limit 
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
    const pageData = await (
        await fetch(url).then(res =>res.json()).then(resObj => resObj.results)
    )

    return pageData
    /*limit 20
    >page 1 = offset 0 bien
    >page 2 = offset 20 bien
    >page 3 = offset 40*/
}
