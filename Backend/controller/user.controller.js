import { name } from "ejs";
import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
//signup
export const signup =async (req,res) => {
    try {
        const {name,email,password}=req.body;
        const user=await User.findOne({email})
        if(user){
            return res.status(400).json({message:"User Already Exists"})
        }
        const hashPassword=await bcryptjs.hash(password,10)//secure password
        const createdUser=new User({
            name: name,
            email: email,
            password: hashPassword
        })
        await createdUser.save()
        res.status(201).json({
            message:"User created successfully",user:{
                _id: createdUser._id,
                name: createdUser.name,
                email: createdUser.email
            }
        })
    } catch (error) {
        console.log("Error: " + error.message)
        res.status(500).json({message:"Internet server error"})
    }
};
//login
export const login =async (req,res) => {//async,await login fn holds until the comparision is done //promises concept
    try {
        const {email,password} = req.body;
        const user=await User.findOne({email});
        const isMatch=await bcryptjs.compare(password,user.password)
        if(!user || !isMatch){
            return res.status(400).json({message:"Invalid username or password"});
        }
        else{
            res.status(200).json({message:"Login Successfull",user:{
                _id:user._id,
                name:user.name,
                email:user.email
            }})
        }
    } catch (error) {
        console.log("Error: " + error.message)
        res.status(500).json({message:"Internal server error"})
    }
}
