
const redis = require('../../database/redis');

exports.saveBookCache = async function(book){
    const bookKey = book.id;
    const result = await redis.set(`${bookKey}`, JSON.stringify(book)) //'EX', 10)
   
    console.log(bookKey);
    return result;
}

exports.saveBooksCache = async function(books){
    
    const result = await redis.set('allbooks', JSON.stringify(books)) //'EX', 10)    
    return result;
}

exports.getBookCache = async function(bookID){
    const result = await redis.get(`${bookID}`);
    return result;
}

exports.getBooksCache = async function(){
    
    const result = await redis.get('allbooks');
    console.log(result);
    return result;
}


exports.deleteBookCache = async function (bookID) {
    const result = await redis.del(`${bookID}`);
    return result;
}