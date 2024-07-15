import { AlbumPhoto as TAlbumPhoto } from "../api/albumPhoto/AlbumPhoto";

export const ALBUMPHOTO_TITLE_FIELD = "id";

export const AlbumPhotoTitle = (record: TAlbumPhoto): string => {
  return record.id?.toString() || String(record.id);
};
