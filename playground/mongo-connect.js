const {MongoClient, ObjectID} = require("mongodb");

var obj = new ObjectID();

console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  // const db = client.db('TodoApp');
  // db.collection('Todos').insertOne({
  //   text : 'dsads',
  //   collected : false
  // }, (err, res) => {
  //   if(err) {
  //     return console.log('Unable to write a document', err);
  //   }
  //   console.log(JSON.stringify(res.ops, undefined, 2));
  // });
  //
  // db.collection('Users').insertOne({
  //   name : "Petr",
  //   age : 24,
  //   location : "Prague"
  // }, (err, res) => {
  //   if(err) {
  //     return console.log('Unable to write a document', err);
  //   }
  //   console.log(JSON.stringify(res.ops, undefined, 2));
  // });

  client.close();
});
