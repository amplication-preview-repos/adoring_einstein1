import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AlbumPhotoModuleBase } from "./base/albumPhoto.module.base";
import { AlbumPhotoService } from "./albumPhoto.service";
import { AlbumPhotoController } from "./albumPhoto.controller";
import { AlbumPhotoResolver } from "./albumPhoto.resolver";

@Module({
  imports: [AlbumPhotoModuleBase, forwardRef(() => AuthModule)],
  controllers: [AlbumPhotoController],
  providers: [AlbumPhotoService, AlbumPhotoResolver],
  exports: [AlbumPhotoService],
})
export class AlbumPhotoModule {}
