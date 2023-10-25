// Fetch API returns a promise which resolves with response Object. The Response object, in turn, does not directly contain the actual JSON response body but is instead a representation of the entire HTTP response. So, to extract the JSON body content from the Response object, we use the json() method, which returns a second promise that resolves with the result of parsing the response body text as JSON.

// fetching from json
fetch("./movies.json")
    .then((res) => res.json())
    .then(data => console.log(data));

// fetching from an API
fetch('https://api.github.com/users/mishravishu/repos')
    .then(res => res.json())
    .then(data=>console.log(data))
