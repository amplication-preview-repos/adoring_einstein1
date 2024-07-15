import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";
import { AlbumTitle } from "../album/AlbumTitle";

export const UserAlbumCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="album.id" reference="Album" label="Album">
          <SelectInput optionText={AlbumTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
