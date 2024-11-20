import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Posts() {
  const [posts, setPosts] = useState([]);

  //   useEffect(() => {
  //     let thePromise = axios.get("https://jsonplaceholder.typicode.com/posts");
  //     thePromise.then(res => setPosts(res.data));
  //   }, []);

  useEffect(() => {
    (async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
    })();
  }, []);

  return (
    <div>
      <header>
        <h2>All Posts</h2>
      </header>
      <ul>
        {posts.map(p => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}
