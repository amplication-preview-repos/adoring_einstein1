import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PlaylistTitle } from "../playlist/PlaylistTitle";
import { PhotoTitle } from "../photo/PhotoTitle";

export const PlaylistPhotoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="playlist.id"
          reference="Playlist"
          label="Playlist"
        >
          <SelectInput optionText={PlaylistTitle} />
        </ReferenceInput>
        <ReferenceInput source="photo.id" reference="Photo" label="Photo">
          <SelectInput optionText={PhotoTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
