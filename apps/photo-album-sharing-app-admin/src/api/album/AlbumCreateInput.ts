import { InputJsonValue } from "../../types";
import { UserAlbumCreateNestedManyWithoutAlbumsInput } from "./UserAlbumCreateNestedManyWithoutAlbumsInput";
import { AlbumPhotoCreateNestedManyWithoutAlbumsInput } from "./AlbumPhotoCreateNestedManyWithoutAlbumsInput";

export type AlbumCreateInput = {
  description?: string | null;
  coverPhoto?: InputJsonValue;
  title?: string | null;
  userAlbums?: UserAlbumCreateNestedManyWithoutAlbumsInput;
  albumPhotos?: AlbumPhotoCreateNestedManyWithoutAlbumsInput;
};
