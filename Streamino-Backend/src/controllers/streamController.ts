import { Request, Response } from "express";
import User, { IUser } from "../models/User";
import Stream from "../models/Stream";



export const createStream = async(req:Request , res:Response) => {
	const {title , category , userId} = req.body;
	
	
	try{
		const user = await User.findById(userId) as IUser;
		if(!user) return res.status(404).json("User Not Found");
		
		
		const newStream = await Stream.create({
			userId:user._id,
			title,
			category,
			streamKey: user.streamKey,
		});
		
		
		res.status(201).json({message : "Stream Created" , stream:newStream});
		
		
		
	} catch(err){
		res.status(500).json({message:"Failed to create Stream"});
	}
}