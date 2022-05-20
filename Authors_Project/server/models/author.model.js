const mongoose= require("mongoose")

const authorSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, "Name is requried"],
        minlength:[2,"Name must be at least 2 characters long"]
    }
})

const Author = mongoose.model("author", authorSchema)

module.exports=  Author

