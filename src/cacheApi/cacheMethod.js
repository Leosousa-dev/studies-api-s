
const cache = new Map();

const searchWithCache = async (url) => {
    if(cache.has(id)) return cache.get(id)

    // search in api
    const response = await fetch(url)
    
    // get data of api and transform in json
    const data = await response.json()

    // update cache
    cache.set(id, data)
    return data;

};

export default searchWithCache;