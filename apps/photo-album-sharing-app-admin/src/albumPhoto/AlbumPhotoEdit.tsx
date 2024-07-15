import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AlbumTitle } from "../album/AlbumTitle";
import { PhotoTitle } from "../photo/PhotoTitle";

export const AlbumPhotoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="album.id" reference="Album" label="Album">
          <SelectInput optionText={AlbumTitle} />
        </ReferenceInput>
        <ReferenceInput source="photo.id" reference="Photo" label="Photo">
          <SelectInput optionText={PhotoTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
