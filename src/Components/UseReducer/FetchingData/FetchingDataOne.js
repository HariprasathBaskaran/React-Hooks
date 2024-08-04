import axios from "axios";
import React, { useEffect, useState } from "react";

function FetchingDataOne() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })

      .catch((err) => err);
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <ul key={post.id}>
          <li>{post.title}</li>
        </ul>
      ))}
    </div>
  );
}

export default FetchingDataOne;
