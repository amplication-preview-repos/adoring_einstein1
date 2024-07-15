import { PlaylistPhotoCreateNestedManyWithoutPlaylistsInput } from "./PlaylistPhotoCreateNestedManyWithoutPlaylistsInput";

export type PlaylistCreateInput = {
  name?: string | null;
  description?: string | null;
  playlistPhotos?: PlaylistPhotoCreateNestedManyWithoutPlaylistsInput;
};
