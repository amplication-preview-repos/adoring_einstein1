import { StringFilter } from "../../util/StringFilter";
import { PlaylistWhereUniqueInput } from "../playlist/PlaylistWhereUniqueInput";
import { PhotoWhereUniqueInput } from "../photo/PhotoWhereUniqueInput";

export type PlaylistPhotoWhereInput = {
  id?: StringFilter;
  playlist?: PlaylistWhereUniqueInput;
  photo?: PhotoWhereUniqueInput;
};
