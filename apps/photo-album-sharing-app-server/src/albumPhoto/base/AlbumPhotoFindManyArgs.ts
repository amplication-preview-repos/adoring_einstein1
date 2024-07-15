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
import { AlbumPhotoWhereInput } from "./AlbumPhotoWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AlbumPhotoOrderByInput } from "./AlbumPhotoOrderByInput";

@ArgsType()
class AlbumPhotoFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AlbumPhotoWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AlbumPhotoWhereInput, { nullable: true })
  @Type(() => AlbumPhotoWhereInput)
  where?: AlbumPhotoWhereInput;

  @ApiProperty({
    required: false,
    type: [AlbumPhotoOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AlbumPhotoOrderByInput], { nullable: true })
  @Type(() => AlbumPhotoOrderByInput)
  orderBy?: Array<AlbumPhotoOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AlbumPhotoFindManyArgs as AlbumPhotoFindManyArgs };
