const getUsers = async () => {
    try {
        // const res = await fetch('https://jsonplaceholder.typicode.com/users');

        const res = await fetch('https://httpstat.us/500');
        if (!res.ok) {
            throw new Error('Request failed');
        }
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

getUsers();

const getPosts = async () => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    const res = await fetch('https://httpstat.us/500');

    if (!res.ok) {
        throw new Error('Request failed');
    }
    const data = await res.json();
    console.log(data);
    }

getPosts().catch(err=>console.log(err));