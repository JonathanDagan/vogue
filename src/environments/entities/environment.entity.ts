import { ApiProperty } from '@nestjs/swagger';
import { Environment, Prisma } from '@prisma/client';

export class EnvironmentEntity implements Environment {
    @ApiProperty()
    id: number;
    @ApiProperty()
    name: string;
    @ApiProperty()
    createdAt: Date;
    @ApiProperty()
    updatedAt: Date;
}
