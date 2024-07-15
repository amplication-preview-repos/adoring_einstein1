import { StringFilter } from "../../util/StringFilter";
import { AlbumWhereUniqueInput } from "../album/AlbumWhereUniqueInput";
import { PhotoWhereUniqueInput } from "../photo/PhotoWhereUniqueInput";

export type AlbumPhotoWhereInput = {
  id?: StringFilter;
  album?: AlbumWhereUniqueInput;
  photo?: PhotoWhereUniqueInput;
};
