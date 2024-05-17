const express = require('express');
const mongoose = require('mongoose');
const barcodeRoutes = require('./routes/barcodeRoutes');
const allergenRoutes = require('./routes/allergenRoutes');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const app = express();
const port = process.env.PORT || 7000;

// Middleware
app.use(express.json());

// REST API routes
app.use('/api/barcode', barcodeRoutes);
app.use('/api/allergen', allergenRoutes);

// GraphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true,
}));

// MongoDB connection
mongoose.connect('mongodb://your-mongo-url', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.listen(port, function() {
    console.log(`Example app listening on port ${port}`)
});
