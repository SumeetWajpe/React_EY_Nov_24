import { coursesModel } from "../model/courses.js";
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
};
export default resolvers;
