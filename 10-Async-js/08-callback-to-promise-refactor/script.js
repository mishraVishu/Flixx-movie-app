// document.querySelector('button').addEventListener('click', (e) => {
//     e.target.classList.toggle('danger');
// })

const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' },
    { title: 'Post Three', body: 'This is post three' },
];

//passing own cb(callback) function 
function craetePost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        },2000)
    })
}


//getPost function
function getPost() {
    setTimeout(() => {
        posts.forEach((post) => {
            let postDiv = document.getElementById('posts');
            const div = document.createElement('div');
            div.innerHTML = `<strong>${post.title}</strong> -${post.body}`;
            postDiv.appendChild(div);
        })
    },1000)
}

craetePost({ title: 'Post four', body: 'This is post four' })
    .then(getPost)




