import mongoose from "mongoose";
const PostSchema=new mongoose.Schema({
  title:{
    type:String,
    required: true,
  },
  content:{
    type:String,
    required: true,
  },
  url:{
    type:String,
    required:true,
  },
});
export const PostModule1=mongoose.model("Post",PostSchema,"posts");