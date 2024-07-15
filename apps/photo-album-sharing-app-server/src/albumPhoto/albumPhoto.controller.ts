import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AlbumPhotoService } from "./albumPhoto.service";
import { AlbumPhotoControllerBase } from "./base/albumPhoto.controller.base";

@swagger.ApiTags("albumPhotos")
@common.Controller("albumPhotos")
export class AlbumPhotoController extends AlbumPhotoControllerBase {
  constructor(
    protected readonly service: AlbumPhotoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
