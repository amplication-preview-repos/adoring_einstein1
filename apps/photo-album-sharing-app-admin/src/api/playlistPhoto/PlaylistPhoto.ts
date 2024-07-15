import { Playlist } from "../playlist/Playlist";
import { Photo } from "../photo/Photo";

export type PlaylistPhoto = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  playlist?: Playlist | null;
  photo?: Photo | null;
};
