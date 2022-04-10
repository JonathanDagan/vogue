import { ApiProperty } from '@nestjs/swagger';
import { Location, Prisma } from '@prisma/client';

export class LocationEntity implements Location{
    @ApiProperty()
    id: number;
    @ApiProperty()
    name: string;
    @ApiProperty()
    createdAt: Date;
    @ApiProperty()
    updatedAt: Date;
}
