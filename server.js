// server.js
const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const logger = require('./middleware/logger');
const auth = require('./middleware/auth');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(logger);
app.use(auth);
app.use(bodyParser.json());

// Routes
app.use('/api/products', productRoutes);

// Error handler
app.use(errorHandler);

// Root route
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
