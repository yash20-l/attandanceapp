// getting-started.js
const mongoose = require('mongoose');

ConnectToDB().catch(err => console.log(err));


async function ConnectToDB() {
  await mongoose.connect('mongodb://localhost:27017/davatt').then(() => {
  })
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

module.exports = ConnectToDB