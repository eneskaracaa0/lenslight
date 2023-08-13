import mongoose from 'mongoose';
import bcrypt from 'bcrypt';


const {Schema}=mongoose;

const userSchema=new Schema({

    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },

},
{
    timestamps:true
});

userSchema.pre("save",function(next){ //userSchema'da kayıt yapmadan önce..
    const user=this
    bcrypt.hash(user.password,10,(err,hash)=>{
        user.password=hash; //hashslenmiş password
        next();
    });

});

const User=mongoose.model('User',userSchema);

export default User;