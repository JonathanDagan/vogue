import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateNetworkDto } from './dto/create-network.dto';
import { UpdateNetworkDto } from './dto/update-network.dto';

@Injectable()
export class NetworksService {
  constructor(private prisma: PrismaService) { }

  create(createNetworkDto: CreateNetworkDto) {
    return this.prisma.network.create({ data: createNetworkDto });
  }

  findAll() {
    return this.prisma.network.findMany();
  }

  findOne(id: number) {
    return this.prisma.network.findUnique({ where: { id } });
  }

  update(id: number, updateNetworkDto: UpdateNetworkDto) {
    return this.prisma.network.update({
      where: { id },
      data: updateNetworkDto,
    });
  }

  remove(id: number) {
    return this.prisma.network.delete({ where: { id } });
  }
}
