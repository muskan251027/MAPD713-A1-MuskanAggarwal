let SERVER_NAME = 'productsApi'
let PORT = 3000;
let HOST = '127.0.0.1';

// Include errors and restify
let restifyErrors = require('restify-errors');
let restify = require('restify')

// Get an engine for products
, products = require('save')('products')

// Create restify server
, server = restify.createServer({name: SERVER_NAME})

server.listen(PORT, HOST, function() {
    console.log('Server %s is listening at %s', server.name, server.url)
    console.log('You will be able to use this server to perform STORE, RETRIEVE and DELETE operations on the resource - PRODUCTS') 
    console.log('************ API ENDPOINTS ******************')
    console.log('To get products list or to create a new product :')
    console.log('/products')
    console.log('To get a product or perform update or delete on products by their id : ')
    console.log('/products/:id')
})

// Using the server
server.use(restify.plugins.fullResponse());
server.use(restify.plugins.bodyParser());

