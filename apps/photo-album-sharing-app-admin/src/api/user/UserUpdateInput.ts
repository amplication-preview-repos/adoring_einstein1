import { InputJsonValue } from "../../types";
import { UserAlbumUpdateManyWithoutUsersInput } from "./UserAlbumUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  userAlbums?: UserAlbumUpdateManyWithoutUsersInput;
};
