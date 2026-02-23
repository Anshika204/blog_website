import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

function SingleBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const { data } = await API.get(`/blogs/${id}`);
      setBlog(data);
    };

    fetchBlog();
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h2>{blog.title}</h2>
      <p style={{ marginTop: "20px", lineHeight: "1.7" }}>
        {blog.content}
      </p>
      <p style={{ marginTop: "20px", opacity: 0.7 }}>
        ✍️ {blog.author?.name}
      </p>
    </div>
  );
}

export default SingleBlog;