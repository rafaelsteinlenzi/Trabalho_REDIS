const express = require('express');
const router = express.Router();
const publishersService = require('../../service/publisher/publisherService')

// vai retornar todos os livros inseridos no banco de dados
router.get('/publishers', async function(req, res){
    const publishers = await publishersService.getPublishers();
    res.json(publishers);
});

// vai retornar todos o livro por di passado na URL
router.get('/publisher/:id', async function(req, res) {
  const publisher = await publishersService.getPublisher(req.params.id);
  res.json(publisher);
});

router.delete('/publisher/:id', async function(req, res){ 
    await publishersService.deletePublisher(req.params.id);
    return res.send('Registro Excluído com sucesso!');
   // return res.json([{message: 'registro excluído com sucesso'}]);
}); 

router.put('/publisher', async function(req, res){
    const publisher = req.body;
    console.log(publisher);
    const newPublisher = await publishersService.savePublisher(publisher);
    res.json(newPublisher);
});

module.exports = router;