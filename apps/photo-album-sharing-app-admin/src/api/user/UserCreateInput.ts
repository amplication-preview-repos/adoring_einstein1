import { InputJsonValue } from "../../types";
import { UserAlbumCreateNestedManyWithoutUsersInput } from "./UserAlbumCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  userAlbums?: UserAlbumCreateNestedManyWithoutUsersInput;
};
