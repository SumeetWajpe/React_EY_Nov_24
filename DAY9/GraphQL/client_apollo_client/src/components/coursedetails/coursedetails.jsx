import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Rating from "../rating/rating";
import { useQuery } from "@apollo/client";
import { GETCOURSEBYID } from "../../graphql/querries";

export default function CourseDetails() {
  const { id = 1 } = useParams();
  const navigate = useNavigate();
  let { data } = useQuery(GETCOURSEBYID, { variables: { courseId: id } });

  return (
    <div className="mt-1">
      <main>
        <div className="row">
          <div className="col-md-9">
            <img
              src={data?.course?.imageUrl}
              className="card-img-top"
              alt={data?.course?.title}
              height="100%"
              width="100%"
            />
          </div>
          <div className="col-md-3 border-start">
            <h2>{data?.course?.title}</h2>
            <Rating noofstars={data?.course?.rating} />
            <button className="btn btn-primary">
              {data?.course?.likes}
              <i className="fa-solid fa-thumbs-up"></i>
            </button>
            <p className="card-text">₹.{data?.course?.price}</p>
            <p className="card-text">Mr. {data?.course.trainer.name}</p>

            <div>{data?.course?.description}</div>

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
