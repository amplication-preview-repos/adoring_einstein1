import { AlbumPhotoUpdateManyWithoutPhotosInput } from "./AlbumPhotoUpdateManyWithoutPhotosInput";
import { PlaylistPhotoUpdateManyWithoutPhotosInput } from "./PlaylistPhotoUpdateManyWithoutPhotosInput";

export type PhotoUpdateInput = {
  url?: string | null;
  title?: string | null;
  description?: string | null;
  uploadedAt?: Date | null;
  albumPhotos?: AlbumPhotoUpdateManyWithoutPhotosInput;
  playlistPhotos?: PlaylistPhotoUpdateManyWithoutPhotosInput;
};
