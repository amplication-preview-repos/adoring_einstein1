import { SortOrder } from "../../util/SortOrder";

export type PhotoOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  uploadedAt?: SortOrder;
};
