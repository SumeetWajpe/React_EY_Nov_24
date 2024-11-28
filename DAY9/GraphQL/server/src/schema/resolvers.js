import { usersModel } from "../model/user.js";

const resolvers = {
  Query: {
    users: () => {
      return usersModel;
    },
  },
};
export default resolvers;
