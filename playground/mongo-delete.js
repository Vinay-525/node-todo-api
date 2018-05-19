const {MongoClient,ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err){
    return console.log('Unable to connect to mongo server');
  }
  console.log('Connected to MongoDB Server');

  //Delete Many
  // db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // })

  //Delete One
  // db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // })

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
  //   console.log(result);
  // })

  //Coding Challenge
  // db.collection('Users').deleteMany({name:'Vinay Bansal'}).then((result) => {
  //   console.log(result);
  // })

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5afae6ec2d9f4225c43b3b52')}).then((result) => {
    console.log(result);
  })

  db.close();
})
