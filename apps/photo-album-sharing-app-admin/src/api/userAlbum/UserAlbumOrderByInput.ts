import { SortOrder } from "../../util/SortOrder";

export type UserAlbumOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  albumId?: SortOrder;
};
