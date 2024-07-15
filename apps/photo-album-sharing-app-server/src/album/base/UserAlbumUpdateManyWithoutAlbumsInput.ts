/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { UserAlbumWhereUniqueInput } from "../../userAlbum/base/UserAlbumWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class UserAlbumUpdateManyWithoutAlbumsInput {
  @Field(() => [UserAlbumWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserAlbumWhereUniqueInput],
  })
  connect?: Array<UserAlbumWhereUniqueInput>;

  @Field(() => [UserAlbumWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserAlbumWhereUniqueInput],
  })
  disconnect?: Array<UserAlbumWhereUniqueInput>;

  @Field(() => [UserAlbumWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserAlbumWhereUniqueInput],
  })
  set?: Array<UserAlbumWhereUniqueInput>;
}

export { UserAlbumUpdateManyWithoutAlbumsInput as UserAlbumUpdateManyWithoutAlbumsInput };
