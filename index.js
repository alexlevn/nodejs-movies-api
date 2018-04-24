let express = require('express');
let bodyParser = require('body-parser');
let movieRouter = require('./router/movieRouter');

let app = express();
app.use(bodyParser.json({type: 'application/json'}));
// Use bodyParser to convert the pushData to json obj 
// over the obj res.body.

app.get('/test', (req,res)=>{
    return res.json('Hello world');
});

app.get('/', (req, res) => {
    return res.redirect('/movies');
})

app.use('/movies', movieRouter);

app.listen('8000', function () {
    console.log('Server started at 127.0.0.1: 8000');
});