import { UserAlbumWhereInput } from "./UserAlbumWhereInput";
import { UserAlbumOrderByInput } from "./UserAlbumOrderByInput";

export type UserAlbumFindManyArgs = {
  where?: UserAlbumWhereInput;
  orderBy?: Array<UserAlbumOrderByInput>;
  skip?: number;
  take?: number;
};
