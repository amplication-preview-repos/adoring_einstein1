import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AlbumPhotoServiceBase } from "./base/albumPhoto.service.base";

@Injectable()
export class AlbumPhotoService extends AlbumPhotoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
