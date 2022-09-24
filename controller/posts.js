import { PostModel } from "../model/Post.js";

export const getPosts = async (req, res) => {
    try {
        const posts = await PostModel.find();
        console.log(posts);
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const createPost = async (req, res) => {
    try {
        const newPost = new PostModel(req.body);
        await newPost.save();
        res.status(200).json(newPost);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const updatePost = async (req, res) => {
    try {
        const { _id } = req.body;
        const updatedPost = await PostModel.findByIdAndUpdate({ _id: _id }, req.body, { new: true });
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};