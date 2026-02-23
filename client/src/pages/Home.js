import { useEffect, useState } from "react";
import API from "../services/api";
import BlogCard from "../components/BlogCard";

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data } = await API.get("/blogs");
      setBlogs(data);
    };
    fetchBlogs();
  }, []);

  return (
   <div className="container">
  <h2 style={{ marginBottom: "30px" }}>Latest Blogs</h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "25px"
    }}
  >
    {blogs.map((blog) => (
      <BlogCard key={blog._id} blog={blog} />
    ))}
  </div>
</div>
  );
}

export default Home;