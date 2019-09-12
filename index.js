const express  = require('express')
const app = express()

app.get('/', (req, res, next) => {
    console.log('func1')
    res.status(200).send('<h1>back</h1>')
})

app.get('/:id', (req, res, next) => {
    console.log('func' + req.param.id)
    res.status(200).send('<h1>back: ' + req.params.id + '</h1>')
})

//  requisicoes post
// {
// 	"RFCli": "575820301",
// 	"dependentes": [
// 		{ "id": 1, "nome": "nandao"},
// 		{ "id": 2, "nome": "Franciele"}
// 	]
// }
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.post('/:id', (req, res, next) => {
    console.log('func' + req.param.id)
    res.status(200).send('<h1>back: ' + req.params.id 
        + req.body.RFCli 
        + JSON.stringify(req.body) 
        +'</h1>')
})
// fim requisicoes post

app.listen(3000, () => {
    console.log('b executando')
})