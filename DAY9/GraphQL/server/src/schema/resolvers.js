import { coursesModel } from "../model/courses.js";
import trainersModel from "../model/trainers.js";
import { usersModel } from "../model/user.js";

const resolvers = {
  Query: {
    users: () => {
      return usersModel;
    },
    courses: () => {
      return coursesModel;
    },
    course: (_, { id }) => {
      return coursesModel.find(c => c.id == id);
    },
  },
  Course: {
    trainer: parent => {
      return trainersModel.find(t => t.id == parent.trainerId);
    },
  },
  Mutation: {
    addCourse: (_, { newCourse }) => {
      let newcoursetobeadded = newCourse;
      coursesModel.push(newcoursetobeadded);
      return newcoursetobeadded;
    },
  },
};
export default resolvers;
