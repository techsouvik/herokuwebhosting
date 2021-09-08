const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://souvik:mongo%402002@foodart.skzfr.mongodb.net/test?authSource=admin&replicaSet=atlas-9c4ltn-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',{
     useNewUrlParser:true,
     useUnifiedTopology:true
}).then(()=>{
     console.log("Connected")
}).catch((err)=>{
     console.log(err)
})
require('./NewUser.model')
require('./item.model')