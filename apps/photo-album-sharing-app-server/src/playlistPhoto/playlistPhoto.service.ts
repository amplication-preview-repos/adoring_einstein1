import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlaylistPhotoServiceBase } from "./base/playlistPhoto.service.base";

@Injectable()
export class PlaylistPhotoService extends PlaylistPhotoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
