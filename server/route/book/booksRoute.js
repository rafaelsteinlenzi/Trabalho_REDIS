const express = require('express');
const router = express.Router();
const booksService = require('../../service/book/booksService');


// vai retornar todos os livros inseridos no banco de dados
router.get('/books', async function(req, res){
    const books = await booksService.getBooks();
    res.json(books);
});

// vai retornar todos o livro por di passado na URL
router.get('/book/:id', async function(req, res) {
  const book = await booksService.getBook(req.params.id);
  res.json(book);
});

router.delete('/book/:id', async function(req, res){ 
    await booksService.deleteBook(req.params.id);
    return res.send('Registro Excluído com sucesso!');
   // return res.json([{message: 'registro excluído com sucesso'}]);
}); 

router.put('/book', async function(req, res){
    const book = req.body;
    console.log(book);
    const newBook = await booksService.saveBook(book);
    res.json(newBook);
});

router.put('/BookCache', async function(req, res){
    const bookCache =  req.body;
    // console.log(bookCache);
    const newBook = await booksService.saveBookCache(bookCache);
    // console.log(newBook);
    res.json(newBook);
});

router.get('/booktest/:id', async function(req, res) {
    const book = await booksService.getBookCache(req.params.id);
    res.json(JSON.parse(book));
  });


  router.delete('/bookCache/:id', async function(req, res){ 
    await booksService.deleteBookCache(req.params.id);
    return res.send('Registro Excluído com sucesso!');
   // return res.json([{message: 'registro excluído com sucesso'}]);
}); 

router.get('/booksCache', async function(req, res){
    const books = await booksService.getBooksCache();
    res.json(books);
});

module.exports = router;