import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AlbumPhotoTitle } from "../albumPhoto/AlbumPhotoTitle";
import { PlaylistPhotoTitle } from "../playlistPhoto/PlaylistPhotoTitle";

export const PhotoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="url" source="url" />
        <TextInput label="title" source="title" />
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="uploadedAt" source="uploadedAt" />
        <ReferenceArrayInput
          source="albumPhotos"
          reference="AlbumPhoto"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AlbumPhotoTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="playlistPhotos"
          reference="PlaylistPhoto"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PlaylistPhotoTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
