const booksData = require('../../data/book/booksData');
const booksCache = require('../../data/book/booksCache');

exports.getBooks = function() {
    console.time('postgressave');
    console.time('redisget');
    let allbooks = booksCache.getBooksCache();
   

    allbooks.then(function(result) {
    

     if (result == null) {
        const books = booksData.getBooks();
        books.then(function(result) {
        booksCache.saveBooksCache(JSON.stringify(result));
        console.log(result);
    });
        // booksCache.saveBooksCache(JSON.stringify(books));
        console.timeEnd("postgressave");
        
        return books;
        
     } else {
         console.timeEnd("redisget");
         return booksCache.getBooksCache();
     }

}) // "Some User token"
    // let allbooks = booksCache.getBooksCache();
    // console.log(allbooks);
    

   
    
}

exports.getBook = function(bookID) {
    return booksData.getBook(bookID);
}

//exportBooksCache

exports.getBookCache = function(bookID) {
    return booksCache.getBookCache(bookID);
}



exports.deleteBook = function (bookID) {
    return booksData.deleteBook(bookID);
}

exports.deleteBookCache = function (bookID) {
    return booksCache.deleteBookCache(bookID);
}

exports.saveBook = function (book) {
    return booksData.saveBook(book);
}

exports.saveBookCache = function (book) {
    return booksCache.saveBookCache(book);
}

exports.saveBooksCache = function () {
    return booksCache.saveBooksCache();
}

exports.getBooksCache = function () {
    return booksCache.getBooksCache();
}
