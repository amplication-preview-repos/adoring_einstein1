import { User } from "../user/User";
import { Album } from "../album/Album";

export type UserAlbum = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User | null;
  album?: Album | null;
};
