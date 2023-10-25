async function getAllData(endPoint) {
    const res1 = await fetch('./movies.json');
    const movies = await res1.json();

    const res2 = await fetch('./actors.json');
    const actors = await res2.json();

    const res3 = await fetch('./directors.json');
    const directors = await res3.json();

    console.log(movies, actors, directors);
}

//getAllData();

async function getAllDataPromiseAll() {
    const [moviesRes,actorsRes,directorsRes] = await Promise.all([
        fetch('./movies.json'),
        fetch('./actors.json'),
        fetch('./directors.json')
    ]);

    const movies = await moviesRes.json();
    const actors = await actorsRes.json();
    const directors = await directorsRes.json();
    
    console.log(movies, actors, directors);
}

getAllDataPromiseAll();