function getData(endPoint,cb) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', endPoint);

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(JSON.parse(this.responseText));
            cb()
        }
    }

    setTimeout(() => {
        xhr.send();
    }, Math.floor(Math.random() * 3000)+1000)
    
}

// callback hell
getData('./movies.json', () => {
    getData('./directors.json', () => {
        getData('./actors.json', () => {
            console.log('Achieved required order')
        });
    });
});



