import { PlaylistWhereUniqueInput } from "../playlist/PlaylistWhereUniqueInput";
import { PhotoWhereUniqueInput } from "../photo/PhotoWhereUniqueInput";

export type PlaylistPhotoUpdateInput = {
  playlist?: PlaylistWhereUniqueInput | null;
  photo?: PhotoWhereUniqueInput | null;
};
