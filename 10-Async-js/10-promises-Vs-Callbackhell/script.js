function getData(endPoint) {
    return new Promise((resolve, reject) => {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', endPoint);

    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                resolve(JSON.parse(this.responseText));
            } else {
                reject('Something went wrong');
            }
        }
    }

    setTimeout(() => {
        xhr.send();
    }, Math.floor(Math.random() * 3000)+1000)
    })
};


getData('./actors.json')
    .then((actors) => {
        console.log('actors', actors);
        return getData('./movies.json');
    })
    .then((movies) => {
        console.log('movies', movies);
        return getData('./directors.json')
    })
    .then((directors) => {
        console.log('directors', directors)
    })
    .catch(err=>console.error(err))


