import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateEnvironmentDto } from './dto/create-environment.dto';
import { UpdateEnvironmentDto } from './dto/update-environment.dto';

@Injectable()
export class EnvironmentsService {
  constructor(private prisma: PrismaService) {}

  create(createEnvironmentDto: CreateEnvironmentDto) {
    return this.prisma.environment.create({ data: createEnvironmentDto });
  }

  findAll() {
    return this.prisma.environment.findMany();
  }

  findOne(id: number) {
    return this.prisma.environment.findUnique({ where: { id } });
  }

  update(id: number, updateEnvironmentDto: UpdateEnvironmentDto) {
    return this.prisma.environment.update({
      where: { id },
      data: updateEnvironmentDto,
    });
  }

  remove(id: number) {
    return this.prisma.environment.delete({ where: { id } });
  }
}
