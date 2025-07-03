import { Request, Response } from "express";
import User from "../models/User";

export const registerUser = async(req:Request , res:Response) => {
	try{
		const {fullName , username , email , password} = req.body;
		const user = new User({fullName , username , email , password});
		await user.save();
		
		res.status(201).json({message:"User registered successfully"});
		
	} catch(error:any){
		res.status(400).json({error:error.message});
	}
};