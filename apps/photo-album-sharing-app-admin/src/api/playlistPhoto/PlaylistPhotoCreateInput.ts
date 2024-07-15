import { PlaylistWhereUniqueInput } from "../playlist/PlaylistWhereUniqueInput";
import { PhotoWhereUniqueInput } from "../photo/PhotoWhereUniqueInput";

export type PlaylistPhotoCreateInput = {
  playlist?: PlaylistWhereUniqueInput | null;
  photo?: PhotoWhereUniqueInput | null;
};
