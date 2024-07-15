import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserAlbumResolverBase } from "./base/userAlbum.resolver.base";
import { UserAlbum } from "./base/UserAlbum";
import { UserAlbumService } from "./userAlbum.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserAlbum)
export class UserAlbumResolver extends UserAlbumResolverBase {
  constructor(
    protected readonly service: UserAlbumService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
