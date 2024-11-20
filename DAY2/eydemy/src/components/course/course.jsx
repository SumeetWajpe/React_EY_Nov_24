import React from "react";
import Rating from "../molecules/rating/rating";

export default function Course(props) {
  return (
    <div className="col-md-3 ">
      <div className="card m-2 shadow rounded-0">
        <img
          src={props.coursedetails.imageUrl}
          className="card-img-top rounded-0"
          alt={props.coursedetails.title}
          width="150px"
          height="150px"
        />
        <div className="card-body">
          <h5 className="card-title">{props.coursedetails.title}</h5>
          <div className="card-text">
            {/* <p>{this.props.coursedetails.rating}</p> */}
            <Rating noofstars={props.coursedetails.rating} />{" "}
          </div>
          <p className="card-text">₹. {props.coursedetails.price}</p>

          <button className="btn btn-outline-primary">
            {props.coursedetails.likes}{" "}
            <i className="fa-solid fa-thumbs-up"></i>
          </button>
          <button className="btn btn-outline-danger mx-1">
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

// export default class Course extends React.Component {
//   state = { currLikes: this.props.coursedetails.likes };
//   IncrementLikes() {
//     console.log("Increment Likes..");
//     // this.props.coursedetails.likes++; // props are read-only
//     // this.state.currLikes++; // state is immutable
//     this.setState({ currLikes: this.state.currLikes + 1 }); // new state
//   }

//   render() {
//     console.log("Render..");
//     return (
//       <div className="col-md-3 ">
//         <div className="card m-2 shadow rounded-0">
//           <img
//             src={this.props.coursedetails.imageUrl}
//             className="card-img-top rounded-0"
//             alt={this.props.coursedetails.title}
//             width="150px"
//             height="150px"
//           />
//           <div className="card-body">
//             <h5 className="card-title">{this.props.coursedetails.title}</h5>
//             <div className="card-text">
//               {/* <p>{this.props.coursedetails.rating}</p> */}
//               <Rating noofstars={this.props.coursedetails.rating} />{" "}
//             </div>
//             <p className="card-text">₹. {this.props.coursedetails.price}</p>

//             <button
//               className="btn btn-outline-primary"
//               onClick={() => this.IncrementLikes()}
//             >
//               {/* {this.props.coursedetails.likes}{" "} */}
//               {this.state.currLikes} <i className="fa-solid fa-thumbs-up"></i>
//             </button>
//             <button
//               className="btn btn-outline-danger mx-1"
//               onClick={() =>
//                 this.props.OnDeleteACourse(this.props.coursedetails.id)
//               }
//             >
//               <i className="fa-solid fa-trash"></i>
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
