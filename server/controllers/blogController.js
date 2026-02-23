const Blog = require("../models/Blog");

// CREATE BLOG
exports.createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;

    const blog = await Blog.create({
      title,
      content,
      author: req.user.id
    });

    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ALL BLOGS
exports.getAllBlogs = async (req, res) => {
  const blogs = await Blog.find()
    .populate("author", "name")
    .sort({ createdAt: -1 });

  res.json(blogs);
};

// GET SINGLE BLOG
exports.getBlogById = async (req, res) => {
  const blog = await Blog.findById(req.params.id)
    .populate("author", "name");

  if (!blog) {
    return res.status(404).json({ message: "Blog not found" });
  }

  res.json(blog);
};

// UPDATE BLOG
exports.updateBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    return res.status(404).json({ message: "Blog not found" });
  }

  if (blog.author.toString() !== req.user.id) {
    return res.status(403).json({ message: "Not authorized" });
  }

  blog.title = req.body.title || blog.title;
  blog.content = req.body.content || blog.content;

  await blog.save();

  res.json(blog);
};

// DELETE BLOG
exports.deleteBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    return res.status(404).json({ message: "Blog not found" });
  }

  if (blog.author.toString() !== req.user.id) {
    return res.status(403).json({ message: "Not authorized" });
  }

  await blog.deleteOne();

  res.json({ message: "Blog deleted" });
};