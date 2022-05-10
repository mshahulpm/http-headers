const express = require('express');
const cors = require('cors');

const app = express();
// app.use(cors());
// cors 
app.use(function (req, res, next) {
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get('/', (req, res) => {
    // console.log(req.headers);
    res.json({
        data: "welcome to the api"
    })
})


app.get('/open', (req, res) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.json({
        data: "welcome to the api ",
        status: "success"
    })
})

app.listen(3001, () => {
    console.log('Example api listening on port 3001!');
})