import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlaylistPhotoService } from "./playlistPhoto.service";
import { PlaylistPhotoControllerBase } from "./base/playlistPhoto.controller.base";

@swagger.ApiTags("playlistPhotos")
@common.Controller("playlistPhotos")
export class PlaylistPhotoController extends PlaylistPhotoControllerBase {
  constructor(
    protected readonly service: PlaylistPhotoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
