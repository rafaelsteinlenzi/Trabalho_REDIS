
(async () => {

    const redis = require('promise-redis')();
    const client = redis.createClient({
    	host: '192.168.48.135',
    	port: 6379
    });

    module.exports = client;

    //SET
    // const result = await client.set('chave2', 'valor', 'EX', 20); //chave, valor, tipoExpiracao, tempoDeExpiracao)
    // console.log(result);

    // const getResult = client.get('chave');
    // console.log(getResult);

 })()

