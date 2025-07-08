import { Request, Response } from "express";
import User from "../models/User";
import { generateStreamKey } from "../utils/StreamKey";

export const registerUser = async(req:Request , res:Response) => {
	try{
		const streamKey = generateStreamKey();
		const {fullName , username , email , password} = req.body;
		const user = new User({fullName , username , email , password , streamKey});
		await user.save();
		
		res.status(201).json({message:"User registered successfully"});
		
	} catch(error:any){
		res.status(400).json({error:error.message});
	}
};


export const loginUser = async(req:Request , res:Response) => {
	try{
		const {email , password} = req.body;
		const user = await User.findOne({email});
		
		if(!user || user.password !== password){
			return res.status(401).json({message:"Invalid Credentials"})
		}
		
		res.status(200).json({message:"Login Complete"});
	} 
	
	catch(error){
		res.status(500).json({message:"Server Error" , error});
	}
};