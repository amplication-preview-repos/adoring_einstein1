import { PlaylistPhotoUpdateManyWithoutPlaylistsInput } from "./PlaylistPhotoUpdateManyWithoutPlaylistsInput";

export type PlaylistUpdateInput = {
  name?: string | null;
  description?: string | null;
  playlistPhotos?: PlaylistPhotoUpdateManyWithoutPlaylistsInput;
};
