import { AlbumPhotoWhereInput } from "./AlbumPhotoWhereInput";
import { AlbumPhotoOrderByInput } from "./AlbumPhotoOrderByInput";

export type AlbumPhotoFindManyArgs = {
  where?: AlbumPhotoWhereInput;
  orderBy?: Array<AlbumPhotoOrderByInput>;
  skip?: number;
  take?: number;
};
