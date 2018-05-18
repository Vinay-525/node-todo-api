// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb')

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected To the MongoDb server');

  //   db.collection('Todos').insertOne({
  //   text : "Something to do",
  //   completed : false
  // },(err,result) => {
  //   if(err){
  //     return console.log('Error : ',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  // db.collection('Users').insertOne({
  //   name: "Vinay Bansal",
  //   age : 22,
  //   location : "New Delhi 110019"
  // },(err,resultt) => {
  //   if(err){
  //     return console.log('Unable to add todo',err);
  //   }
  //   console.log(resultt.ops[0]._id.getTimestamp());
  // })
  db.close();
})
