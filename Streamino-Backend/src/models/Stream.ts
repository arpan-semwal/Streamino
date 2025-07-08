
import mongoose, { Schema } from "mongoose";
 


const StreamSchema : Schema = new Schema({
	userId:{type:mongoose.Schema.Types.ObjectId , ref:'User', required:true},
	title:{type:String , required:true},
	category:{type:String},
	streamKey:{type:String , required:true},
	isLive:{type:Boolean , default:false},
	createdAt:{type:Date , default:Date.now}
})


export default mongoose.model("Stream" , StreamSchema);