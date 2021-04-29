export const getPokemon = async (url) => {
    const pokemon = await (
        await fetch(url)
                .then(res => res.json())
    )
    return pokemon;
}

export const getPokemonList = async (page, limit) => {
    const offset = (page - 1) * limit
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset.toString()}&limit=${limit.toString()}`
    const pageData = await (
        await fetch(url)
                .then(res => res.json())
                .then(res => res.results)
    )
    return pageData
}

export const getTrainers = async () => {
    const trainers = await (
        await fetch('http://localhost:7000')
                .then(res => res.json())
    )
    return trainers;
}