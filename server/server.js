const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const cityRoutes = require('./api-routes/city');

const path = require('path');
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cityRoutes);

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}...`); //just for dev purpose
});
