import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserAlbumModuleBase } from "./base/userAlbum.module.base";
import { UserAlbumService } from "./userAlbum.service";
import { UserAlbumController } from "./userAlbum.controller";
import { UserAlbumResolver } from "./userAlbum.resolver";

@Module({
  imports: [UserAlbumModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserAlbumController],
  providers: [UserAlbumService, UserAlbumResolver],
  exports: [UserAlbumService],
})
export class UserAlbumModule {}
