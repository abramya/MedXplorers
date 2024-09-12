const express = require('express');
const mongoose = require('mongoose');
const healthDataRoutes = require('./routes/healthData');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/medxplorers', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Routes
app.use('/api/health', healthDataRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to MedXplorers Backend');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
