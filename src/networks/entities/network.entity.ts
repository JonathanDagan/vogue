import { ApiProperty } from '@nestjs/swagger';
import { Network, Prisma } from '@prisma/client';

export class NetworkEntity implements Network {
    @ApiProperty()
    id: number;
    @ApiProperty()
    name: string;
    @ApiProperty()
    createdAt: Date;
    @ApiProperty()
    updatedAt: Date;
}
