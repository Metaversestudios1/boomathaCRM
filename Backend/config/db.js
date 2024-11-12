const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const connectDB = async () => {
  // Check if MONGODB_URI is set in environment variables
  const mongoURI = process.env.MONGODB_URI;
  if (!mongoURI) {
    console.error('MongoDB URI is not defined in the environment variables');
    process.exit(1); // Exit the application if URI is missing
  }

  try {
    // Attempt to connect to MongoDB
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    // Exit process with failure if there is an error connecting
    process.exit(1);
  }
};

module.exports = connectDB;
