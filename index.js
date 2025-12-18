const express = require('express') //realocar ele no código 
const port = ProcessingInstruction.env.PORT || 3001 //porta 3001 > porta de comunicaçao frequentemente usada como a porta padrao para executar aplicativos criados com a biblioteca de JS React, que é usada para criar interfaces de usuários em aplicativos da web 
const app = express()

app.get('/', (req, res) => {
  console.log('New feature')
}) //criando mais um endpoit

app.get('/feature2', (req, res) => {
  console.log('new feature3')
})

app.listen (port, () => {
  console.log ('start listening ${port}')
} )
