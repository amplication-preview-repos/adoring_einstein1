import { PlaylistPhotoWhereInput } from "./PlaylistPhotoWhereInput";
import { PlaylistPhotoOrderByInput } from "./PlaylistPhotoOrderByInput";

export type PlaylistPhotoFindManyArgs = {
  where?: PlaylistPhotoWhereInput;
  orderBy?: Array<PlaylistPhotoOrderByInput>;
  skip?: number;
  take?: number;
};
