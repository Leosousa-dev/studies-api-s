
const url = "https://jsonplaceholder.typicode.com/posts";


const cache = new Map();


const search = async (id) => {
    if(cache.has(id)) return cache.get(id);

    // search in api
    const res = await fetch(url);
    const data = await res.json();
    
    // update cache
    cache.set(id,data);
    console.log(data)
    return data

};

search()

