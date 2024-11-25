import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Rating from "../rating/rating";
import { useDispatch, useSelector } from "react-redux";
import { incrementLikes } from "../../redux/reducers/courses.reducer";

export default function CourseDetails() {
  const dispatch = useDispatch();
  const courses = useSelector(store => store.courses);
  const navigate = useNavigate();
  const { id } = useParams();
  const theCourse = courses.find(c => c.id == id);

  return (
    <div className="mt-1">
      <main>
        <div className="row">
          <div className="col-md-9">
            <img
              src={theCourse.imageUrl}
              className="card-img-top"
              alt={theCourse.title}
              height="100%"
              width="100%"
            />
          </div>
          <div className="col-md-3 border-start">
            <h2>{theCourse.title}</h2>
            <Rating noofstars={theCourse.rating} />
            <button
              className="btn btn-primary"
              onClick={() => dispatch(incrementLikes(theCourse.id))}
            >
              {theCourse.likes}
              <i className="fa-solid fa-thumbs-up"></i>
            </button>
            <p className="card-text">₹.{theCourse.price}</p>

            <div>{theCourse.description}</div>

            <button
              className="btn btn-outline-success"
              onClick={() => navigate("/")}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
