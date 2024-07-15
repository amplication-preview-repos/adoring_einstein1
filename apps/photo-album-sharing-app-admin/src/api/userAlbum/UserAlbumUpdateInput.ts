import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { AlbumWhereUniqueInput } from "../album/AlbumWhereUniqueInput";

export type UserAlbumUpdateInput = {
  user?: UserWhereUniqueInput | null;
  album?: AlbumWhereUniqueInput | null;
};
