function getData(endPoint) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', endPoint);

        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    resolve(JSON.parse(this.responseText));
                }
                else {
                    reject('Error: Something went wrong');
                }
            }
        }

        setTimeout(() => {
            xhr.send();
        },1000)
    })
}

const moviesPromise = getData('./movies.json');
const actorsPromise = getData('./actors.json');
const directorsPromise = getData('./directors.json');

Promise.all([moviesPromise, directorsPromise, actorsPromise])
    .then((data) => {
        console.log(data);
    })
    .catch(err => console.log(err));