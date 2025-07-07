const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/studyio', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connecté.');
  } catch (err) {
    console.error('Erreur connexion MongoDB:', err);
    process.exit(1); 
  }
};

module.exports = connectDB;
