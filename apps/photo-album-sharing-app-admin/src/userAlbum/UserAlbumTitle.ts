import { UserAlbum as TUserAlbum } from "../api/userAlbum/UserAlbum";

export const USERALBUM_TITLE_FIELD = "id";

export const UserAlbumTitle = (record: TUserAlbum): string => {
  return record.id?.toString() || String(record.id);
};
