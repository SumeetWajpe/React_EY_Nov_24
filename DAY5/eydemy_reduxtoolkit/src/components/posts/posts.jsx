import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, setAllPosts } from "../../redux/reducers/posts.reducer";
export default function Posts() {
  const posts = useSelector(store => store.posts); // []
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (posts.error)
    return <h2 className="text-danger"> Something went wrong !</h2>;

  return (
    <div>
      <header>
        <h2>All Posts</h2>
      </header>

      {posts.loading == false ? (
        <ul className="list-group">
          {posts.posts.map(p => (
            <li key={p.id} className="list-group-item">
              <Link to={`/postdetails/${p.id}`}>{p.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
