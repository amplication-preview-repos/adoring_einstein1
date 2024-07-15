import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AlbumTitle } from "../album/AlbumTitle";
import { PhotoTitle } from "../photo/PhotoTitle";

export const AlbumPhotoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="album.id" reference="Album" label="Album">
          <SelectInput optionText={AlbumTitle} />
        </ReferenceInput>
        <ReferenceInput source="photo.id" reference="Photo" label="Photo">
          <SelectInput optionText={PhotoTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
