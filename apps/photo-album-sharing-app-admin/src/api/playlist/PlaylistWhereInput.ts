import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PlaylistPhotoListRelationFilter } from "../playlistPhoto/PlaylistPhotoListRelationFilter";

export type PlaylistWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  playlistPhotos?: PlaylistPhotoListRelationFilter;
};
