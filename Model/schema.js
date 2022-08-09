const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/Ekart_search', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('DB connection successful!'));

const Schema = new mongoose.Schema({
    displayName:{
        type:String,
        Required:true,
    },
    shortDesc:{
        type:String,
    },
    description:{
        type:String,
    },
    category:{
        type:String,
        Required:true,
    },
    price:{
        type:Number,
        Required:true,
    },
    discount:{
        type:Number,
    },
    deliveryCharge:{
        type:Number,
    }
});

const repo = mongoose.model('repo', Schema);

repo.deleteMany({}, function (err) {
    console.log('collection removed');
});

const repo1 = new repo({
    displayName:'Mobile',
    shortDesc:'Mi 10',
    description:'new sd695 phone with high bench',
    category:'Electronics and dev',
    price:9000,
    discount:900,
    deliveryCharge:90,
})

const repo2 = new repo({
    displayName:'Mobile',
    shortDesc:'Mi 11',
    description:'new sd695 phone with high bench',
    category:'Electronics and dev',
    price:9000,
    discount:900,
    deliveryCharge:90,
})

repo1.save(); repo2.save();
  
module.exports = repo;