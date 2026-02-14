import mongoose from "mongoose"

const userSchemma = new mongoose.Schema(
    {
        username : {
            type : String,
            required: true,
            unique: true,
            lowercase:true
        },
        email : {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required : [true,  "password is required"]
        }
    },{timestamps:true}
)

export const User = mongoose.model("User", userSchemma)

// note the  name ypu gave for model in the mongoose.model() in mongodb it gets converted into plural and all the letter are lowercased.for ex: User will be passed as users.

