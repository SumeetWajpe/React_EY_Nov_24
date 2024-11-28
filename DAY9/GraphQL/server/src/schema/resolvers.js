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
  },
};
export default resolvers;
