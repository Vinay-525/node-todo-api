const {MongoClient,ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err){
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b00675ee4a02c1d18e6624b')
  // },{
  //   $set:{
  //     completed : true
  //   }
  // },{
  //   returnOriginal : false
  // }).then((result) => {
  //   console.log(result);
  // })

  //Coding Challenge
  db.collection('Users').findOneAndUpdate({
    name:'Sankalp'
  },{
    $set:{
      name:'Vinay Bansal'
    },
    $inc:{
      age: 1
    }
  },{
    returnOriginal : false
  }).then((result) => {
    console.log(result);
  })

  db.close();
})
