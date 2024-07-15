import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";
import { AlbumTitle } from "../album/AlbumTitle";

export const UserAlbumEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="album.id" reference="Album" label="Album">
          <SelectInput optionText={AlbumTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
