import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PlaylistTitle } from "../playlist/PlaylistTitle";
import { PhotoTitle } from "../photo/PhotoTitle";

export const PlaylistPhotoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
