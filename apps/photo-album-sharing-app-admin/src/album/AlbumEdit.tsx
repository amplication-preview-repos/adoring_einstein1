import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserAlbumTitle } from "../userAlbum/UserAlbumTitle";
import { AlbumPhotoTitle } from "../albumPhoto/AlbumPhotoTitle";

export const AlbumEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <div />
        <TextInput label="title" source="title" />
        <ReferenceArrayInput
          source="userAlbums"
          reference="UserAlbum"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserAlbumTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="albumPhotos"
          reference="AlbumPhoto"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AlbumPhotoTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
