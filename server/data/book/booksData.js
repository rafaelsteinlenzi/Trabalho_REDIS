// const { func } = require('../../database/database');
const database = require('../../database/database');

exports.getBooks = function () {
    return database.query('select * from livraria.livro');
}

exports.getBook = function(bookID) {
    return database.query('select * from livraria.livro where livraria.livro.id = $1', [bookID]);
}

exports.deleteBook = function (bookID) {
    return database.none('delete from livraria.livro where id = $1', [bookID]);
}


exports.saveBook = function (book) {
    return database.one('insert into livraria.livro (id, nome, codigoeditora, issbn, quantidade, codigoassunto) values ($1, $2, $3,$4,$5,$6) returning *',
    [book.id, book.nome, book.codigoeditora, book.issbn, book.quantidade, book.codigoassunto]);
}

