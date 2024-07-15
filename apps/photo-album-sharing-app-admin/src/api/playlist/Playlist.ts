import { PlaylistPhoto } from "../playlistPhoto/PlaylistPhoto";

export type Playlist = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  playlistPhotos?: Array<PlaylistPhoto>;
};
