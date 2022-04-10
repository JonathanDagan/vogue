import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateEnvironmentDto {
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  name: string;
}
