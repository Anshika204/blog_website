import { useEffect, useState } from "react";
import API from "../services/api";
import BlogCard from "../components/BlogCard";

function Dashboard() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data } = await API.get("/blogs");
      
      // Sirf logged-in user ke blogs filter karenge
      const token = localStorage.getItem("token");
      if (!token) return;

      const userId = JSON.parse(atob(token.split(".")[1])).id;

      const myBlogs = data.filter(
        (blog) => blog.author._id === userId
      );

      setBlogs(myBlogs);
    };

    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
  await API.delete(`/blogs/${id}`);
  setBlogs(blogs.filter((blog) => blog._id !== id));
};

  return (
    <div style={{padding: '50px'}}>
      <h2>My Blogs</h2>
      {blogs.map((blog) => (
      <div style={{paddingHorizontal: '50px', paddingTop: '50px'}}>
         <BlogCard
    key={blog._id}
    blog={blog}
    showActions={true}
    onDelete={handleDelete}
  />
      </div>
))}
    </div>
  );
}

export default Dashboard;