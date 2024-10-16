const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const cors = require('cors');
const chatRoutes=require('./routes/chatRoutes')


dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Test route
app.get('/', (req, res) => {
  res.send("Running");
});

// Routes
app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

const PORT=5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
