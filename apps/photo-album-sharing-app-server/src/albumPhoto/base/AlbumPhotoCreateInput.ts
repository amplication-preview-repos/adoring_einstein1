/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AlbumWhereUniqueInput } from "../../album/base/AlbumWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { PhotoWhereUniqueInput } from "../../photo/base/PhotoWhereUniqueInput";

@InputType()
class AlbumPhotoCreateInput {
  @ApiProperty({
    required: false,
    type: () => AlbumWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AlbumWhereUniqueInput)
  @IsOptional()
  @Field(() => AlbumWhereUniqueInput, {
    nullable: true,
  })
  album?: AlbumWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => PhotoWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PhotoWhereUniqueInput)
  @IsOptional()
  @Field(() => PhotoWhereUniqueInput, {
    nullable: true,
  })
  photo?: PhotoWhereUniqueInput | null;
}

export { AlbumPhotoCreateInput as AlbumPhotoCreateInput };
