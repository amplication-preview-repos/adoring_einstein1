import { PlaylistPhoto as TPlaylistPhoto } from "../api/playlistPhoto/PlaylistPhoto";

export const PLAYLISTPHOTO_TITLE_FIELD = "id";

export const PlaylistPhotoTitle = (record: TPlaylistPhoto): string => {
  return record.id?.toString() || String(record.id);
};
