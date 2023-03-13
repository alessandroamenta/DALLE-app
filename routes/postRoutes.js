import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

import Post from "../mongoDB/models/post.js";

dotenv.config();
const router = express.Router();

cloudinary.config({
  cloud_name: "dvdhf2oc5",
  api_key: "546796794355383",
  api_secret: "ez1cN1eJYU7BZ-wuJjQ-7IoCwcw",
});

//GET ALL POSTS
router.route("/").get(async (req, res) => {
    try {
        const posts = await Post.find({})
        res.status(200).json({ success: true, data: posts })
        
    } catch (error) {
        res.status(500).json({ success: false,  message: error })
    }
});

//CREATE A POST
router.route("/").post(async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo);

    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
    });

    res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    res.status(500).json({ success: false, message: error })
  }
});

export default router;
