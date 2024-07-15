import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ALBUM_TITLE_FIELD } from "../album/AlbumTitle";
import { PHOTO_TITLE_FIELD } from "./PhotoTitle";
import { PLAYLIST_TITLE_FIELD } from "../playlist/PlaylistTitle";

export const PhotoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="url" source="url" />
        <TextField label="title" source="title" />
        <TextField label="description" source="description" />
        <TextField label="uploadedAt" source="uploadedAt" />
        <ReferenceManyField
          reference="AlbumPhoto"
          target="photoId"
          label="AlbumPhotos"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="Album" source="album.id" reference="Album">
              <TextField source={ALBUM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Photo" source="photo.id" reference="Photo">
              <TextField source={PHOTO_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PlaylistPhoto"
          target="photoId"
          label="PlaylistPhotos"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Playlist"
              source="playlist.id"
              reference="Playlist"
            >
              <TextField source={PLAYLIST_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Photo" source="photo.id" reference="Photo">
              <TextField source={PHOTO_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
