import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { AlbumWhereUniqueInput } from "../album/AlbumWhereUniqueInput";

export type UserAlbumWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  album?: AlbumWhereUniqueInput;
};
