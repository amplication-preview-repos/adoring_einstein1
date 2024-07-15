import { JsonValue } from "type-fest";
import { UserAlbum } from "../userAlbum/UserAlbum";
import { AlbumPhoto } from "../albumPhoto/AlbumPhoto";

export type Album = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  coverPhoto: JsonValue;
  title: string | null;
  userAlbums?: Array<UserAlbum>;
  albumPhotos?: Array<AlbumPhoto>;
};
