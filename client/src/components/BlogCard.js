// import { Link } from "react-router-dom";

// function BlogCard({ blog, showActions, onDelete }) {
//   return (
//     <div style={styles.card}>
//       <h3 style={styles.title}>{blog.title}</h3>

//       <p style={styles.content}>
//         {blog.content.length > 120
//           ? blog.content.substring(0, 120) + "..."
//           : blog.content}
//       </p>

//       <p style={styles.author}>✍️ {blog.author?.name}</p>

//       <div style={styles.buttons}>
//         <Link to={`/blog/${blog._id}`} style={styles.readBtn}>
//           Read More
//         </Link>

//         {showActions && (
//           <>
//             <Link to={`/edit/${blog._id}`} style={styles.editBtn}>
//               Edit
//             </Link>

//             <button
//               onClick={() => onDelete(blog._id)}
//               style={styles.deleteBtn}
//             >
//               Delete
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// const styles = {
//   card: {
//     background: "rgba(255,255,255,0.1)",
//     backdropFilter: "blur(15px)",
//     borderRadius: "20px",
//     padding: "25px",
//     marginBottom: "25px",
//     boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
//     transition: "0.3s ease"
//   },
//   title: {
//     marginBottom: "12px",
//     fontSize: "20px"
//   },
//   content: {
//     marginBottom: "15px",
//     lineHeight: "1.6"
//   },
//   author: {
//     fontSize: "13px",
//     marginBottom: "15px",
//     opacity: 0.8
//   },
//   buttons: {
//     display: "flex",
//     gap: "10px"
//   },
//   readBtn: {
//     padding: "6px 14px",
//     background: "#4f46e5",
//     borderRadius: "20px",
//     color: "white",
//     textDecoration: "none"
//   },
//   editBtn: {
//     padding: "6px 14px",
//     background: "#ffb347",
//     borderRadius: "20px",
//     color: "white",
//     textDecoration: "none"
//   },
//   deleteBtn: {
//     padding: "6px 14px",
//     background: "#ff4d4d",
//     border: "none",
//     borderRadius: "20px",
//     color: "white",
//     cursor: "pointer"
//   }
// };

// export default BlogCard;

import { Link } from "react-router-dom";

function BlogCard({ blog, showActions, onDelete }) {
  return (
    <div style={styles.card}>
      <div>
        <h3 style={styles.title}>{blog.title}</h3>

        <p style={styles.content}>
          {blog.content.length > 120
            ? blog.content.substring(0, 120) + "..."
            : blog.content}
        </p>
      </div>

             <div style={styles.buttons}>
        {
          !showActions && <p style={styles.author}>✍️ {blog.author?.name}</p>
        }
        <Link to={`/blog/${blog._id}`} style={styles.readBtn}>
          Read More
        </Link>

        {showActions && (
          <>
            <Link to={`/edit/${blog._id}`} style={styles.editBtn}>
              Edit
            </Link>

            <Link
              onClick={() => onDelete(blog._id)}
              style={styles.deleteBtn}
            >
              Delete
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(15px)",
    borderRadius: "20px",
    padding: "25px",
    MarginHorizontal: '150px',
    marginBottom: "25px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    transition: "0.3s ease",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "260px",  // 👈 important
    color: "white"
  },
  title: {
    marginBottom: "12px",
    fontSize: "20px"
  },
  content: {
    marginBottom: "15px",
    lineHeight: "1.6"
  },
  author: {
    fontSize: "13px",
    opacity: 0.8,
    marginTop: '5px'
  },
  buttons: {
    display: "flex",
    gap: "10px"
  },
  readBtn: {
    padding: "6px 14px",
    background: "#4f46e5",
    borderRadius: "20px",
    color: "white",
    textDecoration: "none"
  },
  editBtn: {
    padding: "6px 14px",
    background: "#ffb347",
    borderRadius: "20px",
    color: "white",
    textDecoration: "none"
  },
  deleteBtn: {
    padding: "6px 14px",
    background: "#ff4d4d",
    border: "none",
    borderRadius: "20px",
    color: "white",
    cursor: "pointer",
    textDecoration: "none"
  }
};

export default BlogCard;