import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AlbumPhotoResolverBase } from "./base/albumPhoto.resolver.base";
import { AlbumPhoto } from "./base/AlbumPhoto";
import { AlbumPhotoService } from "./albumPhoto.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AlbumPhoto)
export class AlbumPhotoResolver extends AlbumPhotoResolverBase {
  constructor(
    protected readonly service: AlbumPhotoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
