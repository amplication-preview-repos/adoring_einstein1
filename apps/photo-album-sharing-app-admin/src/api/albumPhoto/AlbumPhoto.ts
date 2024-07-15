import { Album } from "../album/Album";
import { Photo } from "../photo/Photo";

export type AlbumPhoto = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  album?: Album | null;
  photo?: Photo | null;
};
