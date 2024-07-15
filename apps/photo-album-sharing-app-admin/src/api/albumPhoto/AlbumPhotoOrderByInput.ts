import { SortOrder } from "../../util/SortOrder";

export type AlbumPhotoOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  albumId?: SortOrder;
  photoId?: SortOrder;
};
