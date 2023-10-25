const img = document.querySelector('#img');
const userInfo = document.querySelector('.user-info');

function generateUser() {
    fetch('https://randomuser.me/api')
        .then(res => {
            if (!res.ok) {
                throw new Error('Request Failed');
            }
            return res.json()
        })
        .then(data => {
            data.results.forEach((res) => {
                displayUser(res);
                console.log(res);
                img.src = res.picture.large;
                document.querySelector('#name').textContent = `${res.name.title} ${res.name.first}  ${res.name.last}`;
                document.querySelector('#email').textContent = `${res.email}`;
                document.querySelector('#loc').textContent = `${res.location.city}`;
                document.querySelector('#phone').textContent = `${res.phone}`;
                document.querySelector('#age').textContent = `${res.dob.age}`;
            })
        })
        .catch(err => {
            document.querySelector('.info-div').innerHTML=`<p class="text-xl error">${err}</p>`
        });
}

function displayUser(data) {
    if (data.gender === 'female') {
        document.body.style.backgroundColor = 'blueviolet'
    } else {
        document.body.style.backgroundColor = 'steelblue'
    } 
}

document.querySelector('button').addEventListener('click', generateUser);

generateUser();