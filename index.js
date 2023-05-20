const express = require('express');
const PORT = 4000;
const homeRouter = require('./routes/home')
const productRouter = require('./routes/product')
const errorRouter = require('./routes/error')

const app = express();

//setup view engine
app.set('view engine', 'hbs')

//middleware for 
app.use(express.static(__dirname + '/public'))

// Link the routes file
app.use(homeRouter)
app.use("/products", productRouter)
app.use(errorRouter)



app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})
