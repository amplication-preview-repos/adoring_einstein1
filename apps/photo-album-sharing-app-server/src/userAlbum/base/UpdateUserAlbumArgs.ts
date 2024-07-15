/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserAlbumWhereUniqueInput } from "./UserAlbumWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { UserAlbumUpdateInput } from "./UserAlbumUpdateInput";

@ArgsType()
class UpdateUserAlbumArgs {
  @ApiProperty({
    required: true,
    type: () => UserAlbumWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserAlbumWhereUniqueInput)
  @Field(() => UserAlbumWhereUniqueInput, { nullable: false })
  where!: UserAlbumWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => UserAlbumUpdateInput,
  })
  @ValidateNested()
  @Type(() => UserAlbumUpdateInput)
  @Field(() => UserAlbumUpdateInput, { nullable: false })
  data!: UserAlbumUpdateInput;
}

export { UpdateUserAlbumArgs as UpdateUserAlbumArgs };