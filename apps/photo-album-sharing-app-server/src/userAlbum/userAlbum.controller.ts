import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserAlbumService } from "./userAlbum.service";
import { UserAlbumControllerBase } from "./base/userAlbum.controller.base";

@swagger.ApiTags("userAlbums")
@common.Controller("userAlbums")
export class UserAlbumController extends UserAlbumControllerBase {
  constructor(
    protected readonly service: UserAlbumService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
