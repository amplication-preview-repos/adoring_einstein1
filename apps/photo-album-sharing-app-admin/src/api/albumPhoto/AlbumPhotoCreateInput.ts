import { AlbumWhereUniqueInput } from "../album/AlbumWhereUniqueInput";
import { PhotoWhereUniqueInput } from "../photo/PhotoWhereUniqueInput";

export type AlbumPhotoCreateInput = {
  album?: AlbumWhereUniqueInput | null;
  photo?: PhotoWhereUniqueInput | null;
};
