//forEach manipulates the original array.and it doesn't return any array.

const socials = ['Twitter', 'LinkedIn', 'facebook', 'Instagram', 'YouTube'];

socials.forEach((social, i, arr) => console.log('social', social, i, arr));

const socialObj = [
    { name: "Twitter", url: 'https://twitter.com' },
    { name: "LinkedIn", url: 'https://linkedIn.com' },
    { name: "Facebook", url: 'https://facebook.com' },
    {name:"Instragram",url:'https://instragram.com'},
]

socialObj.forEach(ele => {
    console.log('obj',ele.name,ele.url)
})