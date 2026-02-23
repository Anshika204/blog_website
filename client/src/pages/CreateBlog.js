// import { useState } from "react";
// import API from "../services/api";

// function CreateBlog() {
//   const [form, setForm] = useState({ title: "", content: "" });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await API.post("/blogs", form);
//     alert("Blog Created");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Create Blog</h2>
//       <input
//         placeholder="Title"
//         onChange={(e) => setForm({ ...form, title: e.target.value })}
//       />
//       <textarea
//         placeholder="Content"
//         onChange={(e) => setForm({ ...form, content: e.target.value })}
//       />
//       <button type="submit">Post</button>
//     </form>
//   );
// }

// export default CreateBlog;



import { useState } from "react";
import API from "../services/api";

function CreateBlog() {
  const [form, setForm] = useState({ title: "", content: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!form.title.trim()) {
      newErrors.title = "Please enter a title";
    }

    if (!form.content.trim()) {
      newErrors.content = "Please write some content";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      await API.post("/blogs", form);
      alert("Blog Created Successfully 🎉");
      setForm({ title: "", content: "" });
      setErrors({});
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            style={{
              ...styles.input,
              border: errors.title ? "2px solid #ff4d4d" : "none"
            }}
            placeholder="Blog Title"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
          />
          {errors.title && (
            <p style={styles.error}>{errors.title}</p>
          )}

          <textarea
            style={{
              ...styles.textarea,
              border: errors.content ? "2px solid #ff4d4d" : "none"
            }}
            placeholder="Write your blog content here..."
            rows="6"
            value={form.content}
            onChange={(e) =>
              setForm({ ...form, content: e.target.value })
            }
          />
          {errors.content && (
            <p style={styles.error}>{errors.content}</p>
          )}

          <button style={styles.button} type="submit">
            Publish Blog
          </button>
        </form>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)"
  },
  card: {
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(18px)",
    padding: "50px 40px",
    width: "100%",
    maxWidth: "550px",
    borderRadius: "20px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
    animation: "fadeIn 0.6s ease-in-out"
  },
  heading: {
    textAlign: "center",
    marginBottom: "30px",
    color: "white",
    fontWeight: "600",
    letterSpacing: "1px"
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  input: {
    padding: "14px",
    marginBottom: "10px",
    borderRadius: "12px",
    border: "none",
    outline: "none",
    fontSize: "15px"
  },
  textarea: {
    padding: "14px",
    marginBottom: "10px",
    borderRadius: "12px",
    border: "none",
    outline: "none",
    fontSize: "15px",
    resize: "none"
  },
  error: {
    color: "#ff4d4d",
    fontSize: "13px",
    marginBottom: "12px"
  },
  button: {
    marginTop: "10px",
    padding: "14px",
    borderRadius: "12px",
    border: "none",
    background: "white",
    color: "#764ba2",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease"
  }
};

export default CreateBlog;