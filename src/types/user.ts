import { Role } from "./auth.js"
import { UUID } from "./index.js";

/*
* TODO: update all references to user_id to utilize UUID (tests, service functions)
*/
export type User = {
  user_id: UUID;
  username: string;
  verified: boolean;
  password: string;
  email: string;
  name: string;
  role_id: Role;
}