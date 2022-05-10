const express = require('express');



const app = express();




app.get('/', (req, res) => {
    res.send('<a href="/api">API</a>');
})

app.get('/api', (req, res) => {
    console.log(req.headers);
    res.send('<a href="/api/users">Users</a>');
})

app.get('/external-resource', (req, res) => {
    res.send(`
    <h1>Fetching external resource</h1>
    <script>
    fetch('http://localhost:3001/')
    .then(response => response.json())
    .then(data => console.log(data));
    fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => console.log(data));
    </script>
    `)
})

app.get('/external-resource-open', (req, res) => {
    res.send(`
    <h1>Fetching external resource</h1>
    <script>
    fetch('http://localhost:3001/open')
    .then(response => response.json())
    .then(data => console.log(data));
    </script>
    `)
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});