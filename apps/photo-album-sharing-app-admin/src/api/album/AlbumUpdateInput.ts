import { InputJsonValue } from "../../types";
import { UserAlbumUpdateManyWithoutAlbumsInput } from "./UserAlbumUpdateManyWithoutAlbumsInput";
import { AlbumPhotoUpdateManyWithoutAlbumsInput } from "./AlbumPhotoUpdateManyWithoutAlbumsInput";

export type AlbumUpdateInput = {
  description?: string | null;
  coverPhoto?: InputJsonValue;
  title?: string | null;
  userAlbums?: UserAlbumUpdateManyWithoutAlbumsInput;
  albumPhotos?: AlbumPhotoUpdateManyWithoutAlbumsInput;
};
