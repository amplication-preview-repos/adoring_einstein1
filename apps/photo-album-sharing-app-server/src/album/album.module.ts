import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AlbumModuleBase } from "./base/album.module.base";
import { AlbumService } from "./album.service";
import { AlbumController } from "./album.controller";
import { AlbumResolver } from "./album.resolver";

@Module({
  imports: [AlbumModuleBase, forwardRef(() => AuthModule)],
  controllers: [AlbumController],
  providers: [AlbumService, AlbumResolver],
  exports: [AlbumService],
})
export class AlbumModule {}
