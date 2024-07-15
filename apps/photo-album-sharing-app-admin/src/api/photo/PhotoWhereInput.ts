import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { AlbumPhotoListRelationFilter } from "../albumPhoto/AlbumPhotoListRelationFilter";
import { PlaylistPhotoListRelationFilter } from "../playlistPhoto/PlaylistPhotoListRelationFilter";

export type PhotoWhereInput = {
  id?: StringFilter;
  url?: StringNullableFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  uploadedAt?: DateTimeNullableFilter;
  albumPhotos?: AlbumPhotoListRelationFilter;
  playlistPhotos?: PlaylistPhotoListRelationFilter;
};
