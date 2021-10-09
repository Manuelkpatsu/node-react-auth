require('dotenv').config({ path: './.env' });
const express = require('express');
const connectDB = require('./config/db');
const auth = require('./routes/auth');
const private = require('./routes/private');
const errorHandler = require('./middleware/error');

// Connect database
connectDB();

const app = express();

app.use(express.json());

app.use('/api/auth', auth);
app.use('/api/private', private);

// Error handler (should be last piece of middleware)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged error: ${err}`);
    server.close(() => process.exit(1));
});
