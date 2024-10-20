const express = require('express');
const app = express();
const User = require('./models/User');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
