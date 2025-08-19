// src/controllers/streamController.ts
import { Request, Response } from "express";
import User, { IUser } from "../models/User";
import Stream from "../models/Stream";

export const createStream = async (req: Request, res: Response) => {
  const { title, category, userId } = req.body;

  try {
    const user = await User.findById(userId) as IUser;
    if (!user) return res.status(404).json({ message: "User not found" });

    const newStream = await Stream.create({
      userId: user._id,
      title,
      category,
      streamKey: user.streamKey, // ✅ use existing key
      isLive:false
    });

    res.status(201).json({ message: "Stream created", stream: newStream });
  } catch (err) {
    res.status(500).json({ message: "Failed to create stream", error: err });
  }
};

export const getLiveStreams = async(req : Request , res:Response) => {
  try{
    const livestreams = await Stream.find({isLive:true}).populate('userId' , 'username');
    res.status(200).json(livestreams);
  } catch(err){
    res.status(500).json({message : "Error fetching live streams"});
  }
};
