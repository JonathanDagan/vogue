import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EnvironmentsService } from './environments.service';
import { CreateEnvironmentDto } from './dto/create-environment.dto';
import { UpdateEnvironmentDto } from './dto/update-environment.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { EnvironmentEntity } from './entities/environment.entity';

@Controller('environments')
@ApiTags('Environments')
export class EnvironmentsController {
  constructor(private readonly environmentsService: EnvironmentsService) {}

  @Post()
  @ApiCreatedResponse({ type: EnvironmentEntity, isArray: true })
  create(@Body() createEnvironmentDto: CreateEnvironmentDto) {
    return this.environmentsService.create(createEnvironmentDto);
  }

  @Get()
  @ApiOkResponse({ type: EnvironmentEntity, isArray: true })
  findAll() {
    return this.environmentsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: EnvironmentEntity })
  findOne(@Param('id') id: string) {
    return this.environmentsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: EnvironmentEntity })
  update(
    @Param('id') id: string,
    @Body() updateEnvironmentDto: UpdateEnvironmentDto,
  ) {
    return this.environmentsService.update(+id, updateEnvironmentDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: EnvironmentEntity })
  remove(@Param('id') id: string) {
    return this.environmentsService.remove(+id);
  }
}
