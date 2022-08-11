import generated from '../generated/resolvers'
import User from "./User/resolvers";

const resolvers = [User,...generated];

export default resolvers
