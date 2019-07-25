const express = require('express')
const app = express()
const port = 3000




console.log(__dirname);



app.use(express.static('img'))
app.use(express.static('html'))
app.use(express.urlencoded())



app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


app.post('/login',(req,res)=>{
  const firstname = req.body.firstname;
 res.send('hello ' + firstname);
 res.end()

});
app.use(function (req, res, next) {
  res.status(404).send(" 404 Sorry can't find that!")
})
