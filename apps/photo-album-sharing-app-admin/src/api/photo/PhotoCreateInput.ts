import { AlbumPhotoCreateNestedManyWithoutPhotosInput } from "./AlbumPhotoCreateNestedManyWithoutPhotosInput";
import { PlaylistPhotoCreateNestedManyWithoutPhotosInput } from "./PlaylistPhotoCreateNestedManyWithoutPhotosInput";

export type PhotoCreateInput = {
  url?: string | null;
  title?: string | null;
  description?: string | null;
  uploadedAt?: Date | null;
  albumPhotos?: AlbumPhotoCreateNestedManyWithoutPhotosInput;
  playlistPhotos?: PlaylistPhotoCreateNestedManyWithoutPhotosInput;
};
