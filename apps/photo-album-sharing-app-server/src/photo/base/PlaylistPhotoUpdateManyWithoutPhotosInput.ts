/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PlaylistPhotoWhereUniqueInput } from "../../playlistPhoto/base/PlaylistPhotoWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PlaylistPhotoUpdateManyWithoutPhotosInput {
  @Field(() => [PlaylistPhotoWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PlaylistPhotoWhereUniqueInput],
  })
  connect?: Array<PlaylistPhotoWhereUniqueInput>;

  @Field(() => [PlaylistPhotoWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PlaylistPhotoWhereUniqueInput],
  })
  disconnect?: Array<PlaylistPhotoWhereUniqueInput>;

  @Field(() => [PlaylistPhotoWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PlaylistPhotoWhereUniqueInput],
  })
  set?: Array<PlaylistPhotoWhereUniqueInput>;
}

export { PlaylistPhotoUpdateManyWithoutPhotosInput as PlaylistPhotoUpdateManyWithoutPhotosInput };
