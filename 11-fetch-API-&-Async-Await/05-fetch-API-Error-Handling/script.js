// fetch('http://httpstat.us/200')
//     .then((res) => {
//         return res;
//     })
//     .then(() => {
//     console.log('success')
// })

// fetch('http://httpstat.us/404')
//     .then((res) => {
//         return res;
//     })
//     .then(() => {
//         console.log('success')
//     })
//     .catch(err => {
//         console.log(err);
//     });
    //fetch API doesn't work like this though axios a third party library do check for catch if it gets any error.

//This way we can throw error using fetch
// fetch('http://httpstat.us/404')
//     .then((res) => {
//         console.log(res.status, res.ok)
//         if (!res.ok) {
//             throw new Error('Request failed');
//         }
//         return res;
//     })
//     .then(() => {
//         console.log('success')
//     })
//     .catch(err => {
//         console.log(err);
//     });


fetch('http://httpstat.us/200')
    .then((res) => {
        console.log(res.status, res.ok)
        if (res.status === 404) {
            throw new Error('Not found');
        } else if (res.status === 500) {
            throw new Error('Server Error');
        }else if (res.status !== 200) {
            throw new Error('Request failed');
        }
        return res;
    })
    .then(() => {
        console.log('success')
    })
    .catch(err => {
        console.log(err);
    });

// catch runs on a network error
// fetch('http://hello123.net')
//     .then((res) => {
//         return res;
//     })
//     .then(() => {
//     console.log('success')
//     })
//     .catch(err => {
//                 console.log(err);
//     });