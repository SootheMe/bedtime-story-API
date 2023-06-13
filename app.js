const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('./config/database');
const storyRoutes = require('./routes/stories');
const dotenv = require('dotenv');
dotenv.config();

async function connectToDatabase() {
    try {
      await sequelize.sync();
      console.log('Database Connected');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
connectToDatabase();

app.use(express.json());
app.use('/stories', storyRoutes);
app.use(cors({ credentials: true, origin: '0.0.0.0'}))

app.listen(8080, () => {
    console.log(`Server running on port 8080`)
});

    
