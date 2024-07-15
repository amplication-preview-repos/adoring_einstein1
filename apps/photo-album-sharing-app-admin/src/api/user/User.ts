import { JsonValue } from "type-fest";
import { UserAlbum } from "../userAlbum/UserAlbum";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  userAlbums?: Array<UserAlbum>;
};
