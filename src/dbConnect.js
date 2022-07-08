const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://DBUser:DBUser@cluster0.wowocdj.mongodb.net/budget-pal',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;

connection.on('error', (err) => console.log(err));

connection.on('connected', () =>
  console.log('Mongo DB Connection Successful ')
);
