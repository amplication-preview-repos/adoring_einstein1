import { SortOrder } from "../../util/SortOrder";

export type AlbumOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  coverPhoto?: SortOrder;
  title?: SortOrder;
};
