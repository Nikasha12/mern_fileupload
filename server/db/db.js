const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://nikasha:nikasha123@cluster0.lwpl72a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
.then(() => {
  console.log('MongoDB connected successfully!');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});
