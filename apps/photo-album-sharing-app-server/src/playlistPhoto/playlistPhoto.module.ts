import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlaylistPhotoModuleBase } from "./base/playlistPhoto.module.base";
import { PlaylistPhotoService } from "./playlistPhoto.service";
import { PlaylistPhotoController } from "./playlistPhoto.controller";
import { PlaylistPhotoResolver } from "./playlistPhoto.resolver";

@Module({
  imports: [PlaylistPhotoModuleBase, forwardRef(() => AuthModule)],
  controllers: [PlaylistPhotoController],
  providers: [PlaylistPhotoService, PlaylistPhotoResolver],
  exports: [PlaylistPhotoService],
})
export class PlaylistPhotoModule {}
