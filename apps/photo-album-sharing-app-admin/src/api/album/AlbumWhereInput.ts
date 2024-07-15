import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserAlbumListRelationFilter } from "../userAlbum/UserAlbumListRelationFilter";
import { AlbumPhotoListRelationFilter } from "../albumPhoto/AlbumPhotoListRelationFilter";

export type AlbumWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  coverPhoto?: JsonFilter;
  title?: StringNullableFilter;
  userAlbums?: UserAlbumListRelationFilter;
  albumPhotos?: AlbumPhotoListRelationFilter;
};
