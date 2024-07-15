import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserAlbumServiceBase } from "./base/userAlbum.service.base";

@Injectable()
export class UserAlbumService extends UserAlbumServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
