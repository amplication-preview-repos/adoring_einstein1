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
import { PlaylistPhotoWhereInput } from "./PlaylistPhotoWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PlaylistPhotoOrderByInput } from "./PlaylistPhotoOrderByInput";

@ArgsType()
class PlaylistPhotoFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PlaylistPhotoWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PlaylistPhotoWhereInput, { nullable: true })
  @Type(() => PlaylistPhotoWhereInput)
  where?: PlaylistPhotoWhereInput;

  @ApiProperty({
    required: false,
    type: [PlaylistPhotoOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PlaylistPhotoOrderByInput], { nullable: true })
  @Type(() => PlaylistPhotoOrderByInput)
  orderBy?: Array<PlaylistPhotoOrderByInput>;

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

export { PlaylistPhotoFindManyArgs as PlaylistPhotoFindManyArgs };
