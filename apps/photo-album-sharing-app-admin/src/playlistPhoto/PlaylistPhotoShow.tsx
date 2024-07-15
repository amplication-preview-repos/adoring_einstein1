import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { PLAYLIST_TITLE_FIELD } from "../playlist/PlaylistTitle";
import { PHOTO_TITLE_FIELD } from "../photo/PhotoTitle";

export const PlaylistPhotoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
