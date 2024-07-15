import { AlbumPhoto } from "../albumPhoto/AlbumPhoto";
import { PlaylistPhoto } from "../playlistPhoto/PlaylistPhoto";

export type Photo = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  url: string | null;
  title: string | null;
  description: string | null;
  uploadedAt: Date | null;
  albumPhotos?: Array<AlbumPhoto>;
  playlistPhotos?: Array<PlaylistPhoto>;
};
