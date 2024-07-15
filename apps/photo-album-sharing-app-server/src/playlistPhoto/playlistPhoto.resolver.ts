import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlaylistPhotoResolverBase } from "./base/playlistPhoto.resolver.base";
import { PlaylistPhoto } from "./base/PlaylistPhoto";
import { PlaylistPhotoService } from "./playlistPhoto.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlaylistPhoto)
export class PlaylistPhotoResolver extends PlaylistPhotoResolverBase {
  constructor(
    protected readonly service: PlaylistPhotoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
