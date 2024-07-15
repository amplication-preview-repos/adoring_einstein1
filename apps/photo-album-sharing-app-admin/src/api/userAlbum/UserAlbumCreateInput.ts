import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { AlbumWhereUniqueInput } from "../album/AlbumWhereUniqueInput";

export type UserAlbumCreateInput = {
  user?: UserWhereUniqueInput | null;
  album?: AlbumWhereUniqueInput | null;
};
