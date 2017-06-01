const Mongo       = require('mongodb')
const MongoClient = Mongo.MongoClient
const ObjectID    = Mongo.ObjectID

let Beaver
MongoClient.connect('mongodb://127.0.0.1/test', (err, database) => {
    if (err) return console.log(err)
    Beaver = database.collection('belgianBeavers')

})


module.exports = {
    all: function(data, cb) {
        Beaver.find().toArray((err, result) =>{
            if (err) return console.log(err)
            cb(result)
        })
    },

    finOne: function(data, cb) {
        Beaver.findOne({_id: ObjectID(data.id)}, (err, result) => {
            if (err) return console.log(err);
            cb(result)
        })
    },

    create: function(data, cb) {
        return Beaver.save(data, (err, result) =>{
            if (err) return console.log(err)
            cb(result)
        })
    },

    update: function(data, cb) {
        Beaver.findOneAndUpdate(
            {_id: ObjectID(data.id)},
            {$set:{
                fullName: data.fullName,
                email: data.email,
                address: data.address
            }},
            (err, result) => {
                if (err) return res.send(err)
                cb(result)
            }
        )
    },

    delete: function(data, cb) {
        Beaver.findOneAndDelete(
          {_id: ObjectID(data.id)},
          (err, result) => {
            if (err) return res.send(500, err)
              cb(result)
          }
        )
    },

    find: function(data, cb){
        if (data.id){
            this.finOne(data, cb)
        }
        else {
            this.all(data, cb)
        }
    }
}
