const {MongoClient} = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Users').deleteMany({name : 'Petr'});
  client.close();
});
