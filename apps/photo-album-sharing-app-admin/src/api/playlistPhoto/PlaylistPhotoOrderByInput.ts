import { SortOrder } from "../../util/SortOrder";

export type PlaylistPhotoOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  playlistId?: SortOrder;
  photoId?: SortOrder;
};
