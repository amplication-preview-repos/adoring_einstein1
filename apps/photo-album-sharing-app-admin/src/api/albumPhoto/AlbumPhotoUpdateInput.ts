import { AlbumWhereUniqueInput } from "../album/AlbumWhereUniqueInput";
import { PhotoWhereUniqueInput } from "../photo/PhotoWhereUniqueInput";

export type AlbumPhotoUpdateInput = {
  album?: AlbumWhereUniqueInput | null;
  photo?: PhotoWhereUniqueInput | null;
};
