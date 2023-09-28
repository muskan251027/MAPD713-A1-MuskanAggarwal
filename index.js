let SERVER_NAME = 'productsApi'
let PORT = 3000;
let HOST = '127.0.0.1';

// Define get and post counters
let getRequests = 0;
let postRequests = 0;
let deleteRequests = 0;

// Include errors and restify
let errors = require('restify-errors');
let restify = require('restify')

// Get an engine for products
, productsSave = require('save')('products')

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

// FUNCTIONS TO HANDLE OPERATIONS ON PRODUCTS

// Create a new product
server.post('/products', function (req, res, next) {
    postRequests = postRequests + 1;

    console.log('');
    console.log('');
    console.log('CREATING A NEW PRODUCT !!');
    console.log('Endpoint - http://127.0.0.1:3000/products');
    console.log('POST : params - ' + JSON.stringify(req.params));
    console.log('POST : Sending product payload - ' + JSON.stringify(req.body));
    console.log('Request counter --> GET: ' + getRequests + ', POST: ' + postRequests + ', DELETE: ' + deleteRequests);

    // validation of manadatory fields
    if (req.body.productId === undefined ) {
        // If there are any errors, pass them to next in the correct format
        return next(new errors.BadRequestError('product id must be supplied'))
    }
    if (req.body.name === undefined ) {
        // If there are any errors, pass them to next in the correct format
        return next(new errors.BadRequestError('product name must be supplied'))
    }
    if (req.body.price === undefined ) {
        // If there are any errors, pass them to next in the correct format
        return next(new errors.BadRequestError('product price must be supplied'))
    }
    if (req.body.quantity === undefined ) {
        // If there are any errors, pass them to next in the correct format
        return next(new errors.BadRequestError('product quantity must be supplied'))
    }

    let newProduct = {
            productId: req.body.productId, 
            name: req.body.name,
            price: req.body.price,
            quantity: req.body.quantity
        }

    // Create the product using the persistence engine
    productsSave.create( newProduct, function (error, product) {

        // If there are any errors, pass them to next in the correct format
        if (error) return next(new Error(JSON.stringify(error.errors)))

        // Send the product if no issues
        res.send(201, product)
    })
})

// Get all products in the system
server.get('/products', function (req, res, next) {
    getRequests = getRequests + 1;

    console.log('');
    console.log('');
    console.log('GETTING ALL PRODUCTS !!');
    console.log('Endpoint - http://127.0.0.1:3000/products');
    console.log('GET : params - ' + JSON.stringify(req.params));
    console.log('GET : Receiving products');
    console.log('Request counter --> GET: ' + getRequests + ', POST: ' + postRequests + ', DELETE: ' + deleteRequests);

    // Find every entity within the given collection
    productsSave.find({}, function (error, products) {

        // Return all of the products in the system
        res.send(products)
    })
})

// Get a single product by its product id
server.get('/products/:id', function (req, res, next) {
    getRequests = getRequests + 1;

    console.log('');
    console.log('');
    console.log('GETTING INFO ABOUT PRODUCT (ID: ' + req.params.id + ') !!');
    console.log('Endpoint - http://127.0.0.1:3000/products/' + req.params.id);
    console.log('GET : params - ' + JSON.stringify(req.params));
    console.log('GET : Receiving product');
    console.log('Request counter --> GET: ' + getRequests + ', POST: ' + postRequests + ', DELETE: ' + deleteRequests);
  
    // Find a single product by their id within save
    productsSave.findOne({ _id: req.params.id }, function (error, product) {
  
      // If there are any errors, pass them to next in the correct format
      if (error) return next(new Error(JSON.stringify(error.errors)))
  
      if (product) {
        // Send the product if no issues
        res.send(product)
      } else {
        // Send 404 header if the product doesn't exist
        res.send(404)
      }
    })
})



