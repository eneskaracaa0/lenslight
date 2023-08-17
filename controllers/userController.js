import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const createUser=async (req,res)=>{
    try {
       const user=await User.create(req.body);
       res.status(201).json({
        succeded:true,
        user,
       });
        
    } catch (error) {
        res.status(500).json({
            succeded:false,
            error,
        });
        
    }
}

const getUsers=async (req,res)=>{
    try {
        const user=await User.find({});
    res.status(201).json({
        succeded:true,
        user,
    })
        
    } catch (error) {
        res.status(500).json({
            succede:false,
            error,
        })
        
    }
}

const getUser=async (req,res)=>{
    try {
        const user=await User.findById({_id:req.params.id});
        res.status(200).json({
            succeded:true,
            user,
        })
        
    } catch (error) {
        res.status(500).json({
            succeded:false,
          
            error,
        })
        
    }
}



const loginUser=async (req,res)=>{
    try {
        const {username,password}=req.body;
        
        const user=await User.findOne({username})

        let same=false
        
        if(user){
            same=await bcrypt.compare(password, user.password);
            
        }else{
            return res.status(401).json({
                succeded:false,
                error:"There is no such user",
            });
        }

        if(same){
            const token=createToken(user._id);
            res.cookie("jsonwebtoken",token,{
                 httpOnly:true,
            maxAge:1000*60*60*24,
            }
            );


            res.redirect("/users/dashboard");
        }else{
            res.status(401).json({
                succede:false,
                error:'Password are not matched',
            });

        }
       
        
    } catch (error) {
        res.status(500).json({
            succeded:false,
            error,
        });
        
    }
}


const createToken=(userId)=>{
    return jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'1d', //end time
    });

}


const getDashboardPage=(req,res)=>{
    res.render('dasboard');
}

export { createUser,getUsers,getUser,loginUser,getDashboardPage};